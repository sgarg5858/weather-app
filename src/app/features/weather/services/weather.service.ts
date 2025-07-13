import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherDataResponse } from '../interfaces/weather-data-response';
import { API_KEY } from '../../../infrastructure/tokens/appId.token';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiKey = inject(API_KEY);

  getWeatherData(city: string) {
    return this.httpClient.get<WeatherDataResponse>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`
    );
  }
}
