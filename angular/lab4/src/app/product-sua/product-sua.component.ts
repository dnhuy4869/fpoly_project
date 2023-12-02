import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-sua',
  templateUrl: './product-sua.component.html',
  styleUrls: ['./product-sua.component.css']
})
export class ProductSuaComponent {
    constructor(
        private spService: ProductService,
        private route: Router,
        private activeRoute: ActivatedRoute
    ) {

    }

    sp:IProduct = {} as IProduct;
    idSP:number = Number(this.activeRoute.snapshot.params['id']);

    ngOnInit() {
        let kq = this.spService.getOneProduct(this.idSP);
        this.sp = kq as IProduct;
    }

    suaSP() {
        this.spService.themSanPham(this.sp);
        this.route.navigate(['admin/sp']);
    }
}
