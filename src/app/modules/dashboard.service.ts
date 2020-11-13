import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  API_KEY = 'b4456ea12bc7480baa1e90ed98f0f798';

  donut() {
    return [{
      name: 'offene Gespräche',
      y: 30,
      sliced: true,
      selected: true
    }, {
      name: 'geführte Gespräche',
      y: 30
    }];
  }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
