import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from './journey.model';
import { Station } from './station.model';
import { Details } from './details.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  journeysURL = environment.apiUrl + '/api/journeys';
  journeycountURL = environment.apiUrl + '/api/journeycount';
  stationsURL = environment.apiUrl + '/api/stations';
  stationcountURL = environment.apiUrl + '/api/stationcount';
  searchURL = environment.apiUrl + '/api/search/';
  detailsURL = environment.apiUrl + '/api/details/';

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
      this.searchURL + searchQuery + '?page=' + page
    );
  }

  getDetails(detailsId: number): Observable<Details> {
    return this.http.get<Details>(this.detailsURL + detailsId);
  }
}
