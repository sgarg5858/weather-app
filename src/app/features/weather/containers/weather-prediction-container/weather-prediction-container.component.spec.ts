import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPredictionContainerComponent } from './weather-prediction-container.component';

describe('WeatherPredictionContainerComponent', () => {
  let component: WeatherPredictionContainerComponent;
  let fixture: ComponentFixture<WeatherPredictionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherPredictionContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPredictionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
