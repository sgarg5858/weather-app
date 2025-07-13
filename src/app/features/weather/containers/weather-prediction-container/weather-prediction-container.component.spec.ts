import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPredictionContainerComponent } from './weather-prediction-container.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherState } from '../../state/reducers/weather.reducers';
import { selectCities, selectError, selectSelectedCity, selectWeatherData } from '../../state/selectors/weather.selectors';
import { WeatherActions } from '../../state/actions';

const initializeSelectors = (store: MockStore<WeatherState>): void => {
  store.overrideSelector(selectCities,['London','Cardiff','Birmingham']);
  store.overrideSelector(selectError,null);
  store.overrideSelector(selectSelectedCity,null);
  store.overrideSelector(selectWeatherData,null);
}

describe('WeatherPredictionContainerComponent', () => {
  let component: WeatherPredictionContainerComponent;
  let fixture: ComponentFixture<WeatherPredictionContainerComponent>;
  let store: MockStore<WeatherState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherPredictionContainerComponent],
      providers: [provideMockStore()],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    initializeSelectors(store);

    fixture = TestBed.createComponent(WeatherPredictionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  afterEach(()=>{
    store?.resetSelectors();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load weather data when loadWeatherData is called ', () => {
    const spyOnDispatch = spyOn(store,'dispatch');
    const city = 'London';
    component.loadWeatherData(city);
    expect(spyOnDispatch).toHaveBeenCalledWith(WeatherActions.loadWeatherData({city}));
  });
});
