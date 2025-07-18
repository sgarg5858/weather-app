import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherActions } from '../../state/actions';
import { Observable } from 'rxjs';
import {
  selectCities,
  selectError,
  selectSelectedCity,
  selectWeatherData,
} from '../../state/selectors/weather.selectors';
import { AsyncPipe } from '@angular/common';
import { WeatherData } from '../../interfaces/weather-data-response';
import { CityWeatherComponent } from '../../components/city-weather/city-weather.component';

@Component({
  selector: 'app-weather-prediction-container',
  imports: [AsyncPipe, CityWeatherComponent],
  templateUrl: './weather-prediction-container.component.html',
  styleUrl: './weather-prediction-container.component.scss',
})
export class WeatherPredictionContainerComponent implements OnInit {
  cities$!: Observable<string[]>;
  weatherData$: Observable<WeatherData | null> | undefined;
  selectedCity$: Observable<string | null> | undefined;
  error$: Observable<string | null> | undefined;

  public readonly store = inject(Store);

  ngOnInit(): void {
    this.observeOnData();
  }

  observeOnData() {
    this.cities$ = this.store.select(selectCities);
    this.weatherData$ = this.store.select(selectWeatherData);
    this.selectedCity$ = this.store.select(selectSelectedCity);
    this.error$ = this.store.select(selectError);
  }

  loadWeatherData(city: string) {
    this.store.dispatch(WeatherActions.loadWeatherData({ city }));
  }
}
