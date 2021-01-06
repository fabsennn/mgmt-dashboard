import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsCardService {

  constructor(private httpClient: HttpClient) { }

  public getNewsbyBeratername(beratername) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberaternamedringlichkeit/${beratername}`);
  }
}
