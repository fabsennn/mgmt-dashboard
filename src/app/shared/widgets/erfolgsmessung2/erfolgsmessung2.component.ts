import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import drilldown from 'highcharts/modules/drilldown.js';
import xrange from 'highcharts/modules/xrange.js';
import heatmap from 'highcharts/modules/heatmap.js';
import gantt from 'highcharts/modules/gantt.js';
import { ganttChart } from 'highcharts';
import {take} from 'rxjs/operators';
import {Erfolgsmessung2Service} from '../erfolgsmessung2/Service/erfolgsmessung2.service';

@Component({
  selector: 'app-erfolgsmessung2',
  templateUrl: './erfolgsmessung2.component.html',
  styleUrls: ['./erfolgsmessung2.component.scss']
})
export class Erfolgsmessung2Component implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  xrange = xrange(Highcharts);
  heatmap = heatmap(Highcharts);
  // Gantt = gantt(Highcharts);
  ErfolgsmessungService;

  constructor(private erfolgsmessung2Service: Erfolgsmessung2Service) { }

  ngOnInit() {
    this.erfolgsmessung2Service.getEntwicklung_zielerfuellung()
      .pipe(take(1))
      .subscribe ((data: number[]) => {
        // this.ArrayAlles = data;
        // @ts-ignore
        this.chartOptions = {
          chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
          },


          title: {
            text: 'Erfolgsmessung II - Zielerreichung Zeitanteil FK'
          },

          xAxis: {
            categories: ['Baufischutz', 'Bauspargeschäft', 'DekaBankDepots', 'Depotgebühren', 'Gold pro Aurum',
              'Immobilienvermittlung mit Kunden', 'Jugendgirokonten', 'Krankenvers.-Ertrag', 'Kreditkarten', 'Kreditschutz',
              'Kundeneinwilligungen', 'Lebensversicherungen', 'Liquiditätspauschale', 'Neukundenakquise',
              'Sachversicherungen Abschlussprovision', 'SCARD Plus', 'Strategiegespräche', 'Themenpläne', 'Zins- und Währungsmanagement',
              'Zinskonditionsbeitrag Aktiv']
          },

          yAxis: {
            categories: ['Januar', 'Februar', 'März', 'April',
              'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            title: null,
            reversed: true
          },

          /*accessibility: {
            point: {
              descriptionFormatter: function (point) {
                var ix = point.index + 1,
                  xName = getPointCategoryName(point, 'x'),
                  yName = getPointCategoryName(point, 'y'),
                  val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
              }
            }
          },*/

          colorAxis: {
            min: 0,
            // minColor: '#FFFFFF',
            minColor: '#a62121',
            // maxColor: Highcharts.getOptions().colors[2]
            maxColor: '#24abff'
          },

          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
          },
          series: [{
            name: 'Zielerreichung Zeitanteil',
            borderWidth: 1,
            data: [[0, 0, 100], [0, 1, 90], [0, 2, 8], [0, 3, 56], [0, 4, 67], [0, 5, 100], [0, 6, 90],
              [0, 7, 80], [0, 8, 24], [0, 9, 67], [0, 10, 67], [0, 11, 67],
              [1, 0, 100], [1, 1, 90], [1, 2, 80], [1, 3, 70], [1, 4, 67], [1, 5, 100], [1, 6, 90],
              [1, 7, 80], [1, 8, 80], [1, 9, 67], [1, 10, 67], [1, 11, 67],
              [2, 0, 100], [2, 1, 90], [2, 2, 80], [2, 3, 88], [2, 4, 67], [2, 5, 100], [2, 6, 90],
              [2, 7, 80], [2, 8, 90], [2, 9, 67], [2, 10, 67], [2, 11, 67],
              [3, 0, 100], [3, 1, 90], [3, 2, 80], [3, 3, 76], [3, 4, 67], [3, 5, 100], [3, 6, 90],
              [3, 7, 80], [3, 8, 70], [3, 9, 67], [3, 10, 67], [3, 11, 67],
              [4, 0, 100], [4, 1, 90], [4, 2, 80], [4, 3, 90], [4, 4, 67], [4, 5, 100], [4, 6, 90],
              [4, 7, 80], [4, 8, 100], [4, 9, 67], [4, 10, 67], [4, 11, 67],
              [5, 0, 100], [5, 1, 90], [5, 2, 80], [5, 3, 110], [5, 4, 67], [5, 5, 100], [5, 6, 90],
              [5, 7, 80], [5, 8, 79], [5, 9, 67], [5, 10, 67], [5, 11, 5],
              [6, 0, 100], [6, 1, 90], [6, 2, 80], [6, 3, 90], [6, 4, 67], [6, 5, 100], [6, 6, 90],
              [6, 7, 80], [6, 8, 90], [6, 9, 67], [6, 10, 67], [6, 11, 67],
              [7, 0, 100], [7, 1, 90], [7, 2, 80], [7, 3, 74], [7, 4, 67], [7, 5, 100], [7, 6, 90],
              [7, 7, 80], [7, 8, 99], [7, 9, 6], [7, 10, 67], [7, 11, 67],
              [8, 0, 100], [8, 1, 90], [8, 2, 80], [8, 3, 84], [8, 4, 67], [8, 5, 100], [8, 6, 90],
              [8, 7, 80], [8, 8, 84], [8, 9, 67], [8, 10, 67], [8, 11, 67],
              [9, 0, 100], [9, 1, 90], [9, 2, 80], [9, 3, 94], [9, 4, 67], [9, 5, 100], [9, 6, 90],
              [9, 7, 80], [9, 8, 94], [9, 9, 67], [9, 10, 67], [9, 11, 67],
              [10, 0, 100], [10, 1, 90], [10, 2, 80], [10, 3, 104], [10, 4, 67], [10, 5, 100], [10, 6, 90],
              [10, 7, 80], [10, 8, 104], [10, 9, 67], [10, 10, 67], [10, 11, 67], ],
            dataLabels: {
              enabled: true,
              color: '#000000'
            }
          }],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                yAxis: {
                }
              }
            }]
          }
        }
        /*{
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
            name: '13%',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
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
              name: '13%',
              y: 13,
              color: Highcharts.getOptions().colors[1] // Jane's color
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
              name: '13%',
              y: 13,
              color: Highcharts.getOptions().colors[2] // Jane's color
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
      }*/;
      });
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
