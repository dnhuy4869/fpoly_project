import { CATEGORIES, PRODUCTS, getProductById } from "./data.js";

export const loadTopbarCategories = () => {
    const topbar = document.getElementById("topbarCategories");

    let data = "";

    CATEGORIES.forEach((item, index) => {
        if (index < 11) {
            data += `<li><a href="shop-grid.html?idCate=${item.id}">${item.name}</a></li>`;
        } 
    })

    topbar.innerHTML = data;
}

const addProductToCart = (productId) => {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    const index = cart.findIndex(e => e.id === parseInt(productId));
    if (index !== -1) {
        //console.log("already in cart");

        cart[index].count++;
        //console.log(cart[index]);
    }
    else {
        //console.log("not in cart");

        const product = getProductById(parseInt(productId));
        const productInCart = {count: 1, ...product};

        //console.log(productInCart);
        cart.push(productInCart);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

export const registerATCEvent = () => {
    let buttons = document.getElementsByName("btnAddToCart");

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
  
        button.addEventListener('click', function (event) {
            event.preventDefault();
            addProductToCart(event.currentTarget.dataset.productId);
        });
    }
}