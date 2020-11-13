import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Output() reloadNewsfeed: EventEmitter<any> = new EventEmitter();

  articles;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }


  refreshNews() {
    this.reloadNewsfeed.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('reload')
      );
    }, 300);
    this.ngOnInit();

  }
}
