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
  stationsURL = 'http://localhost:3000/api/stations';

  getJourneys(): Observable<Journey[]> {
    return this.http.get<Journey[]>(this.journeysURL);
  }
  getStations() {
    return this.http.get(this.stationsURL);
  }
}
