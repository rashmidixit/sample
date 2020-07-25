export interface WeatherForecast {
    date: string;
    sunrise: string;
    sunset: string;
    minTemperature: string;
    maxTemperature: string;
    feelsLikeTemperature: string;
    humidity: string;
    windSpeed: string;
    description: string;
}

export interface WeatherInterface {
    getWeather(lat: string, long: string): Promise<WeatherForecast[]>;
}
