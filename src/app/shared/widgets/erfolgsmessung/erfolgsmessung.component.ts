import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import drilldown from 'highcharts/modules/drilldown.js';
import xrange from 'highcharts/modules/xrange.js';
import heatmap from 'highcharts/modules/heatmap.js';
import gantt from 'highcharts/modules/gantt.js';
import { ganttChart } from 'highcharts';
import {take} from 'rxjs/operators';
import {ErfolgsmessungService} from '../erfolgsmessung/Service/erfolgsmessung.service';

@Component({
  selector: 'app-erfolgsmessung',
  templateUrl: './erfolgsmessung.component.html',
  styleUrls: ['./erfolgsmessung.component.scss']
})
export class ErfolgsmessungComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  xrange = xrange(Highcharts);
  heatmap = heatmap(Highcharts);
  // Gantt = gantt(Highcharts);
  ErfolgsmessungService;

  constructor(private erfolgsmessungService: ErfolgsmessungService) { }

  ngOnInit() {
    this.erfolgsmessungService.getEntwicklung_zielerfuellung()
      .pipe(take(1))
      .subscribe ((data: number[]) => {
        // this.ArrayAlles = data;
        // @ts-ignore
        this.chartOptions = {
          lang: {
            // drillUpText: 'Zurück zur Jahresübersicht',
            printChart: 'Drucken',
            viewFullscreen: 'Vollbildmodus',
            downloadPNG: 'Download als PNG',
            downloadPDF: 'Download als PDF',
            downloadJPEG: 'Download als JPEG',
            downloadSVG: 'Download als SVG'
          },
          title: {
            text: 'Erfolgsmessung'
          },
          yAxis: {
            title: {
              text: 'Absatz'
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: ['Januar', 'Februar', 'März', 'April',
              'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
          },
          labels: {
            items: [{
              html: 'Zielerreichung Jahr',
              style: {
                left: '80px',
                top: '-5px',
                color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
                ) || 'black'
              }
            }]
          },
          series: [{
            type: 'column',
            name: 'FK',
            tooltip: {
              useHTML: true,
              pointFormat: '<b>FK</b>  -  Jahresziel zu <b>{point.x}%</b> erreicht.'
            },
            data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11]]
          }, {
            type: 'column',
            name: 'PB',
            data: [data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23]]
          }, {
            type: 'column',
            name: 'PK',
            data: [data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35]]
          }, {
            type: 'spline',
            name: 'Durchschnitt',
            data: [(data[0] + data[12] + data[24]) / 3,
              (data[1] + data[13] + data[25]) / 3,
              (data[2] + data[14] + data[26]) / 3,
              (data[3] + data[15] + data[27]) / 3,
              (data[4] + data[16] + data[28]) / 3,
              (data[5] + data[17] + data[29]) / 3,
              (data[6] + data[18] + data[30]) / 3,
              (data[7] + data[19] + data[31]) / 3,
              (data[8] + data[20] + data[32]) / 3,
              (data[9] + data[21] + data[33]) / 3,
              (data[10] + data[22] + data[34]) / 3,
              (data[11] + data[23] + data[35]) / 3],
            marker: {
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[3],
              fillColor: 'white'
            }
          }, {
            type: 'pie',
            title: {
              text: 'FK'
            },
            tooltip: {
              useHTML: true,
              pointFormat: '<b>FK</b>  -  Jahresziel zu <b>{point.y}%</b> erreicht.'
            },
            name: 'FK Jahresziel',
            data: [{
              name: data[72] + '%',
              y: data[72],
              color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
              name: ' ',
              y: 100 - data[72],
              color: Highcharts.getOptions().colors[5] // Jane's color
            }],
            center: [30, 30],
            size: 60,
            showInLegend: false,
            dataLabels: {
              enabled: true,
              distance: -40,
              style: {
                fontWeight: 'bold',
                color: 'white',
                fontSize: '20px'
              }
            }
          },
            {
              type: 'pie',
              title: {
                text: 'PB'
              },
              tooltip: {
                useHTML: true,
                pointFormat: '<b>PB</b>  -  Jahresziel zu <b>{point.y}%</b> erreicht.'
              },
              name: 'PB Jahresziel',
              data: [{
                name: data[73] + '%',
                y: data[73],
                color: Highcharts.getOptions().colors[1] // Jane's color
              }, {
                name: ' ',
                y: 100 - data[73],
                color: Highcharts.getOptions().colors[5] // Jane's color
              }],
              center: [115, 30],
              size: 60,
              showInLegend: false,
              dataLabels: {
                enabled: true,
                distance: -40,
                style: {
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '20px'
                }
              }
            },
            {
              type: 'pie',
              title: {
                text: 'PK'
              },
              tooltip: {
                useHTML: true,
                pointFormat: '<b>PK</b>  -  Jahresziel zu <b>{point.y}%</b> erreicht.'
              },
              name: 'PK Jahresziel',
              data: [{
                name: data[74] + '%',
                y: data[74],
                color: Highcharts.getOptions().colors[2] // Jane's color
              }, {
                name: ' ',
                y: 100 - data[74],
                color: Highcharts.getOptions().colors[5] // Jane's color
              }],
              center: [200, 30],
              size: 60,
              showInLegend: false,
              dataLabels: {
                enabled: true,
                distance: -40,
                style: {
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '20px'
                }
              }
            }]
        };
      });
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
