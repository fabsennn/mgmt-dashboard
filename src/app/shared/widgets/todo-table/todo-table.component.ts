import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TodoTableService} from './Service/todo-table.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {Gespraechsplanung} from '../gespraechs-table/gespraechs-table.component';
import {MatSort} from '@angular/material/sort';

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
  // tslint:disable-next-line:ban-types
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageEvent: PageEvent;

  @Input() todo: Todo;

  constructor(private todotableService: TodoTableService) { }

  todos: Todo[];

  ngOnInit() {

    this.todotableService.getTodos('88').subscribe((data) => {
      console.log(data);
      // @ts-ignore
      this.todos = data;
    });
  }

}
