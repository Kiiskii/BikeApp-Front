import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from './journey.model';
import { Station } from './station.model';
import { Details } from './details.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  journeysURL = 'http://localhost:3000/api/journeys';
  journeycountURL = 'http://localhost:3000/api/journeycount';
  stationsURL = 'http://localhost:3000/api/stations';
  stationcountURL = 'http://localhost:3000/api/stationcount';
  searchURL = 'http://localhost:3000/api/search/';
  detailsURL = 'http://localhost:3000/api/details/';

  getJourneys(page: number): Observable<Journey[]> {
    return this.http.get<Journey[]>(this.journeysURL + '?page=' + page);
  }

  getJourneyPages(): Observable<number> {
    return this.http.get<number>(this.journeycountURL);
  }

  getStations(page: number): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationsURL + '?page=' + page);
  }
  getStationPages(): Observable<number> {
    return this.http.get<number>(this.stationcountURL);
  }

  getSearchResult(searchQuery: string, page: number): Observable<Station[]> {
    return this.http.get<Station[]>(
      this.searchURL + searchQuery + '?page' + page
    );
  }

  getDetails(detailsId: number): Observable<Details> {
    return this.http.get<Details>(this.detailsURL + detailsId);
  }
}
