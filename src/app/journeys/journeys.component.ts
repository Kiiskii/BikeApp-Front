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
  page: number = 1;
  maxPage: number = 1;

  convertSecondsToMinutes(time: number) {
    if (time >= 60) {
      let minutes = Math.floor(time / 60);
      let remainingTime = time % 60;
      if (remainingTime === 0) {
        return `${minutes}min`;
      }
      return `${minutes}min ${remainingTime}sec`;
    }
    return `${time}sec`;
  }

  ngOnInit() {
    this.fetchData();
    this.fetchPages();
  }

  public fetchData() {
    this.apiservice.getJourneys(this.page).subscribe((response) => {
      console.log(response);
      this.journeys = response;
    });
  }

  public fetchPages() {
    this.apiservice.getJourneyPages().subscribe((response: number) => {
      this.maxPage = response;
    });
  }

  public nextPage() {
    if (this.page == this.maxPage) return;
    this.page++;
    this.fetchData();
  }

  public prevPage() {
    if (this.page == 1) return;
    this.page--;
    this.fetchData();
  }

  public lastPage() {
    if (this.page == this.maxPage) return;
    this.page = this.maxPage;
    this.fetchData();
  }

  public firstPage() {
    if (this.page == 1) return;
    this.page = 1;
    this.fetchData();
  }
}
