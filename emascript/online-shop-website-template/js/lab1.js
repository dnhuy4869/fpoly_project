const CATEGORIRES = [
    {
        "name": "Shirts",
        "productCount": 354,
        "img": "cat-1.jpg",
    },
    {
        "name": "Jeans",
        "productCount": 354,
        "img": "cat-2.jpg",
    },
    {
        "name": "Swimwear",
        "productCount": 354,
        "img": "cat-3.jpg",
    },
    {
        "name": "Sleepwear",
        "productCount": 354,
        "img": "cat-4.jpg",
    },
    {
        "name": "Sportswear",
        "productCount": 354,
        "img": "cat-3.jpg",
    },
    {
        "name": "Jumpsuits",
        "productCount": 354,
        "img": "cat-4.jpg",
    },
    {
        "name": "Blazers",
        "productCount": 354,
        "img": "cat-2.jpg",
    },
    {
        "name": "Jackets",
        "productCount": 354,
        "img": "cat-1.jpg",
    },
    {
        "name": "Shoes",
        "productCount": 354,
        "img": "cat-2.jpg",
    },
    {
        "name": "Sportswear",
        "productCount": 354,
        "img": "cat-3.jpg",
    },
];

const CAROUSELS = [
    {
        "img": "carousel-1.jpg",
        "title": "Men Fashion",
        "subTitle": "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
        "isActive": true,
    },
    {
        "img": "carousel-2.jpg",
        "title": "Women Fashion",
        "subTitle": "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
        "isActive": false,
    },
    {
        "img": "carousel-3.jpg",
        "title": "Kids Fashion",
        "subTitle": "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
        "isActive": false,
    },
]

const PRODUCTS = [
    {
        img: "product-1.jpg",
        name: "Product Name Goes Here",
        price: "123.00",
        discountPrice: "123.00",
        star: 5,
        starCount: 99,
    },
    {
        img: "product-1.jpg",
        name: "Product Name Goes Here",
        price: "123.00",
        discountPrice: "123.00",
        star: 5,
        starCount: 99,
    },
    {
        img: "product-1.jpg",
        name: "Product Name Goes Here",
        price: "123.00",
        discountPrice: "123.00",
        star: 5,
        starCount: 99,
    },
    {
        img: "product-1.jpg",
        name: "Product Name Goes Here",
        price: "123.00",
        discountPrice: "123.00",
        star: 5,
        starCount: 99,
    },
    {
        img: "product-1.jpg",
        name: "Product Name Goes Here",
        price: "123.00",
        discountPrice: "123.00",
        star: 5,
        starCount: 99,
    },
];

const loadFeaturedProducts = () => {
    const products = document.getElementById("featuredProducts");

    let productData = "";
    jsonData.featuredProducts.forEach((product, index) => {
        let newProduct = `<div class="col-lg-3 col-md-4 col-sm-6 pb-1"> \
        <div class="product-item bg-light mb-4"> \
            <div class="product-img position-relative overflow-hidden"> \
                <img class="img-fluid w-100" src="img/${product.img}" alt=""> \
                <div class="product-action"> \
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a> \
                    <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a> \
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a> \
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a> \
                </div> \
            </div> \
            <div class="text-center py-4"> \
                <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a> \
                <div class="d-flex align-items-center justify-content-center mt-2"> \
                    <h5>$${product.price}</h5><h6 class="text-muted ml-2"><del>$${product.discountPrice}</del></h6> \
                </div> \
                <div class="d-flex align-items-center justify-content-center mb-1">`;

        for (var i = 0; i < product.star; i++) {
            newProduct += '<small class="fa fa-star text-primary mr-1"></small>';
        }

        newProduct += `<small>(${product.starCount})</small> \
                        </div> \
                        </div> \
                        </div> \
                        </div>`;

        productData += newProduct;
    })

    products.innerHTML = productData;
}

const loadCategoryTopbar = () => {
    const categoryTopbar = document.getElementById("categoryTopbar");

    let categoriesData = "";

    var count = 0;
    CATEGORIRES.forEach((category, index) => {
        if (count >= 10) {
            return;
        }

        let newData = "";

        newData += `<a href="" class="nav-item nav-link">${category.name}</a>`;

        categoriesData += newData;

        count++;
    })

    categoryTopbar.innerHTML = categoriesData;
}

const loadCategoryMain = () => {
    const categoryMain = document.getElementById("categoryMain");

    let categoriesData = "";

    var count = 0;
    CATEGORIRES.forEach((category, index) => {
        if (count >= 8) {
            return;
        }

        let newData = "";

        newData += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a class="text-decoration-none" href="">
            <div class="cat-item d-flex align-items-center mb-4">
                <div class="overflow-hidden" style="width: 100px; height: 100px;">
                    <img class="img-fluid" src="img/${category.img}" alt="">
                </div>
                <div class="flex-fill pl-3">
                    <h6>${category.name}</h6>
                    <small class="text-body">${category.productCount} Products</small>
                </div>
            </div>
        </a>
    </div>`;

        categoriesData += newData;

        count++;
    })

    categoryMain.innerHTML = categoriesData;
}

const loadCarousel = () => {
    const headerCarousel = document.getElementById("header-carousel");

    let carouselData = "";

    carouselData += `<ol class="carousel-indicators">`;

    carouselData += CAROUSELS.map((item, index) => {
        let className = item.isActive ? "active" : "";
        return `<li data-target="#header-carousel" data-slide-to="${index}" class="${className}"></li>`;
    }).join('');

    carouselData += `</ol>`;

    carouselData += `<div class="carousel-inner">`;

    carouselData += CAROUSELS.map((item, index) => {
        let className = item.isActive ? "active" : "";
        return `<div class="carousel-item position-relative ${className}" style="height: 430px;">
        <img class="position-absolute w-100 h-100" src="img/${item.img}" style="object-fit: cover;">
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style="max-width: 700px;">
                <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">${item.title}</h1>
                <p class="mx-md-5 px-5 animate__animated animate__bounceIn">${item.subTitle}</p>
                <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
            </div>
        </div>
    </div>`;
    }).join('');

    carouselData += `</div>`;

    headerCarousel.innerHTML = carouselData;
}

(() => {
    loadCategoryTopbar();
    loadCategoryMain();
    loadCarousel();
    //loadFeaturedProducts();
})()