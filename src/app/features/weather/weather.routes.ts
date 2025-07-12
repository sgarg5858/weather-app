import { Routes } from '@angular/router';
import { WeatherPredictionContainerComponent } from './containers/weather-prediction-container/weather-prediction-container.component';
import { provideEffects } from '@ngrx/effects';
import { WeatherEffects } from './state/effects/weather.effects';
import { provideState } from '@ngrx/store';
import { WEATHER_FEATURE_KEY, weatherReducer } from './state/reducers/weather.reducers';

export const WEATHER_ROUTES: Routes = [
  {
    path: '',
    component: WeatherPredictionContainerComponent,
    providers: [
      provideState(WEATHER_FEATURE_KEY, weatherReducer),
      provideEffects([WeatherEffects]),
    ],
  },
];
