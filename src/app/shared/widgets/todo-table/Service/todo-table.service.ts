import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoTableService {

  constructor(private httpClient: HttpClient) { }

  public getTodos(beraterID) {
    return this.httpClient.get(`http://localhost:8080/todo/berater/${beraterID}`);
  }
}
