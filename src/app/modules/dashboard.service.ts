import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Haftpflichtversicherung',
      data: [502, 635, 809, 947, 1402, 3634, 4268]
    }, {
      name: 'Autoversicherung',
      data: [106, 107, 111, 133, 221, 1200, 1766]
    }, {
      name: 'Kreditzinsen',
      data: [163, 203, 276, 408, 547, 959, 711]
    }, {
      name: 'Kontführungsgebühren',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Sonstige',
      data: [2, 2, 2, 6, 13, 30, 220]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Kein Kontakt notwendig',
      y: 55,
      sliced: true,
      selected: true
    }, {
      name: 'Kontakt wird fällig',
      y: 24
    }, {
      name: 'Kontakt zeitnah erwünscht',
      y: 6
    }, {
      name: 'Kontakt dringend nachzuholen',
      y: 4
    }];
  }
}
