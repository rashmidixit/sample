import { Injectable } from '@angular/core';
import { WeatherInterface, WeatherForecast } from './weather-interface';
import { OpenWeatherService } from './openweather/open-weather.service';
import { CityCoordinatesService } from './city-coordinates/city-coordinates.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private cityCords: CityCoordinatesService,
              private openWeatherSvc: OpenWeatherService) {
  }

  getFiveDayForecast(city: string): Promise<WeatherForecast[]> {
    const coords = this.cityCords.getLatLongForCityName(city);
    return this.openWeatherSvc.getWeather(coords.lat, coords.long);
  }
}
