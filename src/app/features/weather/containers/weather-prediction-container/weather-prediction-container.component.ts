import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Store } from '@ngrx/store';
import { WeatherActions } from '../../state/actions';
import { Observable } from 'rxjs';
import { selectCities } from '../../state/selectors/weather.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-weather-prediction-container',
  imports: [AsyncPipe],
  templateUrl: './weather-prediction-container.component.html',
  styleUrl: './weather-prediction-container.component.scss'
})
export class WeatherPredictionContainerComponent implements OnInit {

  cities$! : Observable<string[]>;

  public readonly weatherService = inject(WeatherService);
  public readonly store = inject(Store);

  ngOnInit(): void {
    this.observeOnData();
  }

  observeOnData() {
    this.cities$ = this.store.select(selectCities);
  }

  loadWeatherData(city: string) {
    this.store.dispatch(WeatherActions.loadWeatherData({ city }));
  }

}
