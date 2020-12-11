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

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line'
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
        text: 'Produktnutzungsbericht'
      },
      subtitle: {
        text: 'pro Kundentyp'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['KundeA', 'KundeB', 'KundeC', 'KundeD']
      },
      yAxis: {
        title: {
          text: 'Euro'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Volumen (Aktiv)',
        data: [282300, 85000, 0, 1926000],
        color: 'lightgrey'
      }, {
        name: 'Ø (Aktiv)',
        data: [141000, 0, 85000, 321000],
        color: 'lightgreen'
      },
        {
          name: 'Volumen (Passiv)',
          data: [75000, 841000, 186000, 169000],
          color: 'lightblue'
        },
        {
          name: 'Ø (Passiv)',
          data: [37000, 841000, 186000, 28000],
          color: 'grey'
        }
      ],
    };
  }
}
