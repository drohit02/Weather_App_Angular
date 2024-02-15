// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { WeatherData } from '../models/weatherModels';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   const apiUrl = `${environment.weatherApiBaseUrl}/city/${cityName}`;

  //   const headers = new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderLabel, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderLabel, environment.XRapidAPIKeyHeaderValue);

  //   const params = new HttpParams()
  //     .set('units', 'metric')
  //     .set('mode', 'json');

  //   return this.http.get<WeatherData>(apiUrl, { headers, params });
  // }
}

