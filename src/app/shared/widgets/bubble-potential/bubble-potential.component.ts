import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BubblePotentialService } from './Service/bubble-potential.service';
import HC_exporting from 'highcharts/modules/exporting';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

export class KundenlistePkPotenzial {
  nachname: string;
  berater: string;
  // tslint:disable-next-line:variable-name
  wp_rang: number;
  // tslint:disable-next-line:variable-name
  bs_rang: number;
  // tslint:disable-next-line:variable-name
  lv_rang: number;
}

const flipper = [0, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

@Component({
  selector: 'app-bubble-potential',
  templateUrl: './bubble-potential.component.html',
  styleUrls: ['./bubble-potential.component.scss']
})
export class BubblePotentialComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any = null;
  arrayALL: any;
  constructor(private BubblepotentialService: BubblePotentialService) {
  }

  ngOnInit() {
    this.BubblepotentialService.getAllPotenzial('7230018').subscribe((data) => {
        this.arrayALL = data;
        this.chartOptions = {
          chart: {
            type: 'packedbubble',
            height: '57%'
          },
          title: {
            text: 'Privatkunden-Potenzialanalyse'
          },
          tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}</b>  -  Potential: {point.value}%'
          },
          credits: {
            enabled: false
          },
          lang: {
            printChart: 'Drucken',
            viewFullscreen: 'Vollbildmodus',
            downloadPNG: 'Download als PNG',
            downloadPDF: 'Download als PDF',
            downloadJPEG: 'Download als JPEG',
            downloadSVG: 'Download als SVG'
          },
          plotOptions: {
            packedbubble: {
              minSize: '10%',
              maxSize: '95%',
              layoutAlgorithm: {
                gravitationalConstant: 0.005,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
              },
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                  property: 'y',
                  operator: '>=',
                  value: 70
                },
                style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
                }
              }
            }
          },
          series: [{
            name: 'Bausparen',
            data: [{
              name: this.arrayALL[0].nachname + ', ID: ' + this.arrayALL[0].id ,
              value: flipper[this.arrayALL[0].bs_rang]
            }, {
              name: this.arrayALL[1].nachname + ', ID: ' + this.arrayALL[1].id ,
              value: flipper[this.arrayALL[1].bs_rang]
              }, {
              name: this.arrayALL[2].nachname + ', ID: ' + this.arrayALL[2].id ,
              value: flipper[this.arrayALL[2].bs_rang]
            }, {
              name: this.arrayALL[3].nachname + ', ID: ' + this.arrayALL[3].id ,
              value: flipper[this.arrayALL[3].bs_rang]
            }, {
              name: this.arrayALL[4].nachname + ', ID: ' + this.arrayALL[4].id ,
              value: flipper[this.arrayALL[4].bs_rang]
            }, {
              name: this.arrayALL[5].nachname + ', ID: ' + this.arrayALL[5].id ,
              value: flipper[this.arrayALL[5].bs_rang]
            }, {
              name: this.arrayALL[6].nachname + ', ID: ' + this.arrayALL[6].id ,
              value: flipper[this.arrayALL[6].bs_rang]
            }, {
              name: this.arrayALL[7].nachname + ', ID: ' + this.arrayALL[7].id ,
              value: flipper[this.arrayALL[7].bs_rang]
            }, {
              name: this.arrayALL[8].nachname + ', ID: ' + this.arrayALL[8].id ,
              value: flipper[this.arrayALL[8].bs_rang]
            }, {
              name: this.arrayALL[9].nachname + ', ID: ' + this.arrayALL[9].id ,
              value: flipper[this.arrayALL[9].bs_rang]
            }, ]
          }, {
            name: 'Wertpapiere',
            data: [{
              name: this.arrayALL[10].nachname + ', ID: ' + this.arrayALL[10].id ,
              value: flipper[this.arrayALL[10].wp_rang]
            }, {
              name: this.arrayALL[11].nachname + ', ID: ' + this.arrayALL[11].id ,
              value: flipper[this.arrayALL[11].wp_rang]
            }, {
              name: this.arrayALL[12].nachname + ', ID: ' + this.arrayALL[12].id ,
              value: flipper[this.arrayALL[12].wp_rang]
            }, {
              name: this.arrayALL[13].nachname + ', ID: ' + this.arrayALL[13].id ,
              value: flipper[this.arrayALL[13].wp_rang]
            }, {
              name: this.arrayALL[14].nachname + ', ID: ' + this.arrayALL[14].id ,
              value: flipper[this.arrayALL[14].wp_rang]
            }, {
              name: this.arrayALL[15].nachname + ', ID: ' + this.arrayALL[15].id ,
              value: flipper[this.arrayALL[15].wp_rang]
            }, {
              name: this.arrayALL[16].nachname + ', ID: ' + this.arrayALL[16].id ,
              value: flipper[this.arrayALL[16].wp_rang]
            }, {
              name: this.arrayALL[17].nachname + ', ID: ' + this.arrayALL[17].id ,
              value: flipper[this.arrayALL[17].wp_rang]
            }, {
              name: this.arrayALL[18].nachname + ', ID: ' + this.arrayALL[18].id ,
              value: flipper[this.arrayALL[18].wp_rang]
            }, {
              name: this.arrayALL[19].nachname + ', ID: ' + this.arrayALL[19].id ,
              value: flipper[this.arrayALL[19].wp_rang]
            }, ]
          }, {
            name: 'Lebensversicherung',
            data: [{
              name: this.arrayALL[20].nachname + ', ID: ' + this.arrayALL[20].id ,
              value: flipper[this.arrayALL[20].lv_rang]
            }, {
              name: this.arrayALL[21].nachname + ', ID: ' + this.arrayALL[21].id ,
              value: flipper[this.arrayALL[21].lv_rang]
            }, {
              name: this.arrayALL[22].nachname + ', ID: ' + this.arrayALL[22].id ,
              value: flipper[this.arrayALL[22].lv_rang]
            }, {
              name: this.arrayALL[23].nachname + ', ID: ' + this.arrayALL[23].id ,
              value: flipper[this.arrayALL[23].lv_rang]
            }, {
              name: this.arrayALL[24].nachname + ', ID: ' + this.arrayALL[24].id ,
              value: flipper[this.arrayALL[24].lv_rang]
            }, {
              name: this.arrayALL[25].nachname + ', ID: ' + this.arrayALL[25].id ,
              value: flipper[this.arrayALL[25].lv_rang]
            }, {
              name: this.arrayALL[26].nachname + ', ID: ' + this.arrayALL[26].id ,
              value: flipper[this.arrayALL[26].lv_rang]
            }, {
              name: this.arrayALL[27].nachname + ', ID: ' + this.arrayALL[27].id ,
              value: flipper[this.arrayALL[27].lv_rang]
            }, {
              name: this.arrayALL[28].nachname + ', ID: ' + this.arrayALL[28].id ,
              value: flipper[this.arrayALL[28].lv_rang]
            }, {
              name: this.arrayALL[29].nachname + ', ID: ' + this.arrayALL[29].id ,
              value: flipper[this.arrayALL[29].lv_rang]
            }, ]
          }]
        };
      }
    );
    HC_exporting(Highcharts);
  }
}
