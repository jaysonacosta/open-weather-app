/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private token = '7c65ce980e4df1240780ac66f80e2905';
  constructor(private http: HttpClient) {}

  apiCall(coordinates: Coordinates) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.token}&units=imperial`;
    return new Promise((res, rej) => {
      this.http.get(url).toPromise().then(res).catch(rej);
    });
  }

  sevenDayForecast(coordinates: Coordinates) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=current,minutely,hourly,alerts&appid=${this.token}&units=imperial`;
    return new Promise((res, rej) => {
      this.http.get(url).toPromise().then(res).catch(rej);
    })
  }
}

interface Coordinates {
  longitude: number;
  latitude: number;
}
