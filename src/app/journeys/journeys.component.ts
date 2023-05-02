import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Journey } from '../journey.model';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css'],
})
export class JourneysComponent {
  constructor(private apiservice: ApiService) {}

  journeys: Journey[] = [];

  convertSecondsToMinutes(time: number) {
    if (time >= 60) {
      let minutes = Math.floor(time / 60);
      let remainingTime = time % 60;
      return `${minutes}min ${remainingTime}sec`;
    }
    return `${time}sec`;
  }

  ngOnInit() {
    this.apiservice.getJourneys().subscribe((response) => {
      console.log(response);
      this.journeys = response;
    });
  }
}
