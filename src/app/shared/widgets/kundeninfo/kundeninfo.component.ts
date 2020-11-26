import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {MatSort} from '@angular/material/sort';

export class Kundeninfo {
  krankenvers: number;
  unfallvers: number;
  sachvers: number;
}

@Component({
  selector: 'app-kundeninfo',
  templateUrl: './kundeninfo.component.html',
  styleUrls: ['./kundeninfo.component.scss']
})
export class KundeninfoComponent implements OnInit {
  public array: any;
  public displayedColumns = ['Krankenversicherung', 'Unfallversicherung', 'Sachversicherung'];
  dataSource: any = new MatTableDataSource();

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

}
