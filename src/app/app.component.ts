import { Component, OnInit } from '@angular/core';
import { APIService } from './Services/api.service';
import { WeatherData } from './models/weatherModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  data?: WeatherData;

  constructor(private weatherService : APIService){

  }
  ngOnInit(): void {

    // this.weatherService.getWeatherData('pune').subscribe({
    //   next:(response)=>{
    //     console.log(response);
    //     this.data = response;
    //   }
    // })
  }
}

