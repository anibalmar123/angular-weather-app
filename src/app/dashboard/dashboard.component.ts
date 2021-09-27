import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImage = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  city = '';
  query = false;
  temperature: number;
  humidity: number;
  weather: string;
  constructor(private climaservice: ClimaService) { }

  ngOnInit(): void {
  }

  getWheather(){
    this.climaservice.getClima(this.city).subscribe(data => {
      console.log(data);
      this.temperature  = data.main.temp - 273;
      this.humidity = data.main.humidity;
      this.weather = data.weather[0].main;
      this.query = true;
    }, error => {
      alert('City not found');
      this.city = '';
      this.query = false;
    });
  }

}
