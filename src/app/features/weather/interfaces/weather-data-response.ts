import { City } from "./city";
import { Weather, WeatherResponse } from "./weather";

export interface WeatherDataResponse {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherResponse[];
    city: City;
}
export interface WeatherData {
    city: string;
    weatherData: Weather[][];
}