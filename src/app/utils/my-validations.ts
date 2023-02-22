import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class MyValidations {

    static arePasswordsEqual: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
        const password = control.get("password")
        const confirmarPassword = control.get("confirmPassword")
        return !!password.value && !!confirmarPassword.value && (password.value === confirmarPassword.value)
          ? null
          : { passAreNotEqual: true }
      }
}