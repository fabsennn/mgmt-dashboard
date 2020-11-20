import {Component, Input, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DashboardService } from '../../../modules/dashboard.service';
import {GespraechsTableService} from './Service/gespraechs-table.service';




export class Gespraechsplanung {
  id: number;
  kundennummer: number;
  kategorie: string;
  thema: string;
  datum: string;
  zeitraum: string;
  berater: string;
  naechsteFaelligkeit: string;
  letzterKontakt: string;
}


@Component({
  selector: 'app-gespraechs-table',
  templateUrl: './gespraechs-table.component.html',
  styleUrls: ['./gespraechs-table.component.scss']
})
export class GespraechsTableComponent implements OnInit {

  @Input() gespraech: Gespraechsplanung;

  constructor(private gespraechstableService: GespraechsTableService) { }

  dataSource = new MatTableDataSource<Gespraechsplanung>();
  displayedColumns: string[] = ['Kundennummer', 'Kategorie', 'Thema', 'Nächste Fälligkeit'];

  gespraecheArray;

  ngOnInit() {

    this.gespraechstableService.getGespraeche().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data['gespraecheArray'];
    });

    /*this.dashboardService.getGespraech(10012369).subscribe((data) => {
      console.log(data);
      this.gespraecheArray = data['gespraecheArray'];
    });*/
  }
}
