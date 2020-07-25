import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { OpenWeatherService } from './services/openweather/open-weather.service';
import { CityCoordinatesService } from './services/city-coordinates.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    OpenWeatherService,
    CityCoordinatesService
],

  bootstrap: [AppComponent]
})
export class AppModule { }
