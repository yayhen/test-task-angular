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

  async getUser(id: string) {
    let data;
    let response = await fetch('http://localhost:3000/users/'+id);
    if(response.ok) {
      data = await response.json();
    }
    return data;
  }

  async searchData(word: string) {
    let dataName;
    let responseFindName = await fetch('http://localhost:3000/users?firstName_like='+word);
    if(responseFindName.ok) {
      dataName = await responseFindName.json();
    }

    let dataLastName;
    let responseFindLastName = await fetch('http://localhost:3000/users?lastName_like='+word);
    if(responseFindLastName.ok) {
      dataLastName = await responseFindLastName.json();
    }

    let searchResults = dataName.concat(dataLastName);
    searchResults.forEach((element: any, index: any) => {
      searchResults[index] = JSON.stringify(searchResults[index]);
    });

    let uniqueSet = new Set <string>(searchResults);
    let uniqueArray = [...uniqueSet];
    uniqueArray.forEach((item, index) => {
      uniqueArray[index] = JSON.parse(uniqueArray[index]);
    })
    return uniqueArray;
  }

  async addNewUser(user: {
                  firstName: string, 
                  laastName: string, 
                  dateOfBirth: string,
                  education: {univercityName: string, dateOfStart: string, dateOfFinish: string}[]}) {
    let response = await fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
  }

  async updateUser(user: {
                    firstName: string, 
                    laastName: string, 
                    dateOfBirth: string,
                    education: {univercityName: string, dateOfStart: string, dateOfFinish: string}[]},
                    id: string) {
    let response = await fetch('http://localhost:3000/users/'+id, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
  }

  async deleteUser(userId: number) {
    let response = await fetch('http://localhost:3000/users'+`/${userId}`, {
      method: "DELETE"
    })
  }

  async checkUserName(userName: string) {
    let dataName;
    let responseUserName = await fetch('http://localhost:3000/users?login='+userName);
    if(responseUserName.ok) {
      dataName = await responseUserName.json();
      return dataName[0].userType;
    }
  }
}