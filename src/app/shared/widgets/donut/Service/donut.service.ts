import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private httpClient: HttpClient) { }

  public getGespraechePlanIst(KategorieName) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/berater/PlanIst/${KategorieName}`);
  }
  public getGespraechePlanIstBerater(beraterid) {
    return this.httpClient.get(`http://localhost:8080/gespraeche//gespraeche/berater/PlanIst/Kategorie/${beraterid}`);
  }
}
