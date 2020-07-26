import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { OpenWeatherService } from './openweather/open-weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OpenWeatherService],
    });
  });

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
