import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INews } from '../inews';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
    TieuDe: string = "";
    Ngay: string = "";
    Xem: string = "";
    TomTat: string = "";

    newsList: INews[] = [];

    constructor(
        private httpClient: HttpClient,
        private route: Router) {

    }

    getNewsList() {
        return this.httpClient.get("http://localhost:3000/tintuc").subscribe(data => {
            this.newsList = data as INews[];
        });
    }

    addNewNews(news: INews) {
        return this.httpClient.post("http://localhost:3000/tintuc/", news).subscribe(data => {});
    }

    addNews(event: any) {
        this.getNewsList();

        let newID:number = 0;
        if (this.newsList.length <= 0)
        {
            newID = 1;
        }
        else {
            newID = Number(this.newsList[this.newsList.length - 1].id) + 1;
        }

        const newNews:INews = {
            id: String(newID),
            TieuDe: this.TieuDe,
            Ngay: this.Ngay,
            Xem: this.Xem,
            TomTat: this.TomTat,
            Content: "",
        };

        this.addNewNews(newNews);

        this.route.navigate(['news']);
    }
}
