import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  isEasy = false
  isMedium = false
  isStrong = false
  isEmpty = true
  isShort = false

  constructor() {
  }

  formTestPass = new FormGroup({
    pass: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  ngOnInit() {
    // @ts-ignore
    this.formTestPass.get('pass').valueChanges.subscribe(value =>
      this.checkPasswordStrength(value)
    );
  }

  /*Only letters/digits/symbols - the password is easy;
  Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
  Has letters, symbols and numbers - the password is strong;
  */
  checkPasswordStrength(password: string | null): void {
    // Reset all strength flags
    this.isEmpty = false;
    this.isShort = false
    this.isEasy = false;
    this.isMedium = false;
    this.isStrong = false;

    if (!password) this.isEmpty = true;
    else if (password.length < 8) this.isShort = true;
    // Check if the password contains only letters, digits, or symbols
    else if (/^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password) || /^[^\w\s]+$/.test(password)) {
      this.isEasy = true;
    }
    // Check if the password contains at least one letter, one digit, and one symbol
    else if (password.match(/[a-zA-Z]/) && password.match(/\d/) && password.match(/[^\w\s]/)) {
      this.isStrong = true;
    }
    // Check if the password contains at least one letter and one digit or symbol
    else if (
      (password.match(/[a-zA-Z]/) && (password.match(/\d/) || password.match(/[^\w\s]/)))
      || ((password.match(/\d/) && (password.match(/[a-zA-Z]/) || password.match(/[^\w\s]/))))
    ) this.isMedium = true;

  }

  get pass() {
    return this.formTestPass.controls.pass as FormControl
  }

  submit() {
    console.log('password is strong-', this.isStrong);
  }

}
