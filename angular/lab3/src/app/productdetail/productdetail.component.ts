import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ISanPham } from '../isan-pham';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent {
    @Input() sp:ISanPham={
        id:0,tensp:'',
        code:'',
        giasp:0,
        mota:'',
        urlImage:'',
        ngay:'',
        starRate:0
    };
}
