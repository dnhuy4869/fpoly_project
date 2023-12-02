import { Component } from '@angular/core';
import { ISanPham } from '../ISanPham';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent {
    showImages:boolean = true;

    constructor(public productService: ProductService) {

    }
}
