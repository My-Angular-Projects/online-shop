import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../shared/types';
import { AuthService } from '../../shared/services';
import { takeUntil } from 'rxjs';
import { destroy } from '../../shared/helpers';

@Component({
  selector: 'mg-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly destroy$ = destroy();

  public loginForm!: FormGroup;
  public isSubmitted = signal<boolean>(false);

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
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
    this.isSubmitted.set(true);

    const { email, password } = this.loginForm.value;
    const user: IUser = {
      email,
      password,
    };

    this.authService
      .login(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: IUser) => {
        console.log('response >>', response);
        this.isSubmitted.set(false);
        this.loginForm.reset();
      });
  }
}
