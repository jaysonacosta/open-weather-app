import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastCardComponent } from './hourly-forecast-card.component';

describe('HourlyForecastCardComponent', () => {
  let component: HourlyForecastCardComponent;
  let fixture: ComponentFixture<HourlyForecastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyForecastCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
