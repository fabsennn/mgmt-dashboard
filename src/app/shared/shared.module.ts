import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { BubblePotentialComponent } from './widgets/bubble-potential/bubble-potential.component';
import { CardComponent } from './widgets/card/card.component';
import { ProduktnutzungComponent } from './widgets/produktnutzung/produktnutzung.component';
import { DonutComponent } from './widgets/donut/donut.component';
import { NewsCardComponent } from './widgets/news-card/news-card.component';
import { TodoTableComponent } from './widgets/todo-table/todo-table.component';
import { DrilldownComponent } from './widgets/drilldown/drilldown.component';
import { GespraechsTableComponent } from './widgets/gespraechs-table/gespraechs-table.component';
import {KundeninfoComponent} from './widgets/kundeninfo/kundeninfo.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';
import { TasksComponent } from './widgets/tasks/tasks.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    ProduktnutzungComponent,
    DonutComponent,
    NewsCardComponent,
    TodoTableComponent,
    GespraechsTableComponent,
    BubblePotentialComponent,
    KundeninfoComponent,
    DrilldownComponent,
    TasksComponent
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
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    ProduktnutzungComponent,
    NewsCardComponent,
    TodoTableComponent,
    DonutComponent,
    GespraechsTableComponent,
    BubblePotentialComponent,
    KundeninfoComponent,
    DrilldownComponent,
    TasksComponent
  ]
})
export class SharedModule { }
