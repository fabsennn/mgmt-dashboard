import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BubblePotentialService {

  constructor(private httpClient: HttpClient) { }

  public getAllPotenzial(beraterID) {
    return this.httpClient.get(`http://localhost:8080/kundenliste_pk/all_potenzial/${beraterID}`);
  }

}
