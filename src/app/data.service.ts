import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rootUrl = 'http://localhost:3000/';

  constructor() { }

  async getUsersList() {
    try {
      let data;
      let response = await fetch(this.rootUrl+'users');
      if(response.ok) {
        data = await response.json();
      }
      return data;
    } catch (error) {
      return []
    }
    
  }

  async getUser(id: string) {
    try {
      let data;
      let response = await fetch(this.rootUrl+'users/'+id);
      if(response.ok) {
        data = await response.json();
      }
      return data;
    } catch (error) {
      return {}
    }
    
  }

  async searchData(word: string) {
    try {
      let dataName;
      let responseFindName = await fetch(this.rootUrl+'users?firstName_like='+word);
      if(responseFindName.ok) {
        dataName = await responseFindName.json();
      }

      let dataLastName;
      let responseFindLastName = await fetch(this.rootUrl+'users?lastName_like='+word);
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
    } catch (error) {
      return []
    }
    
  }

  async addNewUser(user: {
      firstName: string, 
      laastName: string, 
      dateOfBirth: string,
      education: {univercityName: string, dateOfStart: string, dateOfFinish: string}[]}
      ) {
    try {
      let response = await fetch(this.rootUrl+'users', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      });
    } catch (error) {
      
    }
    
  }

  async updateUser(user: {
      firstName: string, 
      laastName: string, 
      dateOfBirth: string,
      education: {univercityName: string, dateOfStart: string, dateOfFinish: string}[]},
      id: string
      ) {
    try {
      let response = await fetch(this.rootUrl+'users/'+id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      });
    } catch (error) {
      
    }
    
  }

  async deleteUser(userId: number) {
    try {
      let response = await fetch(this.rootUrl+'users'+`/${userId}`, {
        method: "DELETE"
      })
    } catch (error) {
      
    }
  }

  async checkUserName(userName: string) {
    try {
      let dataName;
      let responseUserName = await fetch(this.rootUrl+'users?login='+userName);
      if(responseUserName.ok) {
        dataName = await responseUserName.json();
        return dataName[0].userType;
      }
    } catch (error) {
      return 'user'
    }
  }
}