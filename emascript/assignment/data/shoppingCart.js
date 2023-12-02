import { CATEGORIES, PRODUCTS } from "./data.js";
import { registerATCEvent, loadTopbarCategories } from "./event.js";

const updateCartTotal = () => {
    let cartTotal = document.getElementById("cartTotal");

    let subTotalPrice = 0;
    let totalPrice = 0;

    if (!localStorage.getItem("cart")) {
        subTotalPrice = 0;
        totalPrice = 0;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.forEach((item, index) => {
        subTotalPrice += item.price * item.count;
    })

    totalPrice = subTotalPrice;

    cartTotal.innerHTML = `<li>Subtotal <span>$${subTotalPrice}</span></li>
                            <li>Total <span>$${totalPrice}</span></li>`;
}

const updateCart = () => {
    let cartItems = document.getElementById("cartItems");

    if (!localStorage.getItem("cart")) {
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    let data = ``;

    cart.forEach((item, index) => {
        data += `<tr>
        <td class="shoping__cart__item">
            <img src="img/featured/${item.img}" style="width: 100px;" alt="">
            <h5>${item.name}</h5>
        </td>
        <td class="shoping__cart__price">
            $${item.price}
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input type="number" min="1" max="20" name="spCount" data-product-id="${item.id}" value="${item.count}">
                </div>
            </div>
        </td>
        <td class="shoping__cart__total">
            $${item.price * item.count}
        </td>
        <td class="shoping__cart__item__close" name="btnDeleteSp" data-product-id="${item.id}">
            <span class="icon_close"></span>
        </td>
        </tr>`;
    })

    cartItems.innerHTML = data;

    updateCartTotal();
    registerCartEvent();
}

const registerCartEvent = () => {
    const inputs = document.getElementsByName("spCount");

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
  
        input.addEventListener('change', function (event) {
            let cart = JSON.parse(localStorage.getItem("cart"));

            const index = cart.findIndex(e => e.id === parseInt(event.currentTarget.dataset.productId));
            if (index === -1) {
                return;
            }

            //console.log(event.target.value);

            cart[index].count = parseInt(event.target.value);

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCart();
        });
    }

    const buttons = document.getElementsByName("btnDeleteSp");

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
  
        button.addEventListener('click', function (event) {
            let cart = JSON.parse(localStorage.getItem("cart"));

            const index = cart.findIndex(e => e.id === parseInt(event.currentTarget.dataset.productId));
            if (index === -1) {
                return;
            }

            //console.log(event.target.value);

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCart();
        });
    }
}

loadTopbarCategories();
updateCart();