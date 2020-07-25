import { Injectable } from '@angular/core';
import { LatLong } from '../lat-long';

@Injectable({
  providedIn: 'root'
})
export class CityCoordinatesService {

  constructor() { }

  getLatLongForCityName(cityName: string): LatLong {
    if (cityName === 'Pune') {
      return {lat: '18.5204', long: '73.8567'};
    }
  }
}
