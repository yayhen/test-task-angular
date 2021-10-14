import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getUsersList() {
    let data;
    let response = await fetch('http://localhost:3000/users');
    if(response.ok) {
      data = await response.json();
    }
    return data;
  }

  async addNewUser(user: {firstName: string, laastName: string}) {
    let response = await fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
  }
}
