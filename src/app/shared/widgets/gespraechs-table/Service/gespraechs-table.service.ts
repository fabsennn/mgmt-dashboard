import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GespraechsTableService {

  constructor(private httpClient: HttpClient) { }

  /*public getNewsByBerater(beraterName) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberatername/${beraterName}`);
  }*/

 public getGespraeche() {
    return this.httpClient.get(`http://localhost:8080/gespraeche`);
  }

  public getGespraecheBerater(beraterID) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/berater/${beraterID}`);
  }

  public getPlanGespraecheBerater(beraterID) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/berater/${beraterID}/plan`);
  }
}
