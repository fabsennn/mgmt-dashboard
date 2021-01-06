import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsCardService {

  constructor(private httpClient: HttpClient) { }

  public getNewsbyBeraternameAufsteigend(beratername) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberaternameaufsteigenddatum/${beratername}`);
  }
  public getNewsbyBeraternameAbsteigend(beratername) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberaternameabsteigenddatum/${beratername}`);
  }
  public getNewsbyBeraternameDringlichkeit(beratername) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberaternamedringlichkeit/${beratername}`);
  }
}
