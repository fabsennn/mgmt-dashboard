import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule, MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { DonutComponent } from './widgets/donut/donut.component';
import { NewsCardComponent } from './widgets/news-card/news-card.component';
import { TodoTableComponent } from './widgets/todo-table/todo-table.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    DonutComponent,
    NewsCardComponent,
    TodoTableComponent
  ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        RouterModule,
        HighchartsChartModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    NewsCardComponent,
    TodoTableComponent,
    DonutComponent
  ]
})
export class SharedModule { }
