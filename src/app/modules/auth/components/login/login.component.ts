import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../form-validators/form.validators';
import { createPasswordStrengthValidator } from '../../form-validators/password.validator';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly authStateService: AuthStateService, private readonly fb: FormBuilder) {
  }

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, createPasswordStrengthValidator]),
    passwordConfirmation: new FormControl('', Validators.required),
  }, FormValidators.mustMatch('password', 'passwordConfirmation'));

  public onSubmit(): void {
    this.authStateService.loginAttempt({
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    });
  }
}
