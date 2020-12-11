import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NewsCardService} from './Service/news-card.service';
import * as Highcharts from 'highcharts';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
// @ts-ignore
import { TranslateService } from '@ngx-translate/core';

interface News {
  neuigkeit: string;
  dringlichkeit: string;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})

export class NewsCardComponent implements OnInit {

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

  constructor(private newscardService: NewsCardService) { }

  ngOnInit() {
    this.getArray();
    this.yournews.paginator = this.paginator;
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

  private getArray() {
    this.newscardService.getNewsbyBeratername('Max Mustermann')
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

  refreshNews() {
    this.reloadNewsfeed.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('reload')
      );
    }, 300);
    this.ngOnInit();
  }
}
