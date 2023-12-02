import { Component } from '@angular/core';
import { INews } from '../inews';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
    newsList: INews[] = [];

    constructor(
        private httpClient: HttpClient,
        private datePipe: DatePipe) {
        this.getNewsList();
    }

    getNewsList() {
        return this.httpClient.get("http://localhost:3000/tintuc").subscribe(data => {
            this.newsList = data as INews[];
        });
    }

    getNgay(news: INews) {
        return this.datePipe.transform(news.Ngay, 'dd/MM/yyyy');
    }

    ngOnInit() {

    }
}
