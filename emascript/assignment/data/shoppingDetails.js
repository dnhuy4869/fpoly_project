import { getCategoryById, getProductById, PRODUCTS } from "./data.js";
import { loadTopbarCategories, registerATCEvent } from "./event.js";
import { getQueryParams } from "./utils.js";


const loadBreadcrumb = () => {
    const breadcrumb = document.getElementById("breadcrumb");

    const query = getQueryParams(document.location.search);
    const product = getProductById(parseInt(query.idProduct));
    const category = getCategoryById(product.idCategory);
    
    //console.log(category);

    let data = `<h2>${product.name}</h2>
    <div class="breadcrumb__option">
        <a href="./index.html">Home</a>
        <a href="./index.html">${category.name}</a>
        <span>${product.name}</span>
    </div>`;

    breadcrumb.innerHTML = data;
}

const loadProductImg = () => {
    const productImg = document.getElementById("productImg");

    const query = getQueryParams(document.location.search);
    const product = getProductById(parseInt(query.idProduct));

    let data = `<img class="product__details__pic__item--large"
    src="img/featured/${product.img}" alt="">`;

    productImg.innerHTML = data;
}

const loadProductDetails = () => {
    const productDetails = document.getElementById("productDetails");

    const query = getQueryParams(document.location.search);
    const product = getProductById(parseInt(query.idProduct));

    let data = `<h3>${product.name}</h3>
    <div class="product__details__rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
        <span>(18 reviews)</span>
    </div>
    <div class="product__details__price">$${product.price}</div>
    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
        quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
    <a name="btnAddToCart" data-product-id="${product.id}" href="#" class="primary-btn">ADD TO CARD</a>
    <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
    <ul>
        <li><b>Availability</b> <span>In Stock</span></li>
        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
        <li><b>Weight</b> <span>0.5 kg</span></li>
        <li><b>Share on</b>
            <div class="share">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
            </div>
        </li>
    </ul>`;

    productDetails.innerHTML = data;
}

const loadRelatedProducts = () => {
    const relatedProducts = document.getElementById("relatedProducts");

    const query = getQueryParams(document.location.search);
    const product = getProductById(parseInt(query.idProduct));

    const relateData = PRODUCTS.filter(item => item.idCategory == product.idCategory);

    let data = ``;
    relateData.forEach((product, index) => {
        data += `<div class="col-lg-3 col-md-4 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url('img/featured/${product.img}');">
                <ul class="product__item__pic__hover">
                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${product.name}</a></h6>
                <h5>$${product.price}</h5>
            </div>
        </div>
    </div>`;
    });

    relatedProducts.innerHTML = data;
}

loadTopbarCategories();
loadBreadcrumb();
loadProductImg();
loadProductDetails();
loadRelatedProducts();
registerATCEvent();