import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { BubblePotentialService } from './Service/bubble-potential.service';
import HC_exporting from 'highcharts/modules/exporting';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

export class KundenlistePkPotenzial {
  verbundfuehrer: number;
  berater: string;
  wprang: number;
  bsrang: number;
  lvrang: number;
}

@Component({
  selector: 'app-bubble-potential',
  templateUrl: './bubble-potential.component.html',
  styleUrls: ['./bubble-potential.component.scss']
})
export class BubblePotentialComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  @Input() rang: KundenlistePkPotenzial;
  arraybs: any;
  arraywp: any;
  arraylv: any;
  constructor(private BubblepotentialService: BubblePotentialService) { }

  ngOnInit() {
    {
      this.getArrayBS();
      this.getArrayLV();
      this.getArrayWP();
    }
    // @ts-ignore
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
        pointFormat: '<b>{point.name}:</b> {point.value} Rang'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 1000,
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
              property: 'y',
              operator: '<',
              value: 1
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
        name: 'Wertpapiere',
        data: [{
          name: this.arraywp.verbundfuehrer,
          value: this.arraywp.wprang}, ]
      }, {
        name: 'Lebensversicherung',
        data: [{
          name: this.arraylv.verbundfuehrer,
          value: this.arraylv.lvrang}, ]
      }, {
        name: 'Bausparen',
        data: [{
          name: this.arraybs.verbundfuehrer,
          value: this.arraybs.bsrang}, ]
      }]
    };
    HC_exporting(Highcharts);
  }

  private getArrayBS() {
    this.BubblepotentialService.getBSPotenzial('7230018').subscribe((data) => {
       console.log(data);
      // this.dataSource = data;
       this.arraybs = data;
    });
  }
  private getArrayWP() {
    this.BubblepotentialService.getWPPotenzial('7230018').subscribe((data) => {
      console.log(data);
      // this.dataSource = data;
      this.arraywp = data;
    });
  }
  private getArrayLV() {
    this.BubblepotentialService.getLVPotenzial('7230018').subscribe((data) => {
      console.log(data);
      // this.dataSource = data;
      this.arraylv = data;
    });
  }
}
