import { Observable, of, throwError } from 'rxjs';
import { WeatherEffects } from './weather.effects';
import { WeatherService } from '../../services/weather.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { WeatherActions } from '../actions';
import { mockWeatherDataResponse } from '../../mocks/mock-weather-data-response';
import { mockWeatherData } from '../../mocks/mock-weather-data';

fdescribe('WeatherEffects', () => {
  let actions$!: Observable<any>;
  let effects: WeatherEffects;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(() => {
    weatherService = jasmine.createSpyObj('WeatherService', ['getWeatherData']);

    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        provideMockActions(() => actions$),
        {
          provide: WeatherService,
          useValue: weatherService,
        },
      ],
    });

    effects = TestBed.inject(WeatherEffects);
    weatherService = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
  });

  it('should make an api call to load weather data when loadWeatherData is dispatched', () => {
    actions$ = of(WeatherActions.loadWeatherData({ city: 'London' }));
    const actionsToDispatch = WeatherActions.loadWeatherDataSuccess({
      data: mockWeatherData,
    });

    weatherService.getWeatherData.and.returnValue(
        of(mockWeatherDataResponse)
    )

    effects.loadWeatherData$.subscribe((actions)=>{
        expect(actions).toEqual(actionsToDispatch)
    })
    
  });

  it('should handle error scenario when api fails', () => {
    const city = 'London';

    actions$ = of(WeatherActions.loadWeatherData({ city}));

    const actionsToDispatch = WeatherActions.loadWeatherDataFailed({
      error:  `Couldn't load data for ${city}` ,
    });

    weatherService.getWeatherData.and.returnValue(
        throwError(()=> new Error('API FAILED'))
    );

    effects.loadWeatherData$.subscribe((actions)=>{
        expect(actions).toEqual(actionsToDispatch)
    })
    
  });
});
