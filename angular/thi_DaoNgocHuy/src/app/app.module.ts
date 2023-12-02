import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AddNewsComponent } from './add-news/add-news.component';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NewsComponent,
        ContactComponent,
        AdminComponent,
        AddNewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        DatePipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
