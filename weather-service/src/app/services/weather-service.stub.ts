import { of } from 'rxjs';

export class WeatherServiceStub {
  getFiveDayForecast(city: string) {
    return of([{
        date: "Jul 26, 2020",
        description: "Rain: moderate rain↵",
        feelsLikeTemperature: "27.35",
        humidity: "71",
        maxTemperature: "27.24",
        minTemperature: "24.72",
        sunrise: "06:10",
        sunset: "19:11",
        windSpeed: "6.2"
    }]
    );
  }
}