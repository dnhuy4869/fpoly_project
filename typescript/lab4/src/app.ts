const app = document.getElementById("app") as HTMLInputElement;

interface ICart {
    id: Number;
    tensp: String;
    gia: Number;
    soluong: Number;
    hinh?: String;
}

let cart:ICart[] = [
    { id: 1, tensp: "Bún xào", gia: 40000, soluong: 1, hinh: "bunxao.jpg"},
    { id: 2, tensp: "Hủ tiếu", gia: 30000, soluong: 2, hinh: "bunxao.jpg"},
    { id: 3, tensp: "Bánh canh", gia: 35000, soluong: 1, hinh: "bunxao.jpg"},
    { id: 4, tensp: "Mì xào giòn", gia: 32000, soluong: 4, hinh: "bunxao.jpg"},
    { id: 5, tensp: "Soup nấm", gia: 25000, soluong: 3, hinh: "bunxao.jpg"},
    { id: 6, tensp: "Nấm xào xả", gia: 45000, soluong: 2, hinh: "bunxao.jpg"},
]

let htmlCart = `<div id="cart">`;
htmlCart += `<p>
        <span><b>Tên SP</b></span> 
        <span><b>Giá</b></span>
        <span><b>Số lượng</b></span>
        <span><b>Thành tiền</b></span>
    </p>`
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

interface tinhtoan {
    (a: Number, b:Number): Number;
};

let tt:tinhtoan;
function cong(so1:Number, so2:Number):Number {
    return Number(so1) + Number(so2);
}

function tru(so1:Number, so2:Number):Number {
    return Number(so1) - Number(so2);
}

function nhan(so1:Number, so2:Number):Number {
    return Number(so1) * Number(so2);
}

function chia(so1:Number, so2:Number):number {
    return Number(so1) / Number(so2);
}

let frm = document.forms[0];
frm.btn.onclick = () => {
    let a:number = Number(frm.a.value);
    let b:number = Number(frm.b.value);

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
}

interface IHinhChuNhat {
    mota: String;
}

class HinhChuNhat implements IHinhChuNhat {
    public mota: String = "Các hàm liên quan đến hình chữ nhật, hình vuông";

    static dientich = (dai:Number, rong:Number): Number => Number(dai) * Number(rong);
    static chuvi = (dai:Number, rong:Number): Number => (Number(dai) + Number(rong)) * 2;
}

class HinhVuong extends HinhChuNhat {
    private canh:Number = 0;
    constructor(c:Number) {
        super();
        this.canh = c;
    }
}

let hv = new HinhVuong(3);
let hcn = new HinhChuNhat();

console.log(hv, hcn);

let dt1 = HinhChuNhat.dientich(3, 3);
console.log(dt1);

