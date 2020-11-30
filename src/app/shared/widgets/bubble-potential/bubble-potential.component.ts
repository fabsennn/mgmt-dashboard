import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-bubble-potential',
  templateUrl: './bubble-potential.component.html',
  styleUrls: ['./bubble-potential.component.scss']
})
export class BubblePotentialComponent implements OnInit {
  chartOptions = {};
  @Input() data: any [];
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
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
              value: 250
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
          name: 'Germany',
          value: 767.1
        },
          {
            name: 'Luxembourg',
            value: 10.4
          },
          {
            name: 'Macedonia',
            value: 9.5
          },
          {
            name: 'Moldova',
            value: 7.8
          },
          {
            name: 'Latvia',
            value: 7.5
          },
          {
            name: 'Cyprus',
            value: 7.2
          }]
      }, {
        name: 'Lebensversicherung',
        data: [{
          name: 'Senegal',
          value: 8.2
        },
          {
            name: 'Ethiopia',
            value: 8.9
          },
          {
            name: 'United Republic of Tanzania',
            value: 9.1
          },
          {
            name: 'Nigeria',
            value: 93.9
          },
          {
            name: 'South Africa',
            value: 392.7
          }, {
            name: 'Egypt',
            value: 225.1
          }, {
            name: 'Algeria',
            value: 141.5
          }]
      }, {
        name: 'Bausparen',
        data: [{
          name: 'Australia',
          value: 409.4
        },
          {
            name: 'New Zealand',
            value: 34.1
          },
          {
            name: 'Papua New Guinea',
            value: 7.1
          }]
      }]
    };
    HC_exporting(Highcharts);
  }
}
