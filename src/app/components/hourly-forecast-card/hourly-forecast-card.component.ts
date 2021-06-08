/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast-card',
  templateUrl: './hourly-forecast-card.component.html',
  styleUrls: ['./hourly-forecast-card.component.scss'],
})
export class HourlyForecastCardComponent implements OnInit {

  @Input() hourly: Hourly = {};

  constructor() {}

  ngOnInit(): void {
  }
}

interface Hourly {
  time?: string;
  temperature?: number;
  weatherIconId?: string;
}
