import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  donut() {
    return [{
      name: 'offene Gespräche',
      y: 30,
      sliced: true,
      selected: true
    }, {
      name: 'geführte Gespräche',
      y: 30
    }];
  }
}
