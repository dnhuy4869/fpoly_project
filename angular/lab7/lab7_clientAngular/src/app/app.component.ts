import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  constructor( private auth:AuthService){}
  thoat(){ this.auth.thoat();  }
  daDangNhap() { return this.auth.daDangNhap(); }
}
