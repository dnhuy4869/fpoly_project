import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(public productService: ProductService) {
        this.productService.tukhoa = "";
        console.log(this.productService.tukhoa);
    }
}
