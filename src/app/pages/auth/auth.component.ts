import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.logInForm = this.fb.group({
      login: ['user'],
      password: [''],
    })
  }

  submitButtonHandler() {
    this.loginService.setIsLogged(true);
    if(this.logInForm.value.login === 'admin') {
      this.loginService.setUserStatus('admin');
    }else {
      this.loginService.setUserStatus('user');
    }
    console.log(this.loginService.getUserStatus());
  }

}
