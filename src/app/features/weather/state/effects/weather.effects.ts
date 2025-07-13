import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../../services/weather.service';
import { WeatherActions } from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { WeatherHelpers } from '../../helpers/weather-helpers';

@Injectable({
  providedIn: 'root',
})
export class WeatherEffects {
  private readonly actions$ = inject(Actions);
  private readonly weatherService = inject(WeatherService);

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeatherData),
      switchMap(({ city }) =>
        this.weatherService.getWeatherData(city).pipe(
          map((weatherData) => {
            return WeatherActions.loadWeatherDataSuccess({
              data: WeatherHelpers.formatWeatherData(weatherData),
            });
          }),
          catchError((error) =>
            of(
              WeatherActions.loadWeatherDataFailed({
                error: `Couldn't load data for ${city} `,
              })
            )
          )
        )
      )
    )
  );
}
