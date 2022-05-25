import { AbstractControl } from '@angular/forms';

function hasRepeatingDigits(s: string): boolean {
  return (/([0-9]).*?\1/).test(s);
}


export function createPasswordStrengthValidator(control: AbstractControl) {
  const value = control.value;

  if (!value) {
    return null;
  }

  return hasRepeatingDigits(value) ? {passwordStrength: true} : null;
}
