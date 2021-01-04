import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Erfolgsmessung2Service {

  constructor(private httpClient: HttpClient) { }

  public getEntwicklung_zielerfuellung() {
    return this.httpClient.get(`http://localhost:8080/entwicklung_zielerfuellung/erfolgsmessung`);
  }
}
