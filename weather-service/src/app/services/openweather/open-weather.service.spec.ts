import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OpenWeatherService } from './open-weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecast } from 'src/app/services/weather-interface';

const dummyWeatherAPIResponse = {
  response: {
    "daily": [
        {
            "dt": 1595745000,
            "sunrise": 1595724008,
            "sunset": 1595770905,
            "temp": {
                "day": 300.39,
                "min": 297.87,
                "max": 300.39,
                "night": 297.87,
                "eve": 300.39,
                "morn": 300.39
            },
            "feels_like": {
                "day": 300.5,
                "night": 300.36,
                "eve": 300.5,
                "morn": 300.5
            },
            "pressure": 1006,
            "humidity": 71,
            "dew_point": 294.67,
            "wind_speed": 6.2,
            "wind_deg": 242,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 39,
            "pop": 0.98,
            "rain": 3.02,
            "uvi": 14.14
        }
    ]
}};

const dummyWeatherTransformedResponse: WeatherForecast[] = [{
  date: "Jul 26, 2020",
  description: "Rain: moderate rain↵",
  feelsLikeTemperature: "27.35",
  humidity: "71",
  maxTemperature: "27.24",
  minTemperature: "24.72",
  sunrise: "06:10",
  sunset: "19:11",
  windSpeed: "6.2"
}];

describe('OpenWeatherService', () => {
  let injector: TestBed;
  let service: OpenWeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [OpenWeatherService],
    });

    injector = getTestBed();
    service = injector.get(OpenWeatherService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getWeather() should return transformed weather data', () => {
    service.getWeather('18.5204', '73.8567').then((res) => {
      expect(res).toEqual(dummyWeatherTransformedResponse);
    });

    const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=18.5204&lon=73.8567&appid=c5354245c6e7d39e2f7805527389e761&exclude=current,minutely,hourly&units=metric');
    expect(req.request.method).toBe('GET');
    req.flush(dummyWeatherAPIResponse);
  });
});
