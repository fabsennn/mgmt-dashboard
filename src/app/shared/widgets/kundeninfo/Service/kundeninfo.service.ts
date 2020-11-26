import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KundeninfoService {

  constructor(private httpClient: HttpClient) { }

  public getKundeninfoKunde(kundennummer) { // evtl. statt Kundennummer Verbundführer
    return this.httpClient.get(`http://localhost:8080/kunden/${kundennummer}`); // link noch placeholder
  }
}
