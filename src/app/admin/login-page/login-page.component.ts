import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../shared/types';
// import { AuthService } from '../../shared/services';
import { Observable, switchMap, takeUntil } from 'rxjs';
import { destroy } from '../../shared/helpers';
import { Store } from '@ngxs/store';
import { Auth } from '../../store/app.action';
import { AppStateModel } from '../../store/app.state';

@Component({
  selector: 'mg-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly destroy$ = destroy();

  public loginForm!: FormGroup;
  public isLogging$!: Observable<boolean>;

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });

    this.isLogging$ = this.store.select((state: AppStateModel) => state.isLogging);
  }

  public loginFormSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
  }

  public get emailControl(): FormControl {
    return <FormControl<AbstractControl>>this.loginForm.get('email');
  }

  public get passwordControl(): FormControl {
    return <FormControl<AbstractControl>>this.loginForm.get('password');
  }

  private login(): void {
    const { email, password } = this.loginForm.value;
    const user: IUser = {
      email,
      password,
    };

    this.store
      .dispatch(new Auth.Logging(user))
      .pipe(
        switchMap(() => this.store.dispatch(new Auth.NotLogging())),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.loginForm.reset();
      });
  }
}
