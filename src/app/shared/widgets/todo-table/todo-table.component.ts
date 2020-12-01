import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TodoTableService} from './Service/todo-table.service';
import * as Highcharts from 'highcharts';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';

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

  pageEvent: PageEvent;

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
  }


