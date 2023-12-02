var MAUSP;
(function (MAUSP) {
    MAUSP[MAUSP["DO"] = 0] = "DO";
    MAUSP[MAUSP["XANH"] = 1] = "XANH";
    MAUSP[MAUSP["DEN"] = 2] = "DEN";
    MAUSP[MAUSP["TRANG"] = 3] = "TRANG";
})(MAUSP || (MAUSP = {}));
var sp1 = {
    id: 1,
    ten: "Samsung Galaxy S20",
    gia: 1039000,
    hinh: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra6-1.jpg",
    mau: MAUSP.DEN
};
var htmldt = "\n<div class=\"dt\">\n    <img src=\"".concat(sp1.hinh, "\" align=\"left\" />\n    <h4>Ten san pham: ").concat(sp1.ten, "</h4>\n    <p>Gia tien: ").concat(sp1.gia, "</p>\n    <p>Mau sac: ").concat(sp1.mau, "</p>\n</div>\n");
var app = document.getElementById("app");
app.innerHTML += htmldt;
var cart;
cart = [
    [7, "Thuat Xu The Cua Nguoi Xua", 80000, 2, "xuthe.jpg"],
    [2, "Song Nhu Nhan Duyen", 96000, 1, "songnd.jpg"],
    [3, "Con Duong Hanh Phuc", 96000, 1, "songnd.jpg"],
    [9, "Gia Tri Cua Su Tu Te", 96000, 1, "songnd.jpg"],
];
cart.push([5, "Canh Nhe Uu Phien", 82000, 1, "nheganh.jpg"]);
console.log(cart);
var htmlCart = "<div id=\"cart\">";
cart.forEach(function (cart) {
    htmlCart += "<p><span>".concat(cart[1], "</span> <span>").concat(cart[2], "</span> <span>").concat(cart[3], "</span></p>");
});
htmlCart += "</div>";
app.innerHTML += htmlCart;
var apiKey = "L3LBgX8oUIOMCWfgbSfRafnr6wiWvBERjxXwLsjDPSDkRFEp34tOo6KR";
var tuKhoa = "People";
var url = "https://api.pexels.com/v1/search?query=".concat(tuKhoa);
var htmlAnhDep = "<div id=\"anhdep\" >";
fetch(url, { headers: { Authorization: apiKey } })
    .then(function (res) {
    return res.json();
})
    .then(function (data) {
    console.log(data);
    data.photos.forEach(function (hinh) {
        var h = {
            id: hinh.id,
            dorong: hinh.width,
            docao: hinh.height,
            diachi: hinh.src.landscape,
            tacgia: hinh.photographer,
            mota: hinh.alt
        };
        htmlAnhDep += "<div class=\"box\"> \n                        <img src=\"".concat(h.diachi, "\" alt=\"").concat(h.mota, "\" width=\"300\" />\n                        <h4>Tac gia: ").concat(h.tacgia, "</h4>\n                        <p>Rong: ").concat(h.dorong, " Cao: ").concat(h.docao, "</p>\n                        </div>");
    });
    htmlAnhDep += "</div>";
    app.innerHTML += htmlAnhDep;
});
