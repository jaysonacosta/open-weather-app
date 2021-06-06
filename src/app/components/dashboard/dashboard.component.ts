/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  weatherData: WeatherData = {
    name: '',
    country: '',
    temperature: 0,
    feelsLike: 0,
    descriptionMain: '',
    description: '',
    weatherIconId: '',
  };

  weekdays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  weekday = '';

  sevenDayForecast: SevenDayForecast = {
    forecast: [],
  };

  fahrenheit = true;

  authenticated = false;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  async ngOnInit(): Promise<void> {
    const coordinates = await this.getLocation();
    await this.getWeather(coordinates);
    await this.getSevenDayForecast(coordinates);
    this.getDate();
    console.log('test');
    console.log(this.weatherData);
    console.log(this.sevenDayForecast);
  }

  async getLocation() {
    const data: any = await this.locationService.getLocation();
    return this.setCoordinates(data);
  }

  setCoordinates(data: any): Coordinates {
    const coordinates: Coordinates = {
      longitude: data.coords.longitude,
      latitude: data.coords.latitude,
    };
    return coordinates;
  }

  async getWeather(coordinates: Coordinates): Promise<void> {
    const data: any = await this.weatherService.apiCall(coordinates);
    const weatherData: WeatherData = {
      name: data.name,
      country: data.sys.country,
      temperature: Math.floor(data.main.temp),
      feelsLike: Math.floor(data.main.feels_like),
      descriptionMain: data.weather[0].main,
      description: data.weather[0].description,
      weatherIconId: data.weather[0].icon,
    };
    this.weatherData = weatherData;
    this.authenticated = true;
  }

  async getSevenDayForecast(coordinates: Coordinates): Promise<void> {
    const data: any = await this.weatherService.sevenDayForecast(coordinates);
    console.log(data);
    for (let i = 1; i < 8; i++) {
      const entry = data.daily[i];
      const forecast: Forecast = {
        date: moment.unix(entry.dt).format('ddd'),
        sunriseTime: moment.unix(entry.sunrise).format('LT'),
        sunsetTime: moment.unix(entry.sunset).format('LT'),
        dayTemp: Math.floor(entry.temp.day),
        nightTemp: Math.floor(entry.temp.night),
        dayFeelsLike: Math.floor(entry.feels_like.day),
        nightFeelsLike: Math.floor(entry.feels_like.night),
        maxTemp: Math.floor(entry.temp.max),
        minTemp: Math.floor(entry.temp.min),
        weatherMain: entry.weather[0].main,
        weatherDescription: entry.weather[0].description,
        weatherIconId: entry.weather[0].icon,
      };
      this.sevenDayForecast.forecast.push(forecast);
    }
  }

  getDate(): void {
    const date = new Date();
    this.weekday = this.weekdays[date.getDay()];
  }
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  feelsLike: number;
  descriptionMain: string;
  description: string;
  weatherIconId: string;
}

interface SevenDayForecast {
  forecast: Forecast[];
}

interface Forecast {
  date: string;
  sunriseTime: string;
  sunsetTime: string;
  dayTemp: number;
  nightTemp: number;
  dayFeelsLike: number;
  nightFeelsLike: number;
  maxTemp: number;
  minTemp: number;
  weatherMain: string;
  weatherDescription: string;
  weatherIconId: string;
}
