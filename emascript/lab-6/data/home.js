import { CATEGORIES, loadTopbarCategories, PRODUCTS } from "./data.js";

const loadSliderCategories = () => {
    const slider = document.getElementById("sliderCategories");

    CATEGORIES.forEach((item, index) => {
        if (index <= 5) {
            let data = `<div class="col-lg-3"> \
            <div class="categories__item set-bg" style="background-image: url('img/categories/${item.img}');"> \ 
                <h5><a href="#">${item.name}</a></h5> \ 
            </div> \
        </div>`;

        $('.owl-carousel').owlCarousel('add', data).owlCarousel('update')
        } 
    })

    //slider.innerHTML = data;

    //$('.owl-carousel').owlCarousel('add', data).owlCarousel('update');

    // $('.owl-carousel').owlCarousel({
    //     //here you can add the props or events
    // })
}

const FEATURED_DATA = [
    {
        id: 1,
        filterName: "papayaya",
    },
    {
        id: 2,
        filterName: "freshonion",
    },
    {
        id: 4,
        filterName: "vegetables",
    },
    {
        id: 5,
        filterName: "fastfood",
    },
]

const loadFeaturedProducts = () => {
    const featuredControls = document.getElementById("featuredControls");

    let data = `<ul><li class="active" data-filter="*">All</li>`;

    FEATURED_DATA.forEach((item, index) => {
        const result = CATEGORIES.find(obj => {
            return obj.id === item.id;
        });

        data += `<li data-filter=".${item.filterName}">${result.name}</li>`;
    });

    data += `</ul>`;

    featuredControls.innerHTML = data;
}

const loadFeaturedFilter = () => {
    const featuredFilter = document.getElementById("featuredFilter");

    let data = "";

    FEATURED_DATA.forEach((item, index) => {
        const result = PRODUCTS.filter(obj => {
            return obj.idCategory === item.id;
        });

        result.forEach((product) => {
            data += `<div class="col-lg-3 col-md-4 col-sm-6 mix ${item.filterName}">
            <div class="featured__item">
                <div class="featured__item__pic set-bg" style="background-image: url('img/featured/${product.img}');">
                    <ul class="featured__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><a href="#">${product.name}</a></h6>
                    <h5>$${product.price}</h5>
                </div>
            </div>
        </div>`;
        });
    });

    featuredFilter.innerHTML = data;
}

loadTopbarCategories();
loadSliderCategories();
loadFeaturedProducts();
loadFeaturedFilter();