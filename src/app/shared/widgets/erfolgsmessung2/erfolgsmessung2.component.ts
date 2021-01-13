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
          lang: {
            printChart: 'Drucken',
            viewFullscreen: 'Vollbildmodus',
            downloadPNG: 'Download als PNG',
            downloadPDF: 'Download als PDF',
            downloadJPEG: 'Download als JPEG',
            downloadSVG: 'Download als SVG'
          },
          credits: {
            enabled: false
          },


          title: {
            text: 'Erfolgsmessung II - Zielerreichung Zeitanteil FK'
          },

          xAxis: {
            categories: ['Baufischutz', 'Bausparge.', 'Deka-B', 'Depotgebü.', 'Gold p. Aurum',
              'Immo.verm.', 'Jugendgiro', 'Kr.Vers.-Ertrag', 'Kreditkarten', 'Kreditschutz',
              'DSGVO', 'L.Versicherung', 'Liqui.pausch.', 'Neukundenakq.',
              'SV Provision', 'SCARD Plus', 'Strategieges', 'Themenpläne', 'ZWM',
              'ZKB Aktiv']
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
            labels: {
              format: '{value}%'
            },
            min: 0,
            max: 100,
            minColor: '#BABABA',
            maxColor: '#90EE90',
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
            data: [[0, 0, data[75]], [0, 1, data[76]], [0, 2, data[77]], [0, 3, data[78]], [0, 4, data[79]], [0, 5, data[80]],
              [0, 6, data[81]], [0, 7, data[82]], [0, 8, data[83]], [0, 9, data[84]], [0, 10, data[85]], [0, 11, data[86]],

              [1, 0, data[87]], [1, 1, data[88]], [1, 2, data[89]], [1, 3, data[90]], [1, 4, data[91]], [1, 5, data[92]],
              [1, 6, data[93]], [1, 7, data[94]], [1, 8, data[95]], [1, 9, data[96]], [1, 10, data[97]], [1, 11, data[98]],

              [2, 0, data[99]], [2, 1, data[100]], [2, 2, data[101]], [2, 3, data[102]], [2, 4, data[103]], [2, 5, data[104]],
              [2, 6, data[105]], [2, 7, data[106]], [2, 8, data[107]], [2, 9, data[108]], [2, 10, data[109]], [2, 11, data[110]],

              [3, 0, data[111]], [3, 1, data[112]], [3, 2, data[113]], [3, 3, data[114]], [3, 4, data[115]], [3, 5, data[116]],
              [3, 6, data[117]], [3, 7, data[118]], [3, 8, data[119]], [3, 9, data[120]], [3, 10, data[121]], [3, 11, data[122]],

              [4, 0, data[123]], [4, 1, data[124]], [4, 2, data[125]], [4, 3, data[126]], [4, 4, data[127]], [4, 5, data[128]],
              [4, 6, data[129]], [4, 7, data[130]], [4, 8, data[131]], [4, 9, data[132]], [4, 10, data[133]], [4, 11, data[134]],

              [5, 0, data[135]], [5, 1, data[136]], [5, 2, data[137]], [5, 3, data[138]], [5, 4, data[139]], [5, 5, data[140]],
              [5, 6, data[141]], [5, 7, data[142]], [5, 8, data[143]], [5, 9, data[144]], [5, 10, data[145]], [5, 11, data[146]],

              [6, 0, data[147]], [6, 1, data[148]], [6, 2, data[149]], [6, 3, data[150]], [6, 4, data[151]], [6, 5, data[152]],
              [6, 6, data[153]], [6, 7, data[154]], [6, 8, data[155]], [6, 9, data[156]], [6, 10, data[157]], [6, 11, data[158]],

              [7, 0, data[159]], [7, 1, data[160]], [7, 2, data[161]], [7, 3, data[162]], [7, 4, data[163]], [7, 5, data[164]],
              [7, 6, data[165]], [7, 7, data[166]], [7, 8, data[167]], [7, 9, data[168]], [7, 10, data[169]], [7, 11, data[170]],

              [8, 0, data[171]], [8, 1, data[172]], [8, 2, data[173]], [8, 3, data[174]], [8, 4, data[175]], [8, 5, data[176]],
              [8, 6, data[177]], [8, 7, data[178]], [8, 8, data[179]], [8, 9, data[180]], [8, 10, data[181]], [8, 11, data[182]],

              [9, 0, data[183]], [9, 1, data[184]], [9, 2, data[185]], [9, 3, data[186]], [9, 4, data[187]], [9, 5, data[188]],
              [9, 6, data[189]], [9, 7, data[190]], [9, 8, data[191]], [9, 9, data[192]], [9, 10, data[193]], [9, 11, data[194]],

              [10, 0, data[195]], [10, 1, data[196]], [10, 2, data[197]], [10, 3, data[198]], [10, 4, data[199]], [10, 5, data[200]],
              [10, 6, data[201]], [10, 7, data[202]], [10, 8, data[203]], [10, 9, data[204]], [10, 10, data[205]], [10, 11, data[206]],

              [11, 0, data[207]], [11, 1, data[208]], [11, 2, data[209]], [11, 3, data[210]], [11, 4, data[211]], [11, 5, data[212]],
              [11, 6, data[213]], [11, 7, data[214]], [11, 8, data[215]], [11, 9, data[216]], [11, 10, data[217]], [11, 11, data[218]],

              [12, 0, data[219]], [12, 1, data[220]], [12, 2, data[221]], [12, 3, data[222]], [12, 4, data[223]], [12, 5, data[224]],
              [12, 6, data[225]], [12, 7, data[226]], [12, 8, data[227]], [12, 9, data[228]], [12, 10, data[229]], [12, 11, data[230]],

              [13, 0, data[231]], [13, 1, data[232]], [13, 2, data[233]], [13, 3, data[234]], [13, 4, data[235]], [13, 5, data[236]],
              [13, 6, data[237]], [13, 7, data[238]], [13, 8, data[239]], [13, 9, data[240]], [13, 10, data[241]], [13, 11, data[242]],

              [14, 0, data[243]], [14, 1, data[244]], [14, 2, data[245]], [14, 3, data[246]], [14, 4, data[247]], [14, 5, data[248]],
              [14, 6, data[249]], [14, 7, data[250]], [14, 8, data[251]], [14, 9, data[252]], [14, 10, data[253]], [14, 11, data[254]],

              [15, 0, data[255]], [15, 1, data[256]], [15, 2, data[257]], [15, 3, data[258]], [15, 4, data[259]], [15, 5, data[260]],
              [15, 6, data[261]], [15, 7, data[262]], [15, 8, data[263]], [15, 9, data[264]], [15, 10, data[265]], [15, 11, data[266]],

              [16, 0, data[267]], [16, 1, data[268]], [16, 2, data[269]], [16, 3, data[270]], [16, 4, data[271]], [16, 5, data[272]],
              [16, 6, data[273]], [16, 7, data[274]], [16, 8, data[275]], [16, 9, data[276]], [16, 10, data[277]], [16, 11, data[278]],

              [17, 0, data[279]], [17, 1, data[280]], [17, 2, data[281]], [17, 3, data[282]], [17, 4, data[283]], [17, 5, data[284]],
              [17, 6, data[285]], [17, 7, data[286]], [17, 8, data[287]], [17, 9, data[288]], [17, 10, data[289]], [17, 11, data[290]],

              [18, 0, data[291]], [18, 1, data[292]], [18, 2, data[293]], [18, 3, data[294]], [18, 4, data[295]], [18, 5, data[296]],
              [18, 6, data[297]], [18, 7, data[298]], [18, 8, data[299]], [18, 9, data[300]], [18, 10, data[301]], [18, 11, data[302]],

              [19, 0, data[303]], [19, 1, data[304]], [19, 2, data[305]], [19, 3, data[306]], [19, 4, data[307]], [19, 5, data[308]],
              [19, 6, data[309]], [19, 7, data[310]], [19, 8, data[311]], [19, 9, data[312]], [19, 10, data[313]], [19, 11, data[314]], ],
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
