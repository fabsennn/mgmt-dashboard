import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import drilldown from 'highcharts/modules/drilldown.js';
import xrange from 'highcharts/modules/xrange.js';
import heatmap from 'highcharts/modules/heatmap.js';
import gantt from 'highcharts/modules/gantt.js';
import { ganttChart } from 'highcharts';
import {take} from 'rxjs/operators';
import {Erfolgsmessung3Service} from '../erfolgsmessung3/Service/erfolgsmessung3.service';

@Component({
  selector: 'app-erfolgsmessung3',
  templateUrl: './erfolgsmessung3.component.html',
  styleUrls: ['./erfolgsmessung3.component.scss']
})
export class Erfolgsmessung3Component implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  xrange = xrange(Highcharts);
  heatmap = heatmap(Highcharts);
  // Gantt = gantt(Highcharts);
  ErfolgsmessungService;

  constructor(private erfolgsmessung2Service: Erfolgsmessung3Service) { }

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
            text: 'Erfolgsmessung II - Zielerreichung Zeitanteil PB'
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
            max: 100,
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
            data: [[0, 0, data[315]], [0, 1, data[316]], [0, 2, data[317]], [0, 3, data[318]], [0, 4, data[319]], [0, 5, data[320]],
              [0, 6, data[321]], [0, 7, data[322]], [0, 8, data[323]], [0, 9, data[324]], [0, 10, data[325]], [0, 11, data[326]],

              [1, 0, data[327]], [1, 1, data[328]], [1, 2, data[329]], [1, 3, data[330]], [1, 4, data[331]], [1, 5, data[332]],
              [1, 6, data[333]], [1, 7, data[334]], [1, 8, data[335]], [1, 9, data[336]], [1, 10, data[337]], [1, 11, data[338]],

              [2, 0, data[339]], [2, 1, data[340]], [2, 2, data[341]], [2, 3, data[342]], [2, 4, data[343]], [2, 5, data[344]],
              [2, 6, data[345]], [2, 7, data[346]], [2, 8, data[347]], [2, 9, data[348]], [2, 10, data[349]], [2, 11, data[350]],

              [3, 0, data[351]], [3, 1, data[352]], [3, 2, data[353]], [3, 3, data[354]], [3, 4, data[355]], [3, 5, data[356]],
              [3, 6, data[357]], [3, 7, data[358]], [3, 8, data[359]], [3, 9, data[360]], [3, 10, data[361]], [3, 11, data[362]],

              [4, 0, data[363]], [4, 1, data[364]], [4, 2, data[365]], [4, 3, data[366]], [4, 4, data[367]], [4, 5, data[368]],
              [4, 6, data[369]], [4, 7, data[370]], [4, 8, data[371]], [4, 9, data[372]], [4, 10, data[373]], [4, 11, data[374]],

              [5, 0, data[375]], [5, 1, data[376]], [5, 2, data[377]], [5, 3, data[378]], [5, 4, data[379]], [5, 5, data[380]],
              [5, 6, data[381]], [5, 7, data[382]], [5, 8, data[383]], [5, 9, data[384]], [5, 10, data[385]], [5, 11, data[386]],

              [6, 0, data[387]], [6, 1, data[388]], [6, 2, data[389]], [6, 3, data[390]], [6, 4, data[391]], [6, 5, data[392]],
              [6, 6, data[393]], [6, 7, data[394]], [6, 8, data[395]], [6, 9, data[396]], [6, 10, data[397]], [6, 11, data[398]],

              [7, 0, data[399]], [7, 1, data[400]], [7, 2, data[401]], [7, 3, data[402]], [7, 4, data[403]], [7, 5, data[404]],
              [7, 6, data[405]], [7, 7, data[406]], [7, 8, data[407]], [7, 9, data[408]], [7, 10, data[409]], [7, 11, data[410]],

              [8, 0, data[411]], [8, 1, data[412]], [8, 2, data[413]], [8, 3, data[414]], [8, 4, data[415]], [8, 5, data[416]],
              [8, 6, data[417]], [8, 7, data[418]], [8, 8, data[419]], [8, 9, data[420]], [8, 10, data[421]], [8, 11, data[422]],

              [9, 0, data[423]], [9, 1, data[424]], [9, 2, data[425]], [9, 3, data[426]], [9, 4, data[427]], [9, 5, data[428]],
              [9, 6, data[429]], [9, 7, data[430]], [9, 8, data[431]], [9, 9, data[432]], [9, 10, data[433]], [9, 11, data[434]],

              [10, 0, data[435]], [10, 1, data[436]], [10, 2, data[437]], [10, 3, data[438]], [10, 4, data[439]], [10, 5, data[440]],
              [10, 6, data[441]], [10, 7, data[442]], [10, 8, data[443]], [10, 9, data[444]], [10, 10, data[445]], [10, 11, data[446]],

              [11, 0, data[447]], [11, 1, data[448]], [11, 2, data[449]], [11, 3, data[450]], [11, 4, data[451]], [11, 5, data[452]],
              [11, 6, data[453]], [11, 7, data[454]], [11, 8, data[455]], [11, 9, data[456]], [11, 10, data[457]], [11, 11, data[458]],

              [12, 0, data[459]], [12, 1, data[460]], [12, 2, data[461]], [12, 3, data[462]], [12, 4, data[463]], [12, 5, data[464]],
              [12, 6, data[465]], [12, 7, data[466]], [12, 8, data[467]], [12, 9, data[468]], [12, 10, data[469]], [12, 11, data[470]],

              [13, 0, data[471]], [13, 1, data[472]], [13, 2, data[473]], [13, 3, data[474]], [13, 4, data[475]], [13, 5, data[476]],
              [13, 6, data[477]], [13, 7, data[478]], [13, 8, data[479]], [13, 9, data[480]], [13, 10, data[481]], [13, 11, data[482]],

              [14, 0, data[483]], [14, 1, data[484]], [14, 2, data[485]], [14, 3, data[486]], [14, 4, data[487]], [14, 5, data[488]],
              [14, 6, data[489]], [14, 7, data[490]], [14, 8, data[491]], [14, 9, data[492]], [14, 10, data[493]], [14, 11, data[494]],

              [15, 0, data[495]], [15, 1, data[496]], [15, 2, data[497]], [15, 3, data[498]], [15, 4, data[499]], [15, 5, data[500]],
              [15, 6, data[501]], [15, 7, data[502]], [15, 8, data[503]], [15, 9, data[504]], [15, 10, data[505]], [15, 11, data[506]],

              [16, 0, data[507]], [16, 1, data[508]], [16, 2, data[509]], [16, 3, data[510]], [16, 4, data[511]], [16, 5, data[512]],
              [16, 6, data[513]], [16, 7, data[514]], [16, 8, data[515]], [16, 9, data[516]], [16, 10, data[517]], [16, 11, data[518]],

              [17, 0, data[519]], [17, 1, data[520]], [17, 2, data[521]], [17, 3, data[522]], [17, 4, data[523]], [17, 5, data[524]],
              [17, 6, data[525]], [17, 7, data[526]], [17, 8, data[527]], [17, 9, data[528]], [17, 10, data[529]], [17, 11, data[530]],

              [18, 0, data[531]], [18, 1, data[532]], [18, 2, data[533]], [18, 3, data[534]], [18, 4, data[535]], [18, 5, data[536]],
              [18, 6, data[537]], [18, 7, data[538]], [18, 8, data[539]], [18, 9, data[540]], [18, 10, data[541]], [18, 11, data[542]],

              [19, 0, data[543]], [19, 1, data[544]], [19, 2, data[545]], [19, 3, data[546]], [19, 4, data[547]], [19, 5, data[548]],
              [19, 6, data[549]], [19, 7, data[550]], [19, 8, data[551]], [19, 9, data[552]], [19, 10, data[553]], [19, 11, data[554]], ],
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
