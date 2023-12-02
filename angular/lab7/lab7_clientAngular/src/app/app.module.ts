import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Moment } from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownLoadComponent,
    DangKyComponent,
    DangNhapComponent,
    DoiPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
