import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NewsCardService} from './Service/news-card.service';
import * as Highcharts from 'highcharts';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
// @ts-ignore
import { TranslateService } from '@ngx-translate/core';

interface News {
  neuigkeit: string;
  dringlichkeit: string;
  datum: string;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
/**
 * Diese Klasse beinhaltet die Funktionalität des Modules.
 */
export class NewsCardComponent implements OnInit {

  constructor(private newscardService: NewsCardService) { }

  Highcharts = Highcharts;
  public newsarray: any;
  yournews: any = new MatTableDataSource();
  public pageSize = 3;
  public currentPage = 0;
  public totalSize = 0;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() reloadNewsfeed: EventEmitter<any> = new EventEmitter();

  pageEvent: PageEvent;
  translate: TranslateService;

  @Input() news: News;
  public auswahl: number;
  private auswahlgetroffen = false;

  /**
   * Initialisiert sortierung und inhalt der Komponente
   */
  ngOnInit() {
    this.pruefeauswahl(this.auswahlgetroffen, this.auswahl);
    this.refresh();
  }

  /**
   * Requested die Daten abhängig von der ausgewählten Sortierung.
   * Wenn nichts ausgewählt wurde wird die Standard-Sortierung aufgerufen, sonst die ausgewählte.
   *
   * @param auswahlgetroffen boolean ob standard oder geänderte sortierung benutzt werden soll
   * @param zahl kennzahl für die Art der Sortierung
   */
  public pruefeauswahl(auswahlgetroffen: boolean, zahl: number) { if (auswahlgetroffen === true) {
    this.getArray(zahl);
    this.yournews.paginator = this.paginator;
  } else {this.getArray(1); this.yournews.paginator = this.paginator; }
  }

  public refresh() {
    setTimeout(() => { this.ngOnInit(); }, 1000 * 10);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.newsarray.slice(start, end);
    this.yournews = part;
  }

  /**
   * REST-Call für alle Aufgaben, Sortierung abhängig vom Parameter.
   * @param counter Gibt an welche Sortierung genommen werden soll. (1: DatumAufsteigend 2: Datum Absteigend 3: Dringlichkeit
   * @private
   */
  private getArray(counter: number) {
    if (counter === 1) {
      this.newscardService.getNewsbyBeraternameAufsteigend('Max Mustermann')
        .subscribe((data) => {
          this.yournews = data;
          this.yournews.paginator = this.paginator;
          this.paginator._intl.itemsPerPageLabel = 'Einträge pro Seite';
          this.paginator._intl.nextPageLabel = 'Nächste Seite';
          this.paginator._intl.previousPageLabel = 'Vorherige Seite';
          this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
            const of = this.translate ? this.translate.instant('mat-paginator-intl.of') : 'von';
            if (length === 0 || pageSize === 0) {
              return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            const startIndex = ((page * pageSize) > length) ?
              (Math.ceil(length / pageSize) - 1) * pageSize :
              page * pageSize;

            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
          };
          this.newsarray = data;
          this.totalSize = this.newsarray.length;
          this.iterator();
        });
    } else if (counter === 2) {
      this.newscardService.getNewsbyBeraternameAbsteigend('Max Mustermann')
        .subscribe((data) => {
          this.yournews = data;
          this.yournews.paginator = this.paginator;
          this.paginator._intl.itemsPerPageLabel = 'Einträge pro Seite';
          this.paginator._intl.nextPageLabel = 'Nächste Seite';
          this.paginator._intl.previousPageLabel = 'Vorherige Seite';
          this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
            const of = this.translate ? this.translate.instant('mat-paginator-intl.of') : 'von';
            if (length === 0 || pageSize === 0) {
              return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            const startIndex = ((page * pageSize) > length) ?
              (Math.ceil(length / pageSize) - 1) * pageSize :
              page * pageSize;

            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
          };
          this.newsarray = data;
          this.totalSize = this.newsarray.length;
          this.iterator();
        });
    } else if (counter === 3) {
        this.newscardService.getNewsbyBeraternameDringlichkeit('Max Mustermann')
          .subscribe((data) => {
            this.yournews = data;
            this.yournews.paginator = this.paginator;
            this.paginator._intl.itemsPerPageLabel = 'Einträge pro Seite';
            this.paginator._intl.nextPageLabel = 'Nächste Seite';
            this.paginator._intl.previousPageLabel = 'Vorherige Seite';
            this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
              const of = this.translate ? this.translate.instant('mat-paginator-intl.of') : 'von';
              if (length === 0 || pageSize === 0) {
                return '0 ' + of + ' ' + length;
              }
              length = Math.max(length, 0);
              const startIndex = ((page * pageSize) > length) ?
                (Math.ceil(length / pageSize) - 1) * pageSize :
                page * pageSize;

              const endIndex = Math.min(startIndex + pageSize, length);
              return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
            };
            this.newsarray = data;
            this.totalSize = this.newsarray.length;
            this.iterator();
          });
    }
  }
}
