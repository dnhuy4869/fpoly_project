import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {

    }

    idProduct:number = Number(this.route.snapshot.params['id']);
    product!: IProduct;

    ngOnInit() {
        if (this.idProduct < 0) {
            return;
        }

        let kq = this.productService.getOneProduct(this.idProduct);
        if (kq == null) {
            this.product = {} as IProduct;
        }
        else {
            this.product = kq as IProduct;
        }
    }
}
