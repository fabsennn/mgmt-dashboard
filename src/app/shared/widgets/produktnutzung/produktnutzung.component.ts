import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-produktnutzung',
  templateUrl: './produktnutzung.component.html',
  styleUrls: ['./produktnutzung.component.scss']
})
export class ProduktnutzungComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      lang: {
        printChart: 'Drucken',
        viewFullscreen: 'Vollbildmodus',
        downloadPNG: 'Download als PNG',
        downloadPDF: 'Download als PDF',
        downloadJPEG: 'Download als JPEG',
        downloadSVG: 'Download als SVG'
      },
      title: {
        text: 'Produktnutzung'
      },
      subtitle: {
        text: 'pro Beraterplatz'
      },
      xAxis: {
        categories: ['Krankenversicherung', 'Sachversicherung', 'KFZ-Versicherung', 'Unfallversicherung'],
        title: {
          text: null
        }
      },
      credits: {
        enabled: false
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Stück',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: '<b>{point.name}</b>  -  Verbünde: 165/1127'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Anzahl pro Beraterplatz',
        color: 'lightgreen',
        data: [36, 52, 12, 58]
      }, {
        name: 'Gesamtanzahl',
        color: 'grey',
        data: [300, 281, 282, 211]
      }]
    };
  }
}

