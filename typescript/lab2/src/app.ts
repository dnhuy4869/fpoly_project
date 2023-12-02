enum MAUSP
{
    DO,
    XANH,
    DEN,
    TRANG,
}

type sanpham = {
    id:number,
    ten:string,
    gia:number,
    hinh:string,
    mau: MAUSP,
}

let sp1:sanpham = {
    id: 1,
    ten: "Samsung Galaxy S20",
    gia: 1039000,
    hinh: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra6-1.jpg",
    mau: MAUSP.DEN,
}

let htmldt = `
<div class="dt">
    <img src="${sp1.hinh}" align="left" />
    <h4>Ten san pham: ${sp1.ten}</h4>
    <p>Gia tien: ${sp1.gia}</p>
    <p>Mau sac: ${sp1.mau}</p>
</div>
`;

const app = document.getElementById("app") as HTMLInputElement;
app.innerHTML += htmldt;

type spInCart = [
    number, string, number, number, string
];

let cart:spInCart[];

cart = [
    [7, "Thuat Xu The Cua Nguoi Xua", 80000, 2, "xuthe.jpg"],
    [2, "Song Nhu Nhan Duyen", 96000, 1, "songnd.jpg"],
    [3, "Con Duong Hanh Phuc", 96000, 1, "songnd.jpg"],
    [9, "Gia Tri Cua Su Tu Te", 96000, 1, "songnd.jpg"],
];

cart.push([5, "Canh Nhe Uu Phien", 82000, 1, "nheganh.jpg"]);
console.log(cart);

let htmlCart = `<div id="cart">`;
cart.forEach((cart) => {
    htmlCart += `<p><span>${cart[1]}</span> <span>${cart[2]}</span> <span>${cart[3]}</span></p>`;
});

htmlCart += `</div>`;

app.innerHTML += htmlCart;

type hinhanh = {
    id: number,
    dorong: number,
    docao: number,
    diachi: string,
    tacgia: string,
    mota: string,
}

let apiKey = "L3LBgX8oUIOMCWfgbSfRafnr6wiWvBERjxXwLsjDPSDkRFEp34tOo6KR";
let tuKhoa = "People";
let url = `https://api.pexels.com/v1/search?query=${tuKhoa}`;
let htmlAnhDep = `<div id="anhdep" >`;

fetch(url, { headers: { Authorization: apiKey } })
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);

    data.photos.forEach((hinh:any) => {
        let h:hinhanh = {
            id: hinh.id,
            dorong: hinh.width,
            docao: hinh.height,
            diachi: hinh.src.landscape,
            tacgia: hinh.photographer,
            mota: hinh.alt,
        }

        htmlAnhDep += `<div class="box"> 
                        <img src="${h.diachi}" alt="${h.mota}" width="300" />
                        <h4>Tac gia: ${h.tacgia}</h4>
                        <p>Rong: ${h.dorong} Cao: ${h.docao}</p>
                        </div>`;
    })

    htmlAnhDep += "</div>";
    app.innerHTML += htmlAnhDep;
})


