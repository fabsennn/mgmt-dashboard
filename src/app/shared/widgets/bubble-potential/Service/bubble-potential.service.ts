import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BubblePotentialService {

  constructor(private httpClient: HttpClient) { }

  public getBSPotenzial(beraterID) {
    return this.httpClient.get(`http://localhost:8080/kundenliste_pk/bs_potenzial/${beraterID}`);
  }

  public getLVPotenzial(beraterID) {
    return this.httpClient.get(`http://localhost:8080/kundenliste_pk/lv_potenzial/${beraterID}`);
  }

  public getWPPotenzial(beraterID) {
    return this.httpClient.get(`http://localhost:8080/kundenliste_pk/wp_potenzial/${beraterID}`);
  }

}
