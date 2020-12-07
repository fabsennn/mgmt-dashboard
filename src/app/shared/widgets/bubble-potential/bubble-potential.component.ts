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
            height: '45%'
          },
          title: {
            text: 'Privatkunden-Potenzialanalyse'
          },
          tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}. Rang'
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            packedbubble: {
              minSize: '20%',
              maxSize: '90%',
              layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
              },
              dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                  property: '{point.value}',
                  operator: '>=',
                  value: 15
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
            name: 'Lebensversicherung',
            data: [{
              name: this.arrayALL[0].nachname,
              value: this.arrayALL[0].bs_rang
            }, {
                name: this.arrayALL[1].nachname,
                value: this.arrayALL[1].bs_rang
              }, {
              name: this.arrayALL[2].nachname,
              value: this.arrayALL[2].bs_rang
            }, {
              name: this.arrayALL[3].nachname,
              value: this.arrayALL[3].bs_rang
            }, {
              name: this.arrayALL[4].nachname,
              value: this.arrayALL[4].bs_rang
            }, {
              name: this.arrayALL[5].nachname,
              value: this.arrayALL[5].bs_rang
            }, {
              name: this.arrayALL[6].nachname,
              value: this.arrayALL[6].bs_rang
            }, {
              name: this.arrayALL[7].nachname,
              value: this.arrayALL[7].bs_rang
            }, {
              name: this.arrayALL[8].nachname,
              value: this.arrayALL[8].bs_rang
            }, {
              name: this.arrayALL[9].nachname,
              value: this.arrayALL[9].bs_rang
            }, {
              name: this.arrayALL[10].nachname,
              value: this.arrayALL[10].bs_rang
            }, {
              name: this.arrayALL[11].nachname,
              value: this.arrayALL[11].bs_rang
            }, {
              name: this.arrayALL[12].nachname,
              value: this.arrayALL[12].bs_rang
            }, {
              name: this.arrayALL[13].nachname,
              value: this.arrayALL[13].bs_rang
            }, {
              name: this.arrayALL[14].nachname,
              value: this.arrayALL[14].bs_rang
            }, ]
          }, {
            name: 'Wertpapiere',
            data: [{
              name: this.arrayALL[15].nachname,
              value: this.arrayALL[15].wp_rang
            }, {
              name: this.arrayALL[16].nachname,
              value: this.arrayALL[16].wp_rang
            }, {
              name: this.arrayALL[17].nachname,
              value: this.arrayALL[17].wp_rang
            }, {
              name: this.arrayALL[18].nachname,
              value: this.arrayALL[18].wp_rang
            }, {
              name: this.arrayALL[19].nachname,
              value: this.arrayALL[19].wp_rang
            }, {
              name: this.arrayALL[20].nachname,
              value: this.arrayALL[20].wp_rang
            }, {
              name: this.arrayALL[21].nachname,
              value: this.arrayALL[21].wp_rang
            }, {
              name: this.arrayALL[22].nachname,
              value: this.arrayALL[22].wp_rang
            }, {
              name: this.arrayALL[23].nachname,
              value: this.arrayALL[23].wp_rang
            }, {
              name: this.arrayALL[24].nachname,
              value: this.arrayALL[24].wp_rang
            }, {
              name: this.arrayALL[25].nachname,
              value: this.arrayALL[25].wp_rang
            }, {
              name: this.arrayALL[26].nachname,
              value: this.arrayALL[26].wp_rang
            }, {
              name: this.arrayALL[27].nachname,
              value: this.arrayALL[27].wp_rang
            }, {
              name: this.arrayALL[28].nachname,
              value: this.arrayALL[28].wp_rang
            }, {
              name: this.arrayALL[29].nachname,
              value: this.arrayALL[29].wp_rang
            }, ]
          }, {
            name: 'Lebensversicherung',
            data: [{
              name: this.arrayALL[30].nachname,
              value: this.arrayALL[30].lv_rang
            }, {
              name: this.arrayALL[31].nachname,
              value: this.arrayALL[31].lv_rang
            }, {
              name: this.arrayALL[32].nachname,
              value: this.arrayALL[32].lv_rang
            }, {
              name: this.arrayALL[33].nachname,
              value: this.arrayALL[33].lv_rang
            }, {
              name: this.arrayALL[34].nachname,
              value: this.arrayALL[34].lv_rang
            }, {
              name: this.arrayALL[35].nachname,
              value: this.arrayALL[35].lv_rang
            }, {
              name: this.arrayALL[36].nachname,
              value: this.arrayALL[36].lv_rang
            }, {
              name: this.arrayALL[37].nachname,
              value: this.arrayALL[37].lv_rang
            }, {
              name: this.arrayALL[38].nachname,
              value: this.arrayALL[38].lv_rang
            }, {
              name: this.arrayALL[39].nachname,
              value: this.arrayALL[39].lv_rang
            }, {
              name: this.arrayALL[40].nachname,
              value: this.arrayALL[40].lv_rang
            }, {
              name: this.arrayALL[41].nachname,
              value: this.arrayALL[41].lv_rang
            }, {
              name: this.arrayALL[42].nachname,
              value: this.arrayALL[42].lv_rang
            }, {
              name: this.arrayALL[43].nachname,
              value: this.arrayALL[43].lv_rang
            }, {
              name: this.arrayALL[44].nachname,
              value: this.arrayALL[44].lv_rang
            }, ]
          }]
        };
      }
    );
    HC_exporting(Highcharts);
  }
}
