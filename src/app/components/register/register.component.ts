import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
    
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firtsName: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]+$/)]],
      lastName: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    // this.form.valueChanges
    // .pipe(debounceTime(500))
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const value = this.form.value;
      console.log(value);
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

  get emailField() {
    return this.form.get('email');
  }

  get emailFieldIsValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get textArea() {
    return this.form.get('text');
  }

}
