import { Weather, WeatherResponse } from '../interfaces/weather';
import {
  WeatherData,
  WeatherDataResponse,
} from '../interfaces/weather-data-response';

function groupWeatherByDate(list: Weather[]): Record<string, Weather[]> {
  return list.reduce((acc, item) => {
    const [date] = item.date.split(' ');
    (acc[date] ??= []).push(item);
    return acc;
  }, {} as Record<string, Weather[]>);
}

function convertKelvinToCelsius(temp: number): number {
  return +(temp - 273.15).toFixed(1);
}

function transformWeatherDataList(weatherList: WeatherResponse[]): Weather[] {
  return weatherList.map(({ main, wind, weather, dt_txt }) => {
    const [{ description, icon }] = weather;
    return {
      temperature: convertKelvinToCelsius(main.temp),
      windspeed: wind.speed,
      description,
      icon,
      date: dt_txt,
    };
  });
}

function limitWeatherDataByDays(
  weatherRecord: Record<string, Weather[]>,
  days: number
): Record<string, Weather[]> {
  return Object.fromEntries(Object.entries(weatherRecord).slice(0, days));
}

export class WeatherHelpers {
  static formatWeatherData({ list, city }: WeatherDataResponse): WeatherData {
    const weatherData = transformWeatherDataList(list);
    const groupedByDate = groupWeatherByDate(weatherData);
    const limitedData = limitWeatherDataByDays(groupedByDate, 5);

    return {
      city: city.name,
      weather: limitedData,
    };
  }
}
