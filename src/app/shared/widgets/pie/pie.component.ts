import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Versicherungen'
      },
      xAxis: {
        categories: ['']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Balance Ihrer abgeschlossenen Verträge'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'Krankenversicherung',
        color: 'beige',
        data: [5]
      }, {
        name: 'Unfallversicherung',
        color: 'lightblue',
        data: [2]
      }, {
        name: 'Sachversicherung',
        color: 'lightgreen',
        data: [3]
      }]
    };

    HC_exporting(Highcharts);
  }

}
