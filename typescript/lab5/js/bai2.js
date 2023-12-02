"use strict";
var MAULAPTOP;
(function (MAULAPTOP) {
    MAULAPTOP["DEN"] = "\u0110en";
    MAULAPTOP["TRANG"] = "Tr\u1EAFng";
    MAULAPTOP["XAM"] = "X\u00E1m";
})(MAULAPTOP || (MAULAPTOP = {}));
const listlaptop = [
    { idLT: 1, tenLT: 'Lenovo', gia: 2000, mau: MAULAPTOP.DEN, RAM: '8 GB', CPU: 'i1', oCung: '1 GB', canNang: 1 },
    { idLT: 2, tenLT: 'ASUS', gia: 6000, mau: MAULAPTOP.TRANG, RAM: '2 GB', CPU: 'i2', oCung: '2 GB', canNang: 3 },
    { idLT: 3, tenLT: 'Dell', gia: 8000, mau: MAULAPTOP.XAM, RAM: '4 GB', CPU: 'i4', oCung: '3 GB', canNang: 2 },
];
console.log(listlaptop);
const sanpham2 = document.getElementById("sanpham");
let htmlSp = ``;
listlaptop.forEach((sp) => {
    htmlSp += ` <div class="card">
    <div class="card-desc">
        <h2>${sp.tenLT}</h2>
        <p>Giá: $${sp.gia}</p>
        <p>Màu: ${sp.mau}</p>
        <p>CPU: ${sp.CPU}</p>
        <p>RAM: ${sp.RAM}</p>
        <p>Ổ cứng: ${sp.oCung}</p>
        <p>Cân nặng: ${sp.canNang}kg</p>
    </div>
</div>`;
});
sanpham2.innerHTML = htmlSp;
