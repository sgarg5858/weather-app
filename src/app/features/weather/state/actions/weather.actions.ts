import { createAction, props } from '@ngrx/store';

export const loadWeatherData = createAction(
  '[Weather] Load Weather Data',
  props<{ city: string }>()
);

export const loadWeatherDataSuccess = createAction(
  '[Weather API] Load Weather SUCCESS',
  props<{ data: any }>()
);

export const loadWeatherDataFailed = createAction(
  '[Weather API] Load Weather FAILED',
  props<{ error: any }>()
);