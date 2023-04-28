import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BikeApp-Front';

  constructor(private apiservice: ApiService) {}

  journeys: any = [];

  ngOnInit() {
    this.apiservice.getJourneys().subscribe((response) => {
      console.log(response);
      this.journeys = response;
    });
  }
}
