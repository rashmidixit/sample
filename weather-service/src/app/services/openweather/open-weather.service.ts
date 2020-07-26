import { Injectable } from '@angular/core';
import { WeatherInterface, WeatherForecast } from '../weather-interface';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService implements WeatherInterface {

  private apiURL = 'https://api.openweathermap.org/data/2.5/onecall';

  private weatherForecast: WeatherForecast[];

  constructor(private http: HttpClient) {

   }

  async getWeather(latitude: string, longitude: string): Promise<WeatherForecast[]> {
    const params = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('appid', 'c5354245c6e7d39e2f7805527389e761')
      .set('exclude', 'current,minutely,hourly')
      .set('units', 'metric');

    const response = await this.http.get(this.apiURL,
            { params})
            .toPromise();
    return this.mapResponse(response);
  }


  private mapResponse(response: any): WeatherForecast[] {
    const forecast: WeatherForecast[] = [];

    response.daily.forEach(element => {
      const weatherItem: WeatherForecast = {
        date: moment.unix(element.dt).format('ll'),
        sunrise: moment.unix(element.sunrise).format('HH:mm'),
        sunset: moment.unix(element.sunset).format('HH:mm'),
        minTemperature: element.temp.min,
        maxTemperature: element.temp.max,
        feelsLikeTemperature: element.feels_like.day,
        humidity: element.humidity,
        windSpeed: element.wind_speed,
        description: this.getDescriptionForDayWeather(element)
      };
      forecast.push(weatherItem);
    });
    console.log(forecast);
    return forecast;

}

private getDescriptionForDayWeather(weatherItem: any): string {
  let description = '';

  weatherItem.weather.forEach(element => {
    description +=  element.main + ': ' + element.description + '\n';
  });

  return description;
}

}
