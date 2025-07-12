export interface City {
    id: number;
    name: string;
    country: string;
    coord: {
        lat: number;
        lon: number;
    };
    population?: number;
    timezone?: number;
    sunrise?: number;
    sunset?: number;
}