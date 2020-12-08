import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TodoTableService} from './Service/todo-table.service';
import * as Highcharts from 'highcharts';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

interface Todo {
  kundennummer: number;
  naechsteFaelligkeit: string;
}

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements OnInit {

  Highcharts = Highcharts;
  public array: any;
  // tslint:disable-next-line:ban-types
  todos: any = new MatTableDataSource();
  public pageSize = 3;
  public currentPage = 0;
  public totalSize = 0;


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() reloadTodos: EventEmitter<any> = new EventEmitter();

  pageEvent: PageEvent;
  translate: TranslateService;

  @Input() todo: Todo;

  constructor(private todotableService: TodoTableService) {
  }

  ngOnInit() {
    this.getArray();
    this.todos.paginator = this.paginator;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getArray() {
    this.todotableService.getTodos('88')
      .subscribe((data) => {
        this.todos = data;
        this.todos.paginator = this.paginator;
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
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
      });
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.todos = part;
  }

  refreshToDoCard() {
    this.reloadTodos.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('reload')
      );
    }, 300);
    this.ngOnInit();
  }
}


