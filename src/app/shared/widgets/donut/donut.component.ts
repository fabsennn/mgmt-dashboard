import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {DonutService} from '../donut/Service/donut.service';
import drilldown from 'highcharts/modules/drilldown.js';
import { take } from 'rxjs/operators';
import { interval } from 'rxjs';


import {MatTableDataSource} from '@angular/material';

export class Gespraechsdonut {
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
  selector: 'app-widget-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  @Input() gespraech: Gespraechsdonut;

  Highcharts = Highcharts;
  chartOptions = {};
  drilldown = drilldown(Highcharts);
  DonutService;

  constructor(private donutService: DonutService) { }

  // dataSource = new MatTableDataSource<Gespraechsdonut>();
  // displayedColumns: string[] = ['Berater', 'Kategorie'];
  // data: number[];
  // GespraecheArray;
  PlanGes: number;
  public PlanQ1;
  public PlanQ2;
  public PlanQ3;
  public PlanQ4;
  public IstGes;
  public IstQ1;
  public IstQ2;
  public IstQ3;
  public IstQ4;
  ngOnInit() {
    // const PlanGes = 0;
    // this.donutService.getGespraechePlanIst('PLAN').subscribe((data) => {
    // console.log(data);
    // @ts-ignore
    // this.dataSource = data;
    // });
    this.donutService.getGespraechePlanIstBerater(88)
      .pipe(take(1))
      .subscribe ((data: number[]) => {
          this.PlanGes = data[0];
          this.PlanQ1 = data[1];
          this.PlanQ2 = data[2];
          this.PlanQ3 = data[3];
          this.PlanQ4 = data[4];
          this.IstGes = data[5];
          this.IstQ1 = data[6];
          this.IstQ2 = data[7];
          this.IstQ3 = data[8];
          this.IstQ4 = data[9];
        }
        // , err => {'Fehler aufgetreten'; }
      );
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Meine<br>Gespräche',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} Gespräche'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
              fontsize: 'big'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '130%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Gespräche 2020',
        innerSize: '50%',
        data: [
          {name: 'Geführte Gespräche',
            id: 'GG',
            y: 10,
            drilldown: 'GG'},
          {name: 'Offene <br> Gespräche',
            id: 'OG',
            y: 9,
            drilldown: 'OG'}
        ]
      }],
      drilldown: {
        series: [
          {
            type: 'pie',
            name: 'Geführte Gespräche',
            id: 'GG',
            innerSize: '50%',
            data: [
              {name: 'Q1',
                y: 3,
                drilldown: 'Q1'},
              {name: 'Q2',
                y: 3,
                drilldown: 'Q2'},
              {name: 'Q3',
                y: 4,
                drilldown: 'Q3'},
              {name: 'Q4',
                y: 5,
                drilldown: 'Q4'}
            ]
          },
          {
            type: 'pie',
            name: 'Offene <br> Gespräche',
            id: 'OG',
            innerSize: '50%',
            data: [
              {name: 'Q1',
                y: 3,
                drilldown: 'Q1'},
              {name: 'Q2',
                y: 3,
                drilldown: 'Q2'},
              {name: 'Q3',
                y: 4,
                drilldown: 'Q3'},
              {name: 'Q4',
                y: 5,
                drilldown: 'Q4'}
            ]
          }
        ]
      }
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
