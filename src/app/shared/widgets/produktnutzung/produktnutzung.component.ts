import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {ProduktNutzungService} from './service/produktnutzung.service';
import {filter, tap, toArray} from 'rxjs/operators';


@Component({
  selector: 'app-produktnutzung',
  templateUrl: './produktnutzung.component.html',
  styleUrls: ['./produktnutzung.component.scss']
})
export class ProduktnutzungComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;

  constructor(private produktNutzungService: ProduktNutzungService) { }

  ngOnInit() {
    // this.filteredData = [];
    this.produktNutzungService.getAllProduktNutzungen()
      .subscribe ((data: object[]) => {
        console.log(data[0]);
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
              valueSuffix: '<b>{point.name}</b> Verbünde: <b>{point.value}</b>'
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: true
                }
              }
            },
            series: [{
              name: data[2]["merkmal"],
              value: 10,
              color: 'lightgreen',
              data: [data[2]["krankenVersicherung"], data[2]["sachVersicherung"], data[2]["kfzVersicherung"], data[2]["unfallVersicherung"]]
            }, {
              name: data[1]["merkmal"],
              color: 'lightblue',
              data: [data[1]["krankenVersicherung"], data[1]["sachVersicherung"], data[1]["kfzVersicherung"], data[1]["unfallVersicherung"]]
            }, {
              name: data[0]["merkmal"],
              color: 'grey',
              data: [data[0]["krankenVersicherung"], data[0]["sachVersicherung"], data[0]["kfzVersicherung"], data[0]["unfallVersicherung"]]
            }]
          };
        }
      );
    HC_exporting(Highcharts);
   }
}
