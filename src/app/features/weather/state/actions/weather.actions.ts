import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../../interfaces/weather-data-response';

export const loadWeatherData = createAction(
  '[Weather] Load Weather Data',
  props<{ city: string }>()
);

export const loadWeatherDataSuccess = createAction(
  '[Weather API] Load Weather SUCCESS',
  props<{ data: WeatherData }>()
);

export const loadWeatherDataFailed = createAction(
  '[Weather API] Load Weather FAILED',
  props<{ error: string }>()
);
