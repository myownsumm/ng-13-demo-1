import {
  FormGroup
} from '@angular/forms';
import { createPasswordStrengthValidator } from './password.validator';

export class FormValidators {
  static mustMatch(controlName: string, matchingControlName: string) {
    console.log('mustMatch');
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }

  // static createPasswordStrengthValidator() {}
}