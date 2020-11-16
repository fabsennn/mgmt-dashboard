import {Component, Input, OnInit} from '@angular/core';
import { GespraechsplanungService } from '../../../gespraechsplanung.service';
import { MatTableDataSource } from '@angular/material';
import { Gespraechsplanung } from '../../../gespraechsplanung';

@Component({
  selector: 'app-gespraechs-table',
  templateUrl: './gespraechs-table.component.html',
  styleUrls: ['./gespraechs-table.component.scss']
})


export class GespraechsTableComponent implements OnInit {

  @Input() gespraech: Gespraechsplanung;

  constructor(private gespraechsService: GespraechsplanungService) { }

  dataSource = new MatTableDataSource<Gespraechsplanung>();
  displayedColumns: string[] = ['Kundennummer', 'Kategorie', 'Thema', 'Nächste Fälligkeit'];

  ngOnInit() {
    /*this.gespraechsService.getGespraechList().subscribe(gespraech => this.gespraech = gespraech);*/
    this.gespraechsService.getGespraech(10012369).subscribe(gespraech => this.gespraech = gespraech);
  }

}
