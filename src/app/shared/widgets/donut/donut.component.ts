import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {DonutService} from '../donut/Service/donut.service';
import drilldown from 'highcharts/modules/drilldown.js';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-widget-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {



  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  DonutService;

  constructor(private donutService: DonutService) { }

  /**
   * REST-call aus der H2 DB sowie Übersetzungen und Highcharts parameter
   * Berater ist noch hardcoded!
   */
  ngOnInit() {
    this.donutService.getGespraechePlanIstBerater(88)
      .pipe(take(1))
      .subscribe ((data: number[]) => {
          // this.ArrayAlles = data;
          // console.log(data);
          // @ts-ignore
          this.chartOptions = {
            lang: {
              drillUpText: 'Zurück zur Jahresübersicht',
              printChart: 'Drucken',
              viewFullscreen: 'Vollbildmodus',
              downloadPNG: 'Download als PNG',
              downloadPDF: 'Download als PDF',
              downloadJPEG: 'Download als JPEG',
              downloadSVG: 'Download als SVG'
            },
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: 0,
              plotShadow: false,
              height: '74%'
            },
            title: {
              text: 'Gesprächssituation'
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
                /*dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                    fontWeight: 'bold',
                    color: 'white',
                    fontsize: 'big'
                  }
              }*/
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: false
                },
                showInLegend: true,
                // },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '85%'],
                size: '150%'
              }
            },
            series: [{
              type: 'pie',
              name: 'Gespräche 2020' ,
              innerSize: '55%',
              data: [{name: 'Geführte Gespräche',
                id: 'GG',
                y: data[0],
                drilldown: 'GG'},
                {name: 'Offene Gespräche',
                  id: 'OG',
                  y: data[5],
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
                      y: data[1],
                      drilldown: 'Q1'},
                    {name: 'Q2',
                      y: data[2],
                      drilldown: 'Q2'},
                    {name: 'Q3',
                      y: data[3],
                      drilldown: 'Q3'},
                    {name: 'Q4',
                      y: data[4],
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
                      y: data[6],
                      drilldown: 'Q1'},
                    {name: 'Q2',
                      y: data[7],
                      drilldown: 'Q2'},
                    {name: 'Q3',
                      y: data[8],
                      drilldown: 'Q3'},
                    {name: 'Q4',
                      y: data[9],
                      drilldown: 'Q4'}
                  ]
                }
              ]
            }
          };
        }
        // , err => {'Fehler aufgetreten'; }
      );
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
