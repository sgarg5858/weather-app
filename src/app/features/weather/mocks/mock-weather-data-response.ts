import { WeatherDataResponse } from "../interfaces/weather-data-response";

export const mockWeatherDataResponse: WeatherDataResponse = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1752440400,
            "main": {
                "temp": 297.16,
                "feels_like": 297.18,
                "temp_min": 295.58,
                "temp_max": 297.16,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 60,
                "temp_kf": 1.58
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.47,
                "deg": 142,
                "gust": 5.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-13 21:00:00"
        },
        {
            "dt": 1752451200,
            "main": {
                "temp": 295.5,
                "feels_like": 295.36,
                "temp_min": 292.18,
                "temp_max": 295.5,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 60,
                "temp_kf": 3.32
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 2.41,
                "deg": 169,
                "gust": 4.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-14 00:00:00"
        },
        {
            "dt": 1752462000,
            "main": {
                "temp": 291.43,
                "feels_like": 291.04,
                "temp_min": 288.56,
                "temp_max": 291.43,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 66,
                "temp_kf": 2.87
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.41,
                "deg": 181,
                "gust": 7.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-14 03:00:00"
        },
        {
            "dt": 1752472800,
            "main": {
                "temp": 290.02,
                "feels_like": 289.72,
                "temp_min": 290.02,
                "temp_max": 290.02,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 4.32,
                "deg": 233,
                "gust": 8.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-14 06:00:00"
        },
        {
            "dt": 1752483600,
            "main": {
                "temp": 294.2,
                "feels_like": 293.77,
                "temp_min": 294.2,
                "temp_max": 294.2,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1008,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.37,
                "deg": 238,
                "gust": 7.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-14 09:00:00"
        },
        {
            "dt": 1752494400,
            "main": {
                "temp": 298.4,
                "feels_like": 297.92,
                "temp_min": 298.4,
                "temp_max": 298.4,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 36,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 6.49,
                "deg": 226,
                "gust": 9.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-14 12:00:00"
        },
        {
            "dt": 1752505200,
            "main": {
                "temp": 297.85,
                "feels_like": 297.47,
                "temp_min": 297.85,
                "temp_max": 297.85,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.95,
                "deg": 227,
                "gust": 11.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-14 15:00:00"
        },
        {
            "dt": 1752516000,
            "main": {
                "temp": 295.85,
                "feels_like": 295.04,
                "temp_min": 295.85,
                "temp_max": 295.85,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.34,
                "deg": 224,
                "gust": 8.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-14 18:00:00"
        },
        {
            "dt": 1752526800,
            "main": {
                "temp": 292.01,
                "feels_like": 291.15,
                "temp_min": 292.01,
                "temp_max": 292.01,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 4.12,
                "deg": 245,
                "gust": 7.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-14 21:00:00"
        },
        {
            "dt": 1752537600,
            "main": {
                "temp": 289.34,
                "feels_like": 288.61,
                "temp_min": 289.34,
                "temp_max": 289.34,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 3.88,
                "deg": 240,
                "gust": 8.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-15 00:00:00"
        },
        {
            "dt": 1752548400,
            "main": {
                "temp": 287.9,
                "feels_like": 287.31,
                "temp_min": 287.9,
                "temp_max": 287.9,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1011,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 3.32,
                "deg": 221,
                "gust": 9.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-15 03:00:00"
        },
        {
            "dt": 1752559200,
            "main": {
                "temp": 289.13,
                "feels_like": 288.56,
                "temp_min": 289.13,
                "temp_max": 289.13,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 4.84,
                "deg": 213,
                "gust": 9.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-15 06:00:00"
        },
        {
            "dt": 1752570000,
            "main": {
                "temp": 292.42,
                "feels_like": 291.84,
                "temp_min": 292.42,
                "temp_max": 292.42,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1009,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 7.03,
                "deg": 215,
                "gust": 11.59
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.16
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-15 09:00:00"
        },
        {
            "dt": 1752580800,
            "main": {
                "temp": 294.58,
                "feels_like": 294.08,
                "temp_min": 294.58,
                "temp_max": 294.58,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1008,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 8.61,
                "deg": 225,
                "gust": 14.46
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-15 12:00:00"
        },
        {
            "dt": 1752591600,
            "main": {
                "temp": 291.49,
                "feels_like": 291.1,
                "temp_min": 291.49,
                "temp_max": 291.49,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1008,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.46,
                "deg": 240,
                "gust": 15.2
            },
            "visibility": 10000,
            "pop": 0.32,
            "rain": {
                "3h": 0.25
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-15 15:00:00"
        },
        {
            "dt": 1752602400,
            "main": {
                "temp": 290.99,
                "feels_like": 290.68,
                "temp_min": 290.99,
                "temp_max": 290.99,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1008,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.08,
                "deg": 250,
                "gust": 14.56
            },
            "visibility": 10000,
            "pop": 0.61,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-15 18:00:00"
        },
        {
            "dt": 1752613200,
            "main": {
                "temp": 289.16,
                "feels_like": 289.01,
                "temp_min": 289.16,
                "temp_max": 289.16,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 6.06,
                "deg": 250,
                "gust": 11.7
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.44
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-15 21:00:00"
        },
        {
            "dt": 1752624000,
            "main": {
                "temp": 288.27,
                "feels_like": 288.06,
                "temp_min": 288.27,
                "temp_max": 288.27,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 5.43,
                "deg": 257,
                "gust": 11.63
            },
            "visibility": 10000,
            "pop": 0.14,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-16 00:00:00"
        },
        {
            "dt": 1752634800,
            "main": {
                "temp": 287.87,
                "feels_like": 287.49,
                "temp_min": 287.87,
                "temp_max": 287.87,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1010,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 5.03,
                "deg": 277,
                "gust": 11.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-16 03:00:00"
        },
        {
            "dt": 1752645600,
            "main": {
                "temp": 288.56,
                "feels_like": 288.01,
                "temp_min": 288.56,
                "temp_max": 288.56,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 4.17,
                "deg": 279,
                "gust": 10.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-16 06:00:00"
        },
        {
            "dt": 1752656400,
            "main": {
                "temp": 293.45,
                "feels_like": 292.74,
                "temp_min": 293.45,
                "temp_max": 293.45,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.18,
                "deg": 294,
                "gust": 6.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-16 09:00:00"
        },
        {
            "dt": 1752667200,
            "main": {
                "temp": 297.72,
                "feels_like": 297.02,
                "temp_min": 297.72,
                "temp_max": 297.72,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.08,
                "deg": 289,
                "gust": 5.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-16 12:00:00"
        },
        {
            "dt": 1752678000,
            "main": {
                "temp": 300.08,
                "feels_like": 299.38,
                "temp_min": 300.08,
                "temp_max": 300.08,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.23,
                "deg": 279,
                "gust": 5.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-16 15:00:00"
        },
        {
            "dt": 1752688800,
            "main": {
                "temp": 293.78,
                "feels_like": 293.52,
                "temp_min": 293.78,
                "temp_max": 293.78,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1012,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.02,
                "deg": 256,
                "gust": 9.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-16 18:00:00"
        },
        {
            "dt": 1752699600,
            "main": {
                "temp": 292.22,
                "feels_like": 292.09,
                "temp_min": 292.22,
                "temp_max": 292.22,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.75,
                "deg": 260,
                "gust": 6.4
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.15
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-16 21:00:00"
        },
        {
            "dt": 1752710400,
            "main": {
                "temp": 291.27,
                "feels_like": 291.38,
                "temp_min": 291.27,
                "temp_max": 291.27,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1013,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.01,
                "deg": 253,
                "gust": 6.06
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.14
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-17 00:00:00"
        },
        {
            "dt": 1752721200,
            "main": {
                "temp": 291.69,
                "feels_like": 291.98,
                "temp_min": 291.69,
                "temp_max": 291.69,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.64,
                "deg": 237,
                "gust": 8.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-17 03:00:00"
        },
        {
            "dt": 1752732000,
            "main": {
                "temp": 292.34,
                "feels_like": 292.59,
                "temp_min": 292.34,
                "temp_max": 292.34,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1012,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.62,
                "deg": 245,
                "gust": 9.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-17 06:00:00"
        },
        {
            "dt": 1752742800,
            "main": {
                "temp": 293.14,
                "feels_like": 293.23,
                "temp_min": 293.14,
                "temp_max": 293.14,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1012,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.33,
                "deg": 253,
                "gust": 7.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-17 09:00:00"
        },
        {
            "dt": 1752753600,
            "main": {
                "temp": 298.91,
                "feels_like": 298.9,
                "temp_min": 298.91,
                "temp_max": 298.91,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.91,
                "deg": 260,
                "gust": 6.25
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-17 12:00:00"
        },
        {
            "dt": 1752764400,
            "main": {
                "temp": 300.63,
                "feels_like": 300.5,
                "temp_min": 300.63,
                "temp_max": 300.63,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.57,
                "deg": 253,
                "gust": 6.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-17 15:00:00"
        },
        {
            "dt": 1752775200,
            "main": {
                "temp": 297,
                "feels_like": 297.16,
                "temp_min": 297,
                "temp_max": 297,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1010,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.73,
                "deg": 273,
                "gust": 6.13
            },
            "visibility": 10000,
            "pop": 0.7,
            "rain": {
                "3h": 0.71
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-17 18:00:00"
        },
        {
            "dt": 1752786000,
            "main": {
                "temp": 294.17,
                "feels_like": 294.44,
                "temp_min": 294.17,
                "temp_max": 294.17,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.16,
                "deg": 261,
                "gust": 6.37
            },
            "visibility": 10000,
            "pop": 0.76,
            "rain": {
                "3h": 0.48
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-17 21:00:00"
        },
        {
            "dt": 1752796800,
            "main": {
                "temp": 292.6,
                "feels_like": 292.95,
                "temp_min": 292.6,
                "temp_max": 292.6,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1011,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.66,
                "deg": 244,
                "gust": 4.69
            },
            "visibility": 10000,
            "pop": 0.53,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-18 00:00:00"
        },
        {
            "dt": 1752807600,
            "main": {
                "temp": 291.6,
                "feels_like": 291.93,
                "temp_min": 291.6,
                "temp_max": 291.6,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 1.22,
                "deg": 236,
                "gust": 3.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-07-18 03:00:00"
        },
        {
            "dt": 1752818400,
            "main": {
                "temp": 292.51,
                "feels_like": 292.72,
                "temp_min": 292.51,
                "temp_max": 292.51,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1010,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 77
            },
            "wind": {
                "speed": 1.43,
                "deg": 207,
                "gust": 2.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-18 06:00:00"
        },
        {
            "dt": 1752829200,
            "main": {
                "temp": 296.75,
                "feels_like": 296.78,
                "temp_min": 296.75,
                "temp_max": 296.75,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1010,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 1.68,
                "deg": 242,
                "gust": 2.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-18 09:00:00"
        },
        {
            "dt": 1752840000,
            "main": {
                "temp": 300.58,
                "feels_like": 300.65,
                "temp_min": 300.58,
                "temp_max": 300.58,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1009,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 2.11,
                "deg": 278,
                "gust": 4.18
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-18 12:00:00"
        },
        {
            "dt": 1752850800,
            "main": {
                "temp": 304.25,
                "feels_like": 302.9,
                "temp_min": 304.25,
                "temp_max": 304.25,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.34,
                "deg": 235,
                "gust": 4.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-18 15:00:00"
        },
        {
            "dt": 1752861600,
            "main": {
                "temp": 301.09,
                "feels_like": 300.83,
                "temp_min": 301.09,
                "temp_max": 301.09,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1007,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 1.11,
                "deg": 352,
                "gust": 1.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-18 18:00:00"
        }
    ],
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lat": 51.5085,
            "lon": -0.1257
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 3600,
        "sunrise": 1752379112,
        "sunset": 1752437613
    }
}