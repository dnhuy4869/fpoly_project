"use strict";
const app = document.getElementById("app");
let cart = [
    { id: 1, tensp: "Bún xào", gia: 40000, soluong: 1, hinh: "bunxao.jpg" },
    { id: 2, tensp: "Hủ tiếu", gia: 30000, soluong: 2, hinh: "bunxao.jpg" },
    { id: 3, tensp: "Bánh canh", gia: 35000, soluong: 1, hinh: "bunxao.jpg" },
    { id: 4, tensp: "Mì xào giòn", gia: 32000, soluong: 4, hinh: "bunxao.jpg" },
    { id: 5, tensp: "Soup nấm", gia: 25000, soluong: 3, hinh: "bunxao.jpg" },
    { id: 6, tensp: "Nấm xào xả", gia: 45000, soluong: 2, hinh: "bunxao.jpg" },
];
let htmlCart = `<div id="cart">`;
htmlCart += `<p>
        <span><b>Tên SP</b></span> 
        <span><b>Giá</b></span>
        <span><b>Số lượng</b></span>
        <span><b>Thành tiền</b></span>
    </p>`;
cart.forEach((cart) => {
    htmlCart += `<p>
        <span>${cart.tensp}</span> 
        <span>${cart.gia}</span> 
        <span>${cart.soluong}</span> 
        <span>${Number(cart.soluong) * Number(cart.gia)} VND</span> 
    </p>`;
});
htmlCart += `</div>`;
app.innerHTML += htmlCart;
;
let tt;
function cong(so1, so2) {
    return Number(so1) + Number(so2);
}
function tru(so1, so2) {
    return Number(so1) - Number(so2);
}
function nhan(so1, so2) {
    return Number(so1) * Number(so2);
}
function chia(so1, so2) {
    return Number(so1) / Number(so2);
}
let frm = document.forms[0];
frm.btn.onclick = () => {
    let a = Number(frm.a.value);
    let b = Number(frm.b.value);
    switch (frm.pheptoan.value) {
        case "1": {
            tt = cong;
            break;
        }
        case "2": {
            tt = tru;
            break;
        }
        case "3": {
            tt = nhan;
            break;
        }
        case "4": {
            tt = chia;
            break;
        }
    }
    let kq = tt(a, b);
    console.log(a, b, kq);
};
class HinhChuNhat {
    constructor() {
        this.mota = "Các hàm liên quan đến hình chữ nhật, hình vuông";
    }
}
HinhChuNhat.dientich = (dai, rong) => Number(dai) * Number(rong);
HinhChuNhat.chuvi = (dai, rong) => (Number(dai) + Number(rong)) * 2;
class HinhVuong extends HinhChuNhat {
    constructor(c) {
        super();
        this.canh = 0;
        this.canh = c;
    }
}
let hv = new HinhVuong(3);
let hcn = new HinhChuNhat();
console.log(hv, hcn);
let dt1 = HinhChuNhat.dientich(3, 3);
console.log(dt1);
