import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  datum: any;
  gespraechstyp: string;
  kundennummer: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { datum: 9.11, name: 'Anna Müller', gespraechstyp: 'PK Spezialistengespräch', kundennummer: 531532231},
  { datum: 9.11, name: 'Felix Schmidt', gespraechstyp: 'PK Spezialistengespräch', kundennummer: 546535165},
  { datum: 6.11, name: 'Hans Fischer', gespraechstyp: 'FK Vertiefungsgespräch', kundennummer: 351351624},
  { datum: 6.11, name: 'Birgit Wagner', gespraechstyp: 'FK Spezialistengespräch', kundennummer: 351658489},
  { datum: 6.11, name: 'Manuela Schröder', gespraechstyp: 'PK Vertiefungsgespräch', kundennummer: 321564202},
  { datum: 4.11, name: 'Max Hofmann', gespraechstyp: 'FK Vertiefungsgespräch', kundennummer: 618472560},
  { datum: 3.11, name: 'Laura Zimmermann', gespraechstyp: 'PK Spezialistengespräch', kundennummer: 656516120},
  { datum: 3.11, name: 'Philipp Meier', gespraechstyp: 'PK Vertiefungsgespräch', kundennummer: 351321005},
  { datum: 2.11, name: 'Lisa Krause', gespraechstyp: 'FK Vertiefungsgespräch', kundennummer: 371598264},
  { datum: 2.11, name: 'Leon Schwarz', gespraechstyp: 'FK Spezialistengespräch', kundennummer: 362485168},
  { datum: 2.11, name: 'Walter Schulze', gespraechstyp: 'PK Spezialistengespräch', kundennummer: 28115215},
  { datum: 30.10, name: 'Kerstin Scholz', gespraechstyp: 'PK Spezialistengespräch', kundennummer: 358645058}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  donut = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.donut = this.dashboardService.donut();

    this.dataSource.paginator = this.paginator;
  }

}
