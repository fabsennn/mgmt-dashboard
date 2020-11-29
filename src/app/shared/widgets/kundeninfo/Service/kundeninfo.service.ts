import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KundeninfoService {

  constructor(private httpClient: HttpClient) { }

  public getKundeninfoKunde(kundennummer) {
    console.log(kundennummer);
    return this.httpClient.get(`http://localhost:8080/kundenliste_pk/kunde/${kundennummer.kundennr}`); // link noch placeholder
  }
}
