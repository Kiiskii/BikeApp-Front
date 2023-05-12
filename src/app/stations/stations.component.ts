import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Station } from '../station.model';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'],
})
export class StationsComponent {
  constructor(private apiservice: ApiService) {}

  stations: Station[] = [];
  page: number = 1;
  maxPage: number = 1;
  searchTerm: string = '';
  searchResult: Station[] = [];

  ngOnInit() {
    this.fetchData();
    this.fetchPages();
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  search() {
    if (this.searchTerm == '') return;
    const capitalizedString = this.capitalizeFirstLetter(this.searchTerm);
    console.log(capitalizedString);
    this.apiservice
      .getSearchResult(capitalizedString, this.page)
      .subscribe((response) => {
        console.log(response);
        this.stations = response;
      });
  }

  public fetchData() {
    this.apiservice.getStations(this.page).subscribe((response) => {
      this.stations = response;
    });
  }

  public fetchPages() {
    this.apiservice.getStationPages().subscribe((response: number) => {
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
