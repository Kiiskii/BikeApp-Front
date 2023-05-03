import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journey } from './journey.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  journeysURL = 'http://localhost:3000/api/journeys';
  journeycountURL = 'http://localhost:3000/api/journeycount';
  stationsURL = 'http://localhost:3000/api/stations';

  getJourneys(page: number): Observable<Journey[]> {
    return this.http.get<Journey[]>(this.journeysURL + '?page=' + page);
  }

  getJourneyPages(): Observable<number> {
    return this.http.get<number>(this.journeycountURL);
  }

  getStations() {
    return this.http.get(this.stationsURL);
  }
}
