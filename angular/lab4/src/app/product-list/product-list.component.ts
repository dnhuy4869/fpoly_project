import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    constructor(public productService: ProductService) {
        this.productService = productService;
    }

    listProduct: IProduct[] = [];

    ngOnInit(): void {
        this.listProduct = this.productService.getProducts();
    }
}
