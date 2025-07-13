import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WEATHER_FEATURE_KEY,
  WeatherState,
} from '../reducers/weather.reducers';

export const selectWeatherState =
  createFeatureSelector<WeatherState>(WEATHER_FEATURE_KEY);

export const selectCities = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.cities
);
export const selectSelectedCity = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.selectedCity
);
export const selectWeatherData = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.weatherData
);