import { City } from "./city";
import { WeatherResponse } from "./weather";

export interface WeatherDataResponse {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherResponse[];
    city: City;
}
export interface WeatherData {
    city: string;
}