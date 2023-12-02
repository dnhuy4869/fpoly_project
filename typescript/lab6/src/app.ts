// bai 1
enum MAU_XE {
    DEN = "Đen",
    TRANG = "Trắng",
    XANH = "Xanh",
}

function addFieldXeOto(constructor: Function) {
    constructor.prototype.soLuotMua = 30;
    constructor.prototype.ngaySX = "30/3/2023";
}

@addFieldXeOto
class XeOto {
    tenXe: string;
    giaXe: number;
    mauXe: MAU_XE;

    constructor(tenXe: string, giaXe: number, mauXe: MAU_XE) {
        this.tenXe = tenXe;
        this.giaXe = giaXe;
        this.mauXe = mauXe;
    }
}

let oto1 = new XeOto("Mecerdes", 3000, MAU_XE.XANH);
console.log(oto1);

const bai1 = document.getElementById("bai1") as HTMLDivElement;

bai1.innerHTML = `<h1>Bài 1</h1>
<p>Tên xe: ${oto1.tenXe}</p>
<p>Giá xe: $${oto1.giaXe}</p>
<p>Màu xe: ${oto1.mauXe}</p>`;

// bai 2
function theoDoiPass(min: number, max: number) {
    return function (constructor: Object, tenthuoctinh: string) {
        let value: string;

        const gangiatri = function (newVal: string) {
            value = newVal;
            if (newVal.length <= min) {
                console.log(`${tenthuoctinh} ${newVal} ngắn quá,>${min} ký tự`);
            }
            else if (newVal.length > max) {
                console.log(`${tenthuoctinh} ${newVal} dài quá,>${max} ký tự`);
            }
        };

        Object.defineProperty(constructor, tenthuoctinh, {
            set: gangiatri
        });
    }
}

class User {
    username: string;
    @theoDoiPass(7, 20) password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

const user1 = new User("username1", "pass1");
console.log(user1);

const bai2 = document.getElementById("bai2") as HTMLDivElement;

bai2.innerHTML = `<h1>Bài 2</h1>
<p>Username: ${user1.username}</p>
<p>Password: $${user1.password}</p>`;

// bai 3

function hienKetQuaDecor(min: number, max: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            return 0;
        }
    };
}

function layHocLucDecor(newHocLuc: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            return newHocLuc;
        }
    };
}


class SinhVienThi {
    diem: number;

    constructor(diem: number) {
        this.diem = diem;
    }

    @hienKetQuaDecor(0, 10)
    hienKetQua() {
        return this.diem;
    }

    kiemtradiem(min: number, max: number) {
        if (this.diem < min || this.diem > max) {
            console.log("Điểm không hợp lệ");
        }

        if (this.diem > 5) {
            console.log("Đạt");
        }
        else {
            console.log("Không đạt");
        }
    }

    @layHocLucDecor("Khá")
    layHocLuc() {
        return "Giỏi";
    }
}

const sv1 = new SinhVienThi(6);
console.log(sv1.hienKetQua());
sv1.kiemtradiem(0, 10);
console.log(sv1.layHocLuc());

// bai 4
function addUserStatus(st: number) {
    return function (constructor: Function) {
        constructor.prototype.status = st;
    }
}

@addUserStatus(4)
class User1 { 
    constructor(public name: string) { } 
}

let u1 = new User1('Lượm'); 
console.log(u1);