import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherForecast } from './services/weather-interface';

@Component({
  selector: 'app-weather-service',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app-weather-service';
  weather: WeatherForecast[];
  error: string;
  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    // TODO: Get a list of all the cities from a service (GeoDB Cities API)
    // and show them in a drop down. This way we support multiple cities.
    this.updateWeather('Pune');
  }


  async updateWeather(city: string) {
    this.error = undefined;
    try {
      this.weather = await this.weatherService.getFiveDayForecast(city);
    } catch (error) {
      console.log('unable to get weather');
      if (error.error.message) {
        this.error = error.error;
      } else {
        this.error = error;
      }
    }
  }

  onRefresh() {
    this.updateWeather('Pune');
  }


}
