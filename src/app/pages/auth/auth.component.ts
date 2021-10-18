import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.logInForm = this.fb.group({
      login: [''],
      password: [''],
    })
  }

  async submitButtonHandler() {
    await this.loginService.logIn(this.logInForm.value.login);
    this.loginService.setIsLogged(true);
    this.router.navigate(['users']);
  }

}
