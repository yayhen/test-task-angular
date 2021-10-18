import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogged: boolean = false;
  private userStatus: string = 'user';

  constructor(private dataService: DataService) { }

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

  async logIn(userName: string) {
    await this.setUserStatus(await this.dataService.checkUserName(userName));
    this.setIsLogged(true);
  }
}
