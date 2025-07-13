import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather';
import { DatePipe, DatePipeConfig } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [DatePipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input({ required: true }) weather!: Weather;
  @Input({ required: true }) dateType!: DatePipeConfig;
  @Input() currentWeather?: boolean;
}
