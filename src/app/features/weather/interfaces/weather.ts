import { CloudsCondition, MainCondition, WeatherCondition, WindCondition } from "./weather-condition";

export interface WeatherResponse {
    dt: number;
    main: MainCondition;
    weather: WeatherCondition[];
    wind: WindCondition;
    clouds: CloudsCondition
    visibility: number;
    dt_txt: string; // Date and time of the forecast
    pop?: number;
    sys?: any; // Additional system data if needed
}

export interface Weather {
    temperature: number;
    windspeed: number;
    description: string;
    icon: string;
    date: string;
}