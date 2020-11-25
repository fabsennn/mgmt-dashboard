import {Component, Input, OnInit} from '@angular/core';
import {TodoTableService} from './Service/todo-table.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {MatTableDataSource} from '@angular/material';
import {Gespraechsplanung} from '../gespraechs-table/gespraechs-table.component';

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
