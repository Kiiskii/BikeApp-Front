import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'],
})
export class StationsComponent {
  constructor(private apiservice: ApiService) {}

  stations: any = [];

  ngOnInit() {
    this.apiservice.getStations().subscribe((response) => {
      console.log(response);
      this.stations = response;
    });
  }
}
