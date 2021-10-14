import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogged: boolean = false;
  private userStatus: string = 'user';

  constructor() { }

  getIsLogged() {
    return this.isLogged;
  }

  setIsLogged(status: boolean = false) {
    this.isLogged = status;
  }

  getUserStatus() {
    return this.userStatus;
  }

  setUserStatus(status: string = 'user') {
    this.userStatus = status;
  }
}
