import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'USD'},
    {id: 3, name: 'ThaiLand'}
  ];
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[+][8][4][0-9]{9,10}')])
    }, [this.validatePassword]);
  }

  validatePassword(pass: any){
    if(pass.controls.password.value === pass.controls.confirmPassword.value ){
      return null;
    }
    return {"invalid": true}
  }

  ngOnInit(): void {
  }

  saveRegister() {
    console.log(this.registerForm.value);
  }

}
