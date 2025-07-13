import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDayWeatherComponent } from './city-day-weather.component';

describe('CityDayWeatherComponent', () => {
  let component: CityDayWeatherComponent;
  let fixture: ComponentFixture<CityDayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDayWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
