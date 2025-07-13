import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data-response';
import { CityDayWeatherComponent } from '../city-day-weather/city-day-weather.component';

@Component({
  selector: 'app-city-weather',
  imports: [CityDayWeatherComponent],
  templateUrl: './city-weather.component.html',
  styleUrl: './city-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherComponent {
  @Input() cityWeather!: WeatherData;
}
