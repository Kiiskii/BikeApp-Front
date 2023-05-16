import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Station } from '../station.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private apiservice: ApiService, private route: ActivatedRoute) {}

  stations = {} as Station;
  departurecount = 0;
  returncount = 0;

  ngOnInit(): void {
    this.getStation();
  }

  getStation() {
    const id = Number(this.route.snapshot.paramMap.get('fid'));
    this.apiservice.getDetails(id).subscribe((response) => {
      this.stations = response.stations[0];
      this.departurecount = response.departurecount;
      this.returncount = response.returncount;
      console.log(response);
    });
  }
}
