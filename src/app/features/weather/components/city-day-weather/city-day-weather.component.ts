import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather';
import { DatePipe } from '@angular/common';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-city-day-weather',
  imports: [DatePipe,WeatherComponent],
  templateUrl: './city-day-weather.component.html',
  styleUrl: './city-day-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDayWeatherComponent {
  @Input() weather!: Weather[];

  get currentWeather(): Weather | undefined {
    return this.weather[0];
  }
}
