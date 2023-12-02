import { CATEGORIES, PRODUCTS } from "./data.js";
import { loadTopbarCategories, registerATCEvent } from "./event.js";
import { getQueryParams } from "./utils.js";

const loadProductCategories = () => {
    const productCategories = document.getElementById("productCategories");

    let data = "";

    CATEGORIES.forEach((item, index) => {
        if (index < 11) {
            data += `<li><a href="shop-grid.html?idCate=${item.id}">${item.name}</a></li>`;
        }
    })

    productCategories.innerHTML = data;
}

const loadLastestProduct = () => {
    const latestProduct = PRODUCTS.sort((a, b) => b.id - a.id).slice(0, 6);

    const subArrays = Array.from(
      { length: Math.ceil(latestProduct.length / 3) },
      (_, index) => latestProduct.slice(index * 3, index * 3 + 3)
    );

    //console.log(subArrays);

    const lastestProductHtml = document.getElementById("lastestProduct");

    subArrays.forEach((products, index) => {
        let data = ``;
        data += `<div class="latest-prdouct__slider__item">`;

        products.forEach((product, index) => {
            data += `<a href="#" class="latest-product__item">
            <div class="latest-product__item__pic">
                <img src="img/featured/${product.img}" alt="" style="width: 100px; height:100px;">
            </div>
            <div class="latest-product__item__text">
                <h6>${product.name}</h6>
                <span>$${product.price}</span>
            </div>
            </a>`;
        })

        data += `</div>`;

        $('.owl-carousel').owlCarousel('add', data).owlCarousel('update')
    })

    //lastestProductHtml.innerHTML = data;
}

const loadProducts = () => {
    const products = document.getElementById("products");
    const productsCount = document.getElementById("productsCount");

    const query = getQueryParams(document.location.search);

    let productData = PRODUCTS;
    if (query.idCate) {
        productData = PRODUCTS.filter(item => item.idCategory == parseInt(query.idCate));
    }

    let data = ``;

    productData.forEach((product, index) => {
        data += ` <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url('img/featured/${product.img}');">
                <ul class="product__item__pic__hover">
                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="shop-details.html?idProduct=${product.id}"><i class="fa fa-retweet"></i></a></li>
                    <li name="btnAddToCart" data-product-id="${product.id}">
                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${product.name}</a></h6>
                <h5>$${product.price}</h5>
            </div>
        </div>
        </div>`;
    });

    productsCount.innerText = productData.length;
    products.innerHTML = data;
}

loadTopbarCategories();
loadProductCategories();
loadLastestProduct();
loadProducts();
registerATCEvent();