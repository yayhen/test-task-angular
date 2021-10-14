import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  constructor(private dataService: DataService) { }
  users: string = '';
  ngOnInit(): void {
    this.dataService.getUsersList().then(data => this.users = data);
  }

}
