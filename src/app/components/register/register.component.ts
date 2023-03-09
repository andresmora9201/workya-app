import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { RegisterRq } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register/register.service';
import { MyValidations } from '../../utils/my-validations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registerService: RegisterService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firtsName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: MyValidations.arePasswordsEqual
    });

    // this.form.valueChanges
    // .pipe(debounceTime(500))
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      const body: RegisterRq = {
        firtsName: value.firtsName,
        lastName: value.lastName,
        email: value.email,
        password: value.password
      }
      this.registerService.create(body).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  get firtsNameField() {
    return this.form.get('firtsName');
  }

  get firtsNameFieldIsValid() {
    return this.firtsNameField.touched && this.firtsNameField.valid;
  }

  get firtsNameFieldIsInvalid() {
    return this.firtsNameField.touched && this.firtsNameField.invalid;
  }

  get lastNameField() {
    return this.form.get('lastName');
  }

  get lastNameFieldIsValid() {
    return this.lastNameField.touched && this.lastNameField.valid;
  }

  get lastNameFieldIsInvalid() {
    return this.lastNameField.touched && this.lastNameField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get emailFieldIsValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get passwordField() {
    return this.form.get('password');
  }

  get passwordFieldIsValid() {
    return this.passwordField.touched && this.passwordField.valid;
  }

  get passwordFieldIsInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }

  get confirmPasswordFieldErrors() {
    return JSON.stringify(this.form.get('confirmPassword'));
  }

  get confirmPasswordFieldIsValid() {
    return this.confirmPasswordField.touched && this.confirmPasswordField.valid;
  }

  get confirmPasswordFieldIsInvalid() {
    return this.confirmPasswordField.touched && this.confirmPasswordField.invalid;
  }

  get passwordAreNotEqual() {
    return this.form.hasError('passAreNotEqual') && this.passwordField.touched && this.confirmPasswordField.touched;
  }
}
