import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gespraechsplanung} from '../gespraechs-table.component';

@Injectable({
  providedIn: 'root'
})

export class GespraechsTableService {

  constructor(private httpClient: HttpClient) { }

  /*public getNewsByBerater(beraterName) {
    return this.httpClient.get(`http://localhost:8080/news/newsbyberatername/${beraterName}`);
  }*/

  /**
   * Holt sich alle Gespräche
   */
 public getGespraeche() {
    return this.httpClient.get(`http://localhost:8080/gespraeche`);
  }

  /** Alle Gespräche eines Beraters
   * @param beraterID Der Berater dessen Gespräche requested werden
   */
  public getGespraecheBerater(beraterID) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/berater/${beraterID}`);
  }

  /** Alle ausstehenden Gespräche eines Beraters
   * @param beraterID Der Berater dessen Gespräche requested werden
   */
  public getPlanGespraecheBerater(beraterID) {
    return this.httpClient.get(`http://localhost:8080/gespraeche/berater/${beraterID}/plan`);
  }

  /** [unvollständig] Soll ein bestimmtes Gespräch von 'Plan' auf 'ist' setzen
   * @param gespraechID Das Gespräch welches geändert werden soll
   */
  public setGespraechToIst(gespraechID) {
   // Gespraechsplanung g = new Gespraechsplanung();
   return this.httpClient.patch(`http://localhost:8080/gespraeche/ist/${gespraechID}`, {} );
  }
}
