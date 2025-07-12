import { Weather, WeatherResponse } from '../interfaces/weather';
import { WeatherDataResponse } from '../interfaces/weather-data-response';

export class WeatherHelpers {

  static transformWeatherDataList(weatherList: WeatherResponse[]):Weather[] {
    return weatherList.map((weather) => ({
      temperature: weather.main.temp,
      windspeed: weather.wind.speed,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
      date: weather.dt_txt,
    }));
  }

  static groupWeatherByDate(list: Weather[]) {
    return list.reduce((acc, item) => {
      const date = item.date.split(' ')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {} as Record<string, Weather[]>);
  }

  static formatWeatherData(data: WeatherDataResponse): any {
    const transformedWeatherDataList = WeatherHelpers.transformWeatherDataList(data.list);
    const weatherListGroupedByDate = WeatherHelpers.groupWeatherByDate(
      transformedWeatherDataList
    );
    const transformedWeatherData =  {
        city: data.city.name,
        weatherData: weatherListGroupedByDate,
    };
    console.log('Transformed Weather Data:', transformedWeatherData);
    return transformedWeatherData;
  }
}

// Example usage:

const weatherData: WeatherDataResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1752321600,
      main: {
        temp: 301.21,
        feels_like: 301.16,
        temp_min: 301.05,
        temp_max: 301.21,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1011,
        humidity: 44,
        temp_kf: 0.16,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 3.05,
        deg: 46,
        gust: 4.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-12 12:00:00',
    },
    {
      dt: 1752332400,
      main: {
        temp: 301.79,
        feels_like: 301.4,
        temp_min: 301.79,
        temp_max: 302.96,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 40,
        temp_kf: -1.17,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 4.63,
        deg: 89,
        gust: 5.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-12 15:00:00',
    },
    {
      dt: 1752343200,
      main: {
        temp: 300.02,
        feels_like: 299.87,
        temp_min: 299.43,
        temp_max: 300.02,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 39,
        temp_kf: 0.59,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.33,
        deg: 95,
        gust: 5.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-12 18:00:00',
    },
    {
      dt: 1752354000,
      main: {
        temp: 294.41,
        feels_like: 293.82,
        temp_min: 294.41,
        temp_max: 294.41,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.86,
        deg: 91,
        gust: 6.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-12 21:00:00',
    },
    {
      dt: 1752364800,
      main: {
        temp: 290.65,
        feels_like: 290.02,
        temp_min: 290.65,
        temp_max: 290.65,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2,
        deg: 49,
        gust: 4.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-13 00:00:00',
    },
    {
      dt: 1752375600,
      main: {
        temp: 290.61,
        feels_like: 290.08,
        temp_min: 290.61,
        temp_max: 290.61,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 2.33,
        deg: 32,
        gust: 5.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-13 03:00:00',
    },
    {
      dt: 1752386400,
      main: {
        temp: 291.29,
        feels_like: 290.7,
        temp_min: 291.29,
        temp_max: 291.29,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 2.42,
        deg: 31,
        gust: 4.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-13 06:00:00',
    },
    {
      dt: 1752397200,
      main: {
        temp: 296.08,
        feels_like: 295.66,
        temp_min: 296.08,
        temp_max: 296.08,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.15,
        deg: 56,
        gust: 2.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-13 09:00:00',
    },
    {
      dt: 1752408000,
      main: {
        temp: 300.76,
        feels_like: 300.37,
        temp_min: 300.76,
        temp_max: 300.76,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.41,
        deg: 87,
        gust: 2.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-13 12:00:00',
    },
    {
      dt: 1752418800,
      main: {
        temp: 301.09,
        feels_like: 300.57,
        temp_min: 301.09,
        temp_max: 301.09,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.85,
        deg: 74,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-13 15:00:00',
    },
    {
      dt: 1752429600,
      main: {
        temp: 300.15,
        feels_like: 299.92,
        temp_min: 300.15,
        temp_max: 300.15,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 2.27,
        deg: 116,
        gust: 2.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-13 18:00:00',
    },
    {
      dt: 1752440400,
      main: {
        temp: 296.06,
        feels_like: 295.84,
        temp_min: 296.06,
        temp_max: 296.06,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.54,
        deg: 136,
        gust: 5.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-13 21:00:00',
    },
    {
      dt: 1752451200,
      main: {
        temp: 294.43,
        feels_like: 294.15,
        temp_min: 294.43,
        temp_max: 294.43,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.5,
        deg: 153,
        gust: 5.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-14 00:00:00',
    },
    {
      dt: 1752462000,
      main: {
        temp: 292.32,
        feels_like: 292.04,
        temp_min: 292.32,
        temp_max: 292.32,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 1.58,
        deg: 171,
        gust: 4.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-14 03:00:00',
    },
    {
      dt: 1752472800,
      main: {
        temp: 292.99,
        feels_like: 292.65,
        temp_min: 292.99,
        temp_max: 292.99,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 3.94,
        deg: 230,
        gust: 7.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-14 06:00:00',
    },
    {
      dt: 1752483600,
      main: {
        temp: 296.81,
        feels_like: 296.51,
        temp_min: 296.81,
        temp_max: 296.81,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 5.1,
        deg: 245,
        gust: 7.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-14 09:00:00',
    },
    {
      dt: 1752494400,
      main: {
        temp: 299.22,
        feels_like: 299.22,
        temp_min: 299.22,
        temp_max: 299.22,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 6.93,
        deg: 231,
        gust: 10.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-14 12:00:00',
    },
    {
      dt: 1752505200,
      main: {
        temp: 298,
        feels_like: 297.32,
        temp_min: 298,
        temp_max: 298,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 7.94,
        deg: 218,
        gust: 12.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-14 15:00:00',
    },
    {
      dt: 1752516000,
      main: {
        temp: 295.71,
        feels_like: 294.88,
        temp_min: 295.71,
        temp_max: 295.71,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 6.95,
        deg: 219,
        gust: 9.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-14 18:00:00',
    },
    {
      dt: 1752526800,
      main: {
        temp: 292.36,
        feels_like: 291.51,
        temp_min: 292.36,
        temp_max: 292.36,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 5.28,
        deg: 245,
        gust: 9.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-14 21:00:00',
    },
    {
      dt: 1752537600,
      main: {
        temp: 289.35,
        feels_like: 288.54,
        temp_min: 289.35,
        temp_max: 289.35,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 4.17,
        deg: 244,
        gust: 9.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-15 00:00:00',
    },
    {
      dt: 1752548400,
      main: {
        temp: 287.45,
        feels_like: 286.74,
        temp_min: 287.45,
        temp_max: 287.45,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 4.2,
        deg: 233,
        gust: 10.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-15 03:00:00',
    },
    {
      dt: 1752559200,
      main: {
        temp: 288.1,
        feels_like: 287.43,
        temp_min: 288.1,
        temp_max: 288.1,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 4.92,
        deg: 232,
        gust: 10.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-15 06:00:00',
    },
    {
      dt: 1752570000,
      main: {
        temp: 292.05,
        feels_like: 291.25,
        temp_min: 292.05,
        temp_max: 292.05,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 5.87,
        deg: 245,
        gust: 10.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-15 09:00:00',
    },
    {
      dt: 1752580800,
      main: {
        temp: 293.8,
        feels_like: 293.04,
        temp_min: 293.8,
        temp_max: 293.8,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 5.56,
        deg: 256,
        gust: 10.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-15 12:00:00',
    },
    {
      dt: 1752591600,
      main: {
        temp: 295.13,
        feels_like: 294.48,
        temp_min: 295.13,
        temp_max: 295.13,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.81,
        deg: 243,
        gust: 11.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-15 15:00:00',
    },
    {
      dt: 1752602400,
      main: {
        temp: 294.95,
        feels_like: 294.2,
        temp_min: 294.95,
        temp_max: 294.95,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.15,
        deg: 271,
        gust: 12.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-15 18:00:00',
    },
    {
      dt: 1752613200,
      main: {
        temp: 291.2,
        feels_like: 290.55,
        temp_min: 291.2,
        temp_max: 291.2,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1011,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.82,
        deg: 263,
        gust: 10.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-15 21:00:00',
    },
    {
      dt: 1752624000,
      main: {
        temp: 289.16,
        feels_like: 288.72,
        temp_min: 289.16,
        temp_max: 289.16,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 5.5,
        deg: 255,
        gust: 12.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-16 00:00:00',
    },
    {
      dt: 1752634800,
      main: {
        temp: 289.04,
        feels_like: 288.62,
        temp_min: 289.04,
        temp_max: 289.04,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.44,
        deg: 263,
        gust: 11.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-16 03:00:00',
    },
    {
      dt: 1752645600,
      main: {
        temp: 289.68,
        feels_like: 289.27,
        temp_min: 289.68,
        temp_max: 289.68,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.01,
        deg: 273,
        gust: 8.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-16 06:00:00',
    },
    {
      dt: 1752656400,
      main: {
        temp: 294.42,
        feels_like: 293.93,
        temp_min: 294.42,
        temp_max: 294.42,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.74,
        deg: 290,
        gust: 6.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-16 09:00:00',
    },
    {
      dt: 1752667200,
      main: {
        temp: 298.97,
        feels_like: 298.5,
        temp_min: 298.97,
        temp_max: 298.97,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 3.17,
        deg: 304,
        gust: 6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-16 12:00:00',
    },
    {
      dt: 1752678000,
      main: {
        temp: 301.38,
        feels_like: 300.28,
        temp_min: 301.38,
        temp_max: 301.38,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 3.69,
        deg: 342,
        gust: 6.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-16 15:00:00',
    },
    {
      dt: 1752688800,
      main: {
        temp: 300.63,
        feels_like: 299.88,
        temp_min: 300.63,
        temp_max: 300.63,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 3.23,
        deg: 20,
        gust: 4.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-16 18:00:00',
    },
    {
      dt: 1752699600,
      main: {
        temp: 296.81,
        feels_like: 296.33,
        temp_min: 296.81,
        temp_max: 296.81,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 1.68,
        deg: 51,
        gust: 3.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-16 21:00:00',
    },
    {
      dt: 1752710400,
      main: {
        temp: 293.61,
        feels_like: 293.23,
        temp_min: 293.61,
        temp_max: 293.61,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.37,
        deg: 43,
        gust: 2.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-17 00:00:00',
    },
    {
      dt: 1752721200,
      main: {
        temp: 292.31,
        feels_like: 291.87,
        temp_min: 292.31,
        temp_max: 292.31,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1012,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 1.46,
        deg: 5,
        gust: 3.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2025-07-17 03:00:00',
    },
    {
      dt: 1752732000,
      main: {
        temp: 292.71,
        feels_like: 292.18,
        temp_min: 292.71,
        temp_max: 292.71,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.89,
        deg: 27,
        gust: 2.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-17 06:00:00',
    },
    {
      dt: 1752742800,
      main: {
        temp: 297.55,
        feels_like: 297.14,
        temp_min: 297.55,
        temp_max: 297.55,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 1.77,
        deg: 46,
        gust: 1.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2025-07-17 09:00:00',
    },
  ],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5085,
      lon: -0.1257,
    },
    country: 'GB',
    population: 1000000,
    timezone: 3600,
    sunrise: 1752292646,
    sunset: 1752351265,
  },
};
