import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Output() reloadNewsfeed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
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
