import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css'],
})
export class JourneysComponent {
  constructor(private apiservice: ApiService) {}

  journeys: any = [];

  ngOnInit() {
    this.apiservice.getJourneys().subscribe((response) => {
      console.log(response);
      this.journeys = response;
    });
  }
}
