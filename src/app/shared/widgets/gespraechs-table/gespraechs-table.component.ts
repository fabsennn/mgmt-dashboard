import {Component, Input, OnInit} from '@angular/core';
import { GespraechsplanungService } from '../../../gespraechsplanung.service';
import { MatTableDataSource } from '@angular/material';
import { Gespraechsplanung } from '../../../gespraechsplanung';
import {DashboardService} from '../../../modules/dashboard.service';

@Component({
  selector: 'app-gespraechs-table',
  templateUrl: './gespraechs-table.component.html',
  styleUrls: ['./gespraechs-table.component.scss']
})


export class GespraechsTableComponent implements OnInit {

  @Input() gespraech: Gespraechsplanung;

  constructor(private dashboardService: DashboardService) { }

  dataSource = new MatTableDataSource<Gespraechsplanung>();
  displayedColumns: string[] = ['Kundennummer', 'Kategorie', 'Thema', 'Nächste Fälligkeit'];

  gespraecheArray;

  ngOnInit() {

    /*this.dashboardService.getGespraeche().subscribe((data) => {
      console.log(data);
      this.gespraecheArray = data['gespraecheArray'];
    });*/

    this.dashboardService.getGespraech(10012369).subscribe((data) => {
      console.log(data);
      this.gespraecheArray = data['gespraecheArray'];
    });
  }
}
