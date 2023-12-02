const thuTrongTuan = (t = -1) => {
    switch (t) {
        case 0:
            return "Chủ Nhật";
            break;
        case 1:
            return "Thứ Hai";
            break;
        case 2:
            return "Thứ Ba";
            break;
        case 3:
            return "Thứ Tư";
            break;
        case 4:
            return "Thứ Năm";
            break;
        case 5:
            return "Thứ Sáu";
            break;
        case 6:
            return "Thứ Bảy";
            break;
    }
    return "";
};
let t = new Date().getDay();
let thu = thuTrongTuan(t);
console.log(thu);
const xoaKyTuDacBiet = (str) => {
    str = str.replace(/[^a-z0-9- ]/ig, m => '');
    return str;
};
let chuoi = `Hay@#; 'Y___"""eu" !N!+h*@*a?u %D&i`;
chuoi = xoaKyTuDacBiet(chuoi);
console.log(chuoi);
let arr_hinh;
arr_hinh = [
    { id: 1, ten: 'Hoa lan', url: 'lan.jpg', mota: 'Lan có mùi thơm dễ chịu, sang trọng, tao nhã' },
    { id: 2, ten: 'Anh đào', url: 'anhdao.jpg', mota: 'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết' },
    { id: 3, ten: 'Thiên điểu', url: 'thiendieu.jpg', mota: 'Hoa có dạng chú chim đầy màu sắc' },
    { id: 4, ten: 'Hoa tigon', url: 'tigon.jpg', mota: 'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.' },
    { id: 5, ten: 'Thược dược', url: 'thuocduoc.jpg', mota: 'Hoa có nhiều màu, đẹp ngất ngây lòng người,' },
    { id: 6, ten: 'Cẩm tú cầu', url: 'camtucau.jpg', mota: 'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm' },
    { id: 7, ten: 'Hoa lan', url: 'lan.jpg', mota: 'Lan có mùi thơm dễ chịu, sang trọng, tao nhã' },
    { id: 8, ten: 'Anh đào', url: 'anhdao.jpg', mota: 'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết' },
    { id: 9, ten: 'Thiên điểu', url: 'thiendieu.jpg', mota: 'Hoa có dạng chú chim đầy màu sắc' },
    { id: 10, ten: 'Hoa tigon', url: 'tigon.jpg', mota: 'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.' },
    { id: 11, ten: 'Thược dược', url: 'thuocduoc.jpg', mota: 'Hoa có nhiều màu, đẹp ngất ngây lòng người,' },
    { id: 12, ten: 'Cẩm tú cầu', url: 'camtucau.jpg', mota: 'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm' },
];
const divHinhDep = document.getElementById("divhinhdep");
let hien1hinh = (h) => {
    divHinhDep.innerHTML += `
        <div class="hinh">
            <img src="/public/images/${h.url}" title='${h.mota}' />
        </div>
    `;
};
const arr_hinh1 = arr_hinh.sort((a, b) => 0.5 - Math.random());
arr_hinh1.forEach(hien1hinh);
const mainDiv = document.getElementById("divhinhdep");
const arrdivhinh = [];
for (var i = 0; i < mainDiv.children.length; i++) {
    arrdivhinh.push(mainDiv.children[i]);
}
arrdivhinh.forEach((div) => {
    div.children.item(0).className = 'an';
    let img = div.children.item(0);
    div.onclick = () => {
        img.className = (img.className == 'an') ? 'hien' : 'an';
    };
});
