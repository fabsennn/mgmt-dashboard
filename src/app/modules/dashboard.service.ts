import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  API_KEY = 'b4456ea12bc7480baa1e90ed98f0f798';

  private async request(method: string, url: string, data?: any) {
    const result = this.httpClient.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }
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
    // return this.httpClient.get(`http://localhost:8080/gespraeche`, {responseType: 'text'});
  }

  public getGespraeche() {
    return this.httpClient.get(`http://localhost:8080/gespraeche`);
  }

  public getGespraech(id) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/kundennummer/${id}`);
}

  public getEvents() {
    return this.httpClient.get( `${environment.serverUrl}`);
  }

}
