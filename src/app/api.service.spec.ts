import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Journey } from './journey.model';
import { Station } from './station.model';
import { Details } from './details.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve journeys from the API', () => {
    const mockJourneys: Journey[] = [];
    const page = 1;

    service.getJourneys(page).subscribe((journeys: Journey[]) => {
      expect(journeys).toEqual(mockJourneys);
    });

    const req = httpMock.expectOne(
      `http://localhost:3000/api/journeys?page=${page}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockJourneys);
  });

  it('should retrieve the number of journey pages from the API', () => {
    const mockPageCount = 5;

    service.getJourneyPages().subscribe((pageCount: number) => {
      expect(pageCount).toEqual(mockPageCount);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/journeycount');
    expect(req.request.method).toBe('GET');
    req.flush(mockPageCount);
  });

  it('should retrieve stations from the API', () => {
    const mockStations: Station[] = [];
    const page = 1;

    service.getStations(page).subscribe((stations: Station[]) => {
      expect(stations).toEqual(mockStations);
    });

    const req = httpMock.expectOne(
      `http://localhost:3000/api/stations?page=${page}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockStations);
  });

  it('should retrieve the number of station pages from the API', () => {
    const mockPageCount = 3;

    service.getStationPages().subscribe((pageCount: number) => {
      expect(pageCount).toEqual(mockPageCount);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/stationcount');
    expect(req.request.method).toBe('GET');
    req.flush(mockPageCount);
  });

  it('should retrieve search results from the API', () => {
    const mockSearchQuery = 'example';
    const mockSearchResults: Station[] = [];
    const page = 1;

    service
      .getSearchResult(mockSearchQuery, page)
      .subscribe((results: Station[]) => {
        expect(results).toEqual(mockSearchResults);
      });

    const req = httpMock.expectOne(
      `http://localhost:3000/api/search/${mockSearchQuery}?page=${page}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockSearchResults);
  });

  it('should retrieve details from the API', () => {
    const mockDetailsId = 1;
    const mockDetails: Details = {
      stations: [],
      departurecount: 10,
      returncount: 5,
    };

    service.getDetails(mockDetailsId).subscribe((details: Details) => {
      expect(details).toEqual(mockDetails);
    });

    const req = httpMock.expectOne(
      `http://localhost:3000/api/details/${mockDetailsId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockDetails);
  });
});
