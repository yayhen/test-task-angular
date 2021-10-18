import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: any = [];
  isModalDialogVisible: boolean = false;
  isDeletingUserId: number = NaN;
  searchResults: any = [];
  isLoading = true;

  constructor(private dataService: DataService, public loginService: LoginService) { }
  
  ngOnInit(): void {
    this.dataService.getUsersList().then(data => {this.users = data; this.isLoading = false;});
    
  }

  deleteUserButtonHandler(userId: number) {
    this.isModalDialogVisible = true;
    this.isDeletingUserId = userId;
  }

  deleteUser(id: number) {
    this.dataService.deleteUser(id);
    this.users.forEach((element: { id: any; }, index: number) => {
      if(element.id == id) {
        this.users.splice(index, 1);
      }
    });
  }

  modalIsConfirmed(modalEvent: boolean) {
    if(modalEvent==true) {
      this.deleteUser(this.isDeletingUserId);
    }else {
      
    }
    this.isModalDialogVisible = false;
  }

  testAPI() {
    this.dataService.searchData('pidor').then(data => console.log(data));
  }

  searchInputHandler(event: any) {
    this.dataService.searchData(event.target.value).then(data => this.searchResults = data);
  }

  searchButtonHandler() {
    if(this.searchResults.length!=0) {
      this.users = this.searchResults;
    }
  }
}
