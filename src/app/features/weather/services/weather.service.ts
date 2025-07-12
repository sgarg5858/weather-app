import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherDataResponse } from '../interfaces/weather-data-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpClient = inject(HttpClient);

  getWeatherData(city: string) {
    return this.httpClient.get<WeatherDataResponse>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fe3695759da76e0c9dcaf566634a08ed`
    );
  }
}
