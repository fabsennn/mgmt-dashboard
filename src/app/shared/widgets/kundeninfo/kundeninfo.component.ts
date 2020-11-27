import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {KundeninfoService} from './Service/kundeninfo.service';

interface Kundeninfo {
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

  public displayedColumns = ['Krankenversicherung', 'Unfallversicherung', 'Sachversicherung'];
  dataSource: any = new MatTableDataSource();
  @Input() kundeninfo: Kundeninfo;
  kundeninfos: Object;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private kundeninfoService: KundeninfoService ) { }

  ngOnInit() {
    this.kundeninfoService.getKundeninfoKunde(8).subscribe((data) => {
      console.log(data);
      this.kundeninfos = data;
      this.dataSource = data;
    });
  }



}
