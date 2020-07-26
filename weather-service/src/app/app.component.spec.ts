import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherServiceStub } from './services/weather-service.stub';
import { By } from '@angular/platform-browser';
import { WeatherService } from './services/weather.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule],
      providers: [{ provide: WeatherService, useClass: WeatherServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-weather-service'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app-weather-service');
  });

it('should call getFiveDayForecast() of WeatherService on component Init', () => {
    spyOn(component.weatherService, 'getFiveDayForecast').and.callThrough();
    component.ngOnInit();
    expect(component.weatherService.getFiveDayForecast).toHaveBeenCalled();
  });
});
