import { createReducer, on } from '@ngrx/store';
import { WeatherActions } from '../actions';

export const WEATHER_FEATURE_KEY = 'weather';

export interface WeatherState {
  cities: string[];
  selectedCity: string | null;
  weatherData: any;
  error: any;
}

export const initialWeatherState: WeatherState = {
  cities: ['London', 'Cardiff', 'Birmingham'],
  selectedCity: null,
  weatherData: null,
  error: null,
};

export const weatherReducer = createReducer(
  initialWeatherState,
  on(WeatherActions.loadWeatherData, (state, action) => {
    return {
      ...state,
      selectedCity: action.city,
      error: null,
    };
  }),
  on(WeatherActions.loadWeatherDataSuccess, (state, { data }) => {
    return {
      ...state,
      weatherData: data,
    };
  }),
  on(WeatherActions.loadWeatherDataFailed, (state, { error }) => {
    return {
      ...state,
      error,
    };
  })
);
