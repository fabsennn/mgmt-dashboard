import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import drilldown from 'highcharts/modules/drilldown.js';
import xrange from 'highcharts/modules/xrange.js';
import heatmap from 'highcharts/modules/heatmap.js';
import gantt from 'highcharts/modules/gantt.js';
import { ganttChart } from 'highcharts';
import {take} from 'rxjs/operators';
import {Erfolgsmessung4Service} from '../erfolgsmessung4/Service/erfolgsmessung4.service';

@Component({
  selector: 'app-erfolgsmessung4',
  templateUrl: './erfolgsmessung4.component.html',
  styleUrls: ['./erfolgsmessung4.component.scss']
})
export class Erfolgsmessung4Component implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  xrange = xrange(Highcharts);
  heatmap = heatmap(Highcharts);
  // Gantt = gantt(Highcharts);
  ErfolgsmessungService;

  constructor(private erfolgsmessung2Service: Erfolgsmessung4Service) { }

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
            text: 'Erfolgsmessung II - Zielerreichung Zeitanteil PK'
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
            maxColor: '#90EE90'
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
            data: [[0, 0, data[555]], [0, 1, data[556]], [0, 2, data[557]], [0, 3, data[558]], [0, 4, data[559]], [0, 5, data[560]],
              [0, 6, data[561]], [0, 7, data[562]], [0, 8, data[563]], [0, 9, data[564]], [0, 10, data[565]], [0, 11, data[566]],

              [1, 0, data[567]], [1, 1, data[568]], [1, 2, data[569]], [1, 3, data[570]], [1, 4, data[571]], [1, 5, data[572]],
              [1, 6, data[573]], [1, 7, data[574]], [1, 8, data[575]], [1, 9, data[576]], [1, 10, data[577]], [1, 11, data[578]],

              [2, 0, data[579]], [2, 1, data[580]], [2, 2, data[581]], [2, 3, data[582]], [2, 4, data[583]], [2, 5, data[584]],
              [2, 6, data[585]], [2, 7, data[586]], [2, 8, data[587]], [2, 9, data[588]], [2, 10, data[589]], [2, 11, data[590]],

              [3, 0, data[591]], [3, 1, data[592]], [3, 2, data[593]], [3, 3, data[594]], [3, 4, data[595]], [3, 5, data[596]],
              [3, 6, data[597]], [3, 7, data[598]], [3, 8, data[599]], [3, 9, data[600]], [3, 10, data[601]], [3, 11, data[602]],

              [4, 0, data[603]], [4, 1, data[604]], [4, 2, data[605]], [4, 3, data[606]], [4, 4, data[607]], [4, 5, data[608]],
              [4, 6, data[609]], [4, 7, data[610]], [4, 8, data[611]], [4, 9, data[612]], [4, 10, data[613]], [4, 11, data[614]],

              [5, 0, data[615]], [5, 1, data[616]], [5, 2, data[617]], [5, 3, data[618]], [5, 4, data[619]], [5, 5, data[620]],
              [5, 6, data[621]], [5, 7, data[622]], [5, 8, data[623]], [5, 9, data[624]], [5, 10, data[625]], [5, 11, data[626]],

              [6, 0, data[627]], [6, 1, data[628]], [6, 2, data[629]], [6, 3, data[630]], [6, 4, data[631]], [6, 5, data[632]],
              [6, 6, data[633]], [6, 7, data[634]], [6, 8, data[635]], [6, 9, data[636]], [6, 10, data[637]], [6, 11, data[638]],

              [7, 0, data[639]], [7, 1, data[640]], [7, 2, data[641]], [7, 3, data[642]], [7, 4, data[643]], [7, 5, data[644]],
              [7, 6, data[645]], [7, 7, data[646]], [7, 8, data[647]], [7, 9, data[648]], [7, 10, data[649]], [7, 11, data[650]],

              [8, 0, data[651]], [8, 1, data[652]], [8, 2, data[653]], [8, 3, data[654]], [8, 4, data[655]], [8, 5, data[656]],
              [8, 6, data[657]], [8, 7, data[658]], [8, 8, data[659]], [8, 9, data[660]], [8, 10, data[661]], [8, 11, data[662]],

              [9, 0, data[663]], [9, 1, data[664]], [9, 2, data[665]], [9, 3, data[666]], [9, 4, data[667]], [9, 5, data[668]],
              [9, 6, data[669]], [9, 7, data[670]], [9, 8, data[671]], [9, 9, data[672]], [9, 10, data[673]], [9, 11, data[674]],

              [10, 0, data[675]], [10, 1, data[676]], [10, 2, data[677]], [10, 3, data[678]], [10, 4, data[679]], [10, 5, data[680]],
              [10, 6, data[681]], [10, 7, data[682]], [10, 8, data[683]], [10, 9, data[684]], [10, 10, data[685]], [10, 11, data[686]],

              [11, 0, data[687]], [11, 1, data[688]], [11, 2, data[689]], [11, 3, data[690]], [11, 4, data[691]], [11, 5, data[692]],
              [11, 6, data[693]], [11, 7, data[694]], [11, 8, data[695]], [11, 9, data[696]], [11, 10, data[697]], [11, 11, data[698]],

              [12, 0, data[699]], [12, 1, data[700]], [12, 2, data[701]], [12, 3, data[702]], [12, 4, data[703]], [12, 5, data[704]],
              [12, 6, data[705]], [12, 7, data[706]], [12, 8, data[707]], [12, 9, data[708]], [12, 10, data[709]], [12, 11, data[710]],

              [13, 0, data[711]], [13, 1, data[712]], [13, 2, data[713]], [13, 3, data[714]], [13, 4, data[715]], [13, 5, data[716]],
              [13, 6, data[717]], [13, 7, data[718]], [13, 8, data[719]], [13, 9, data[720]], [13, 10, data[721]], [13, 11, data[722]],

              [14, 0, data[723]], [14, 1, data[724]], [14, 2, data[725]], [14, 3, data[726]], [14, 4, data[727]], [14, 5, data[728]],
              [14, 6, data[729]], [14, 7, data[730]], [14, 8, data[731]], [14, 9, data[732]], [14, 10, data[733]], [14, 11, data[734]],

              [15, 0, data[735]], [15, 1, data[736]], [15, 2, data[737]], [15, 3, data[738]], [15, 4, data[739]], [15, 5, data[740]],
              [15, 6, data[741]], [15, 7, data[742]], [15, 8, data[743]], [15, 9, data[744]], [15, 10, data[745]], [15, 11, data[746]],

              [16, 0, data[747]], [16, 1, data[748]], [16, 2, data[749]], [16, 3, data[750]], [16, 4, data[751]], [16, 5, data[752]],
              [16, 6, data[753]], [16, 7, data[754]], [16, 8, data[755]], [16, 9, data[756]], [16, 10, data[757]], [16, 11, data[758]],

              [17, 0, data[759]], [17, 1, data[760]], [17, 2, data[761]], [17, 3, data[762]], [17, 4, data[763]], [17, 5, data[764]],
              [17, 6, data[765]], [17, 7, data[766]], [17, 8, data[767]], [17, 9, data[768]], [17, 10, data[769]], [17, 11, data[770]],

              [18, 0, data[771]], [18, 1, data[772]], [18, 2, data[773]], [18, 3, data[774]], [18, 4, data[775]], [18, 5, data[776]],
              [18, 6, data[777]], [18, 7, data[778]], [18, 8, data[779]], [18, 9, data[780]], [18, 10, data[781]], [18, 11, data[782]],

              [19, 0, data[783]], [19, 1, data[784]], [19, 2, data[785]], [19, 3, data[786]], [19, 4, data[787]], [19, 5, data[788]],
              [19, 6, data[789]], [19, 7, data[790]], [19, 8, data[791]], [19, 9, data[792]], [19, 10, data[793]], [19, 11, data[794]], ],
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
