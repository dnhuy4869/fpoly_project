import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: IProduct[] = [
        {
            id: 1, name: 'Leaf Rake', code: 'GDN-0011', price: 19.95,
            desc: 'Leaf rake with 48-inch wooden handle',
            urlImage: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
            date: 'March 19, 2016', starRate: 3.2
        },
        {
            id: 2, name: 'Garden Cart', code: 'GDN-0023', price: 32.99,
            desc: '15 gallon capacity rolling garden cart',
            urlImage: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
            date: 'March 18, 2016', starRate: 4.2
        },
        {
            id: 5, name: 'Hammer', code: 'TBX-0048', price: 8.9,
            desc: 'Curved claw steel hammer',
            urlImage: 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
            date: 'May 21, 2016', starRate: 3.8
        },
        {
            id: 8, name: 'Saw', code: 'TBX-0022', price: 11.55,
            desc: '15-inch steel blade hand saw',
            urlImage: 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
            date: 'May 15, 2016', starRate: 3.7
        },
        {
            id: 10, name: 'Video Game Controller', code: 'GMG-0042', price: 35.95,
            desc: 'Standard two-button video game controller',
            urlImage: 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
            date: 'October 15, 2015', starRate: 4.6
        },
    ];

    constructor() { }

    getProducts() {
        return this.products;
    }

    getOneProduct(id: number) {
        return this.products.find(sp => sp.id === id);
    }

    themSanPham(sp: IProduct) {
        this.products.push(sp);
    }

    capnhatSP(sp: IProduct) {
        let index = this.products.findIndex(p => p.id == sp.id);
        this.products[index] = sp;
    }

    xoaSanPham(id:number) {
        let index = this.products.findIndex(p => p.id == id);
        this.products.splice(index, 1);
    }
}
