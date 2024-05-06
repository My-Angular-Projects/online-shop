import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mg-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  public loginFormSubmit(): void {
    //
  }

  public get emailControl(): FormControl {
    return <FormControl<AbstractControl>>this.loginForm.get('email');
  }

  public get passwordControl(): FormControl {
    return <FormControl<AbstractControl>>this.loginForm.get('password');
  }
}
