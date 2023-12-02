import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-them',
  templateUrl: './product-them.component.html',
  styleUrls: ['./product-them.component.css']
})
export class ProductThemComponent {
    constructor(
        private spService: ProductService,
        private router: Router
    ) {

    }

    sp:IProduct = {} as IProduct;

    themSP() {
        this.spService.themSanPham(this.sp);
        this.router.navigate(['admin/sp']);
    }
}
