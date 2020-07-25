import { TestBed } from '@angular/core/testing';

import { CityCoordinatesService } from './city-coordinates.service';

describe('CityCoordinatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityCoordinatesService = TestBed.get(CityCoordinatesService);
    expect(service).toBeTruthy();
  });
});
