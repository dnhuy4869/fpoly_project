import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-ds',
  templateUrl: './product-ds.component.html',
  styleUrls: ['./product-ds.component.css']
})
export class ProductDsComponent {
    constructor(private spService: ProductService) {

    }

    listSP: IProduct[] = [];

    ngOnInit() {
        this.listSP = this.spService.getProducts();
    }

    xoaSP(id:number) {
        this.spService.xoaSanPham(id);
        return false;
    }
}
