import { Component } from '@angular/core';
import { ISanPham } from './isan-pham';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'lab3';

    chucNang:string = "";

    spDangXem:any=null;

    ghiNhanCN(cn:string = '') {
        this.chucNang = cn;
        if (this.chucNang!='ct') this.spDangXem=null;
    }

    ganSP(sp:any){
        this.spDangXem=sp;
        this.chucNang='ct';
    }
}
