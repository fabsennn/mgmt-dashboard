import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss']
})
export class DrilldownComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }



  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Erfolgsmessung'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        labels: {
          format: '{value}%'
        },
        title: {
          text: 'Erwirtschaftetes Kapital'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: "Erfolgsmessung",
          colorByPoint: true,
          data: [
            {
              name: "Derzeitiger Stand",
              y: 10.58,
              drilldown: "Derzeitiger Stand",
              color: 'red'
            },
            {
              name: "Jahresabsatz",
              y: 60.23,
              drilldown: "Jahresabsatz",
              color: 'gray'
            },
            {

              name: "Jahresziel",
              y: 65.66,
              drilldown: "Jahresziel",
              color: 'gray'
            },
            {
              name: "Erfüllung des Zeitanteils",
              y: 10.57,
              drilldown: "DErfüllung des Zeitanteils",
              color: 'blue'
            },
          ]
        }
      ],
      drilldown: {
        series: [
          {
            name: "derzeitiger Stand",
            id: "derzeitiger Stand",
            data: [
              [
                "v65.0",
                0.1
              ],
              [
                "v64.0",
                1.3
              ],
              [
                "v63.0",
                53.02
              ],
              [
                "v62.0",
                1.4
              ],
              [
                "v61.0",
                0.88
              ],
              [
                "v60.0",
                0.56
              ],
              [
                "v59.0",
                0.45
              ],
              [
                "v58.0",
                0.49
              ],
              [
                "v57.0",
                0.32
              ],
              [
                "v56.0",
                0.29
              ],
              [
                "v55.0",
                0.79
              ],
              [
                "v54.0",
                0.18
              ],
              [
                "v51.0",
                0.13
              ],
              [
                "v49.0",
                2.16
              ],
              [
                "v48.0",
                0.13
              ],
              [
                "v47.0",
                0.11
              ],
              [
                "v43.0",
                0.17
              ],
              [
                "v29.0",
                0.26
              ]
            ]
          },
          {
            name: "Jahresabsatz",
            id: "Jahresabsatz",
            data: [
              [
                "v58.0",
                1.02
              ],
              [
                "v57.0",
                7.36
              ],
              [
                "v56.0",
                0.35
              ],
              [
                "v55.0",
                0.11
              ],
              [
                "v54.0",
                0.1
              ],
              [
                "v52.0",
                0.95
              ],
              [
                "v51.0",
                0.15
              ],
              [
                "v50.0",
                0.1
              ],
              [
                "v48.0",
                0.31
              ],
              [
                "v47.0",
                0.12
              ]
            ]
          },
          {
            name: "Jahresziel",
            id: "Jahresziel",
            data: [
              [
                "v11.0",
                6.2
              ],
              [
                "v10.0",
                0.29
              ],
              [
                "v9.0",
                0.27
              ],
              [
                "v8.0",
                0.47
              ]
            ]
          },
          {
            name: "Erfüllung des Zeitanteils",
            id: "Erfüllung des Zeitanteils",
            data: [
              [
                "v11.0",
                3.39
              ],
              [
                "v10.1",
                0.96
              ],
              [
                "v10.0",
                0.36
              ],
              [
                "v9.1",
                0.54
              ],
              [
                "v9.0",
                0.13
              ],
              [
                "v5.1",
                0.2
              ]
            ]
          },
        ]
      }

    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
