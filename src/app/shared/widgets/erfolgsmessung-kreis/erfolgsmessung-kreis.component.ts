import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import drilldown from 'highcharts/modules/drilldown.js';
import xrange from 'highcharts/modules/xrange.js';
import heatmap from 'highcharts/modules/heatmap.js';
import gantt from 'highcharts/modules/gantt.js';
import { ganttChart } from 'highcharts';
import {take} from 'rxjs/operators';
import {ErfolgsmessungKreisService} from '../erfolgsmessung-kreis/Service/erfolgsmessung-kreis.service';

@Component({
  selector: 'app-erfolgsmessung-kreis',
  templateUrl: './erfolgsmessung-kreis.component.html',
  styleUrls: ['./erfolgsmessung-kreis.component.scss']
})
export class ErfolgsmessungKreisComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = null;
  drilldown = drilldown(Highcharts);
  xrange = xrange(Highcharts);
  heatmap = heatmap(Highcharts);
  // Gantt = gantt(Highcharts);
  ErfolgsmessungKreisService;

  constructor(private erfolgsmessungKreisService: ErfolgsmessungKreisService) { }

  /**
   * REST-Call für die Daten aus der H2 DB, sowie Übersetzungen und Highcharts-Parameter
   */
  ngOnInit() {
    this.erfolgsmessungKreisService.getEntwicklung_zielerfuellung()
      .pipe(take(1))
      .subscribe ((data: number[]) => {
        // this.ArrayAlles = data;
        // @ts-ignore
        this.chartOptions = {
          lang: {
            // drillUpText: 'Zurück zur Jahresübersicht',
            printChart: 'Drucken',
            viewFullscreen: 'Vollbildmodus',
            downloadPNG: 'Download als PNG',
            downloadPDF: 'Download als PDF',
            downloadJPEG: 'Download als JPEG',
            downloadSVG: 'Download als SVG'
          },
          chart: {
            type: 'column'
          },
          title: {
            text: 'Erfolgsmessung Zielerreichung'
          },
          xAxis: {
            categories: ['Zielerreichung Jahr', 'Zielerreichung Zeitanteil']
          },
          yAxis: {
            min: 0,
            max: 100,
            title: {
              text: 'Zielerreichung in %'
            }
          },
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>({point.y}%)</b><br/>',  // ({point.percentage:.0f}%)
            shared: true
          },
          plotOptions: {
            column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
            }
          },
          series: [
            {
              name: 'Grüner Bereich',
              data: [100, 100],
              color: '#90EE90',
              showInLegend: false,
              showInTooltip: false
            },
            {
              name: 'Gelber Bereich',
              data: [66, 66],
              color: '#e3e03b',
              showInLegend: false,
              showInTooltip: false
            }, {
              name: 'Roter Bereich',
              data: [33, 33],
              color: '#cf3636',
              showInLegend: false,
              showInTooltip: false
            },
            {
              name: 'FK',
              data: [data[72], data[795]],
              pointPadding: 0.42,
              pointPlacement: -0.15,
              color: Highcharts.getOptions().colors[0]

            }, {
              name: 'PB',
              data: [data[73], data[796]],
              pointPadding: 0.42,
              color: Highcharts.getOptions().colors[1]

            },
            {
              name: 'PK',
              data: [data[74], data[797]],
              pointPadding: 0.42,
              pointPlacement: +0.15,
              color: Highcharts.getOptions().colors[3]

            }]
        };
      });
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
