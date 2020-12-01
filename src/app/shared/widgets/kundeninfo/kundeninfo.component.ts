import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {KundeninfoService} from './Service/kundeninfo.service';
import {FormBuilder} from '@angular/forms';

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
  checkoutForm;

  @Input() kundeninfo: Kundeninfo;
  @Input() kundennr: number;

  // tslint:disable-next-line:ban-types
  kundeninfos: Object;

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private kundeninfoService: KundeninfoService,
              private formBuilder: FormBuilder ) {
    this.checkoutForm = this.formBuilder.group({kundennr: 0 });
  }

 ngOnInit() {
    /*this.kundeninfoService.getKundeninfoKunde(this.kundennr).subscribe((data) => {
      console.log(data);
      this.kundeninfos = data;
      this.dataSource = data;
    });*/
  }

  onSubmit(inputKundenNr) {
    this.kundennr = inputKundenNr;
    console.log(inputKundenNr);
    this.kundeninfoService.getKundeninfoKunde(inputKundenNr).subscribe((data) => {
      console.log(data);
      this.kundeninfos = data;
      this.dataSource = data;
    });
  }
}
