import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  datei: File | null;
  createQPForm: FormGroup;

  constructor(private http: HttpClient, private _FormBuilder: FormBuilder, ) {
    this.datei = null;
  }
  ngOnInit() {
    this.createQPForm = this._FormBuilder.group({
      qpName: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.datei = event.target.files[0];
    }
  }

  createQP() {
    if (this.createQPForm.valid && this.datei && this.datei.name) {
      const formData: FormData = new FormData();
      formData.append('qpName', this.createQPForm.value.qpName);
      formData.append('file', this.datei, this.datei.name);
    }
  }

  postData() {
    /*let url;
    if (this.datei.size != null) {
      url = `http://localhost:8080/news/${this.news}/${this.berater}/${this.dringlichkeit}/${this.datum}`;
    } else {
      url = `http://localhost:8080/news/${this.news}/${this.berater}/${this.dringlichkeit}/${this.datum}/${this.datei}`;
    }*/
    if (this.createQPForm.valid && this.datei && this.datei.name) {
      const formData: FormData = new FormData();
      formData.append('qpName', this.createQPForm.value.qpName);
      formData.append('file', this.datei, this.datei.name);
      // use the formDat here
    }


    const url = `http://localhost:8080/news/${this.news}/${this.berater}/${this.dringlichkeit}/${this.datum}/${this.datei}`;
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
