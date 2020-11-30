import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, PageEvent} from '@angular/material';
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

  public array: any;
  public displayedColumns = ['Kundennummer', 'Kategorie', 'Thema', 'Nächste Fälligkeit', 'actions'];
  // tslint:disable-next-line:ban-types
  dataSource: any = new MatTableDataSource();
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  @Input() gespraech: Gespraechsplanung;
  pageEvent: PageEvent;

  constructor(private gespraechstableService: GespraechsTableService) { }

  ngOnInit() {
    this.getArray();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getArray() {
    this.gespraechstableService.getPlanGespraecheBerater('88')
      .subscribe((data) => {
        this.dataSource = data;
        this.dataSource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
      });
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }
}
