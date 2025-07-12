export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WindCondition {
  speed: number;
  deg: number;
  gust?: number;
}
export interface MainCondition {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface CloudsCondition {
  all: number;
}