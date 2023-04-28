import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  journeysURL = 'http://localhost:3000/api/journeys';

  getJourneys() {
    return this.http.get(this.journeysURL);
  }
}
