import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '938b86f517cbe2bcad609fb8d77b48fd';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
