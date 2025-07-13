import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { API_KEY } from '../../../infrastructure/tokens/appId.token';
import { mockWeatherDataResponse } from '../mocks/mock-weather-data-response';

fdescribe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiKey = 'apiKey';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: API_KEY,
          useValue: apiKey,
        },
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an api call to load weather data', () => {
    const city = 'London';
    service.getWeatherData(city).subscribe((data) => {
      expect(data).toEqual(mockWeatherDataResponse);
    });
    const req = httpTestingController.expectOne(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockWeatherDataResponse);

    httpTestingController.verify();
  });
});
