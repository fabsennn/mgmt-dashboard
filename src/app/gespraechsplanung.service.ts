import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GespraechsplanungService {
  private baseUrl = 'http://localhost:8082/api/gespraechsplanung';

  constructor(private http: HttpClient) { }

  getGespraech(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getGespraechList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /* possible To-DO
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  */
}
