import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  id: string;
  info!: {firstName: string,
        lastName: string,
        dateOfBirth: string,
        education: any[],
        photo: string};

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService) {
    this.id = activateRoute.snapshot.params['id'];
    this.getUserInfo();
  }

  ngOnInit(): void {
  }

  getUserInfo() {
    this.dataService.getUser(this.id).then(data => this.info = data);
  }

}
