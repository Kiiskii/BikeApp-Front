import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Journey } from '../journey.model';
import { StringToDatePipe } from '../stringToDate.pipe';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css'],
})
export class JourneysComponent {
  constructor(private apiservice: ApiService) {}

  journeys: Journey[] = [];

  ngOnInit() {
    this.apiservice.getJourneys().subscribe((response) => {
      console.log(response);
      this.journeys = response;
    });
  }
}
