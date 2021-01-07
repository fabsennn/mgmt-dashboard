import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  news: string;
  berater: string;
  dringlichkeit: string;
  datum = new Date().toISOString().slice(0, 10);
  datei = new File([''], '');
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  postData() {
    let url;
    if (this.datei.size < 1) {
      url = `http://localhost:8080/news/${this.news}/${this.berater}/${this.dringlichkeit}/${this.datum}`;
    } else {
      url = `http://localhost:8080/news/${this.news}/${this.berater}/${this.dringlichkeit}/${this.datum}/${this.datei}`;
    }

    this.http.post(url, {
      news: this.news,
      berater: this.berater,
      dringlichkeit: this.dringlichkeit,
       datei: this.datei
    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }
}
