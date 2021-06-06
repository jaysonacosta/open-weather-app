/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {

  @Input() forecastData: Forecast = {

  };
  constructor() {}

  ngOnInit(): void {}
}

interface Forecast {
  date?: string;
  sunriseTime?: string;
  sunsetTime?: string;
  dayTemp?: number;
  nightTemp?: number;
  dayFeelsLike?: number;
  nightFeelsLike?: number;
  maxTemp?: number;
  minTemp?: number;
  weatherMain?: string;
  weatherDescription?: string;
  weatherIconId?: string;
}