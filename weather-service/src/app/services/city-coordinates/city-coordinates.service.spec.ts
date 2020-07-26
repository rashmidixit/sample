import { TestBed } from '@angular/core/testing';

import { CityCoordinatesService } from './city-coordinates.service';
import { LatLong } from '../../lat-long';

const dummyLatLong: LatLong = {lat: '18.5204', long: '73.8567'};


describe('CityCoordinatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityCoordinatesService = TestBed.get(CityCoordinatesService);
    expect(service).toBeTruthy();
  });

  it('should return correct longitude/latitude for Pune', () => {
    const service: CityCoordinatesService = TestBed.get(CityCoordinatesService);
    expect(service.getLatLongForCityName("Pune")).toEqual(dummyLatLong);
  });

});
