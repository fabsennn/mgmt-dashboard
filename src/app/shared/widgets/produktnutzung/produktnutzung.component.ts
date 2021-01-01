import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ProduktNutzungService} from './service/produktnutzung.service';
import HC_exporting from 'highcharts/modules/exporting';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-produktnutzung',
  templateUrl: './produktnutzung.component.html',
  styleUrls: ['./produktnutzung.component.scss']
})
export class ProduktnutzungComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data = [];

  constructor(private produktNutzungService: ProduktNutzungService) {
  }

  ngOnInit() {
    this.produktNutzungService.getAllProduktNutzungen()
      // .pipe(filter(num => num % 2 === 0))
      .subscribe((data) => {
        console.log("ladida");
        console.log(data);
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
            valueSuffix: '<b>{point.name}</b> Verbünde: Stück<b>{point.value}</b>'
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [{
            name: 'Beraterplatz 723 0018',
            color: 'lightgreen',
            data: [36, 52, 12, 58],
            value: 'Verbünde'
          }, {
            name: 'Beraterplatz 723 0017',
            value: 1127,
            color: 'lightblue',
            data: [32, 32, 31, 11]
          }, {
            name: 'Gesamt - 721 FK',
            value: 1127,
            color: 'grey',
            data: [300, 281, 282, 211]
          }]
        };
      }
    );
    // HC_exporting(Highcharts);
  }
}
