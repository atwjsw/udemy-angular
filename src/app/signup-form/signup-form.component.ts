import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required),
    })
  });
  
  login() {
    console.log('login')
    // let isValid = authService.login(this.form.value);
    let isValid = true;
    if (this.form.value.username === this.form.value.password) isValid = false;
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

  get username() {
    return this.form.get('account.username');
  }

  constructor() { }
}
