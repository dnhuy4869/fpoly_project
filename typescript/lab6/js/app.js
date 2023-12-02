"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// bai 1
var MAU_XE;
(function (MAU_XE) {
    MAU_XE["DEN"] = "\u0110en";
    MAU_XE["TRANG"] = "Tr\u1EAFng";
    MAU_XE["XANH"] = "Xanh";
})(MAU_XE || (MAU_XE = {}));
function addFieldXeOto(constructor) {
    constructor.prototype.soLuotMua = 30;
    constructor.prototype.ngaySX = "30/3/2023";
}
let XeOto = class XeOto {
    constructor(tenXe, giaXe, mauXe) {
        this.tenXe = tenXe;
        this.giaXe = giaXe;
        this.mauXe = mauXe;
    }
};
XeOto = __decorate([
    addFieldXeOto
], XeOto);
let oto1 = new XeOto("Mecerdes", 3000, MAU_XE.XANH);
console.log(oto1);
const bai1 = document.getElementById("bai1");
bai1.innerHTML = `<h1>Bài 1</h1>
<p>Tên xe: ${oto1.tenXe}</p>
<p>Giá xe: $${oto1.giaXe}</p>
<p>Màu xe: ${oto1.mauXe}</p>`;
// bai 2
function theoDoiPass(min, max) {
    return function (constructor, tenthuoctinh) {
        let value;
        const gangiatri = function (newVal) {
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
    };
}
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    theoDoiPass(7, 20)
], User.prototype, "password", void 0);
const user1 = new User("username1", "pass1");
console.log(user1);
const bai2 = document.getElementById("bai2");
bai2.innerHTML = `<h1>Bài 2</h1>
<p>Username: ${user1.username}</p>
<p>Password: $${user1.password}</p>`;
// bai 3
function hienKetQuaDecor(min, max) {
    return function (target, propertyKey, descriptor) {
        descriptor.value = () => {
            return 0;
        };
    };
}
function layHocLucDecor(newHocLuc) {
    return function (target, propertyKey, descriptor) {
        descriptor.value = () => {
            return newHocLuc;
        };
    };
}
class SinhVienThi {
    constructor(diem) {
        this.diem = diem;
    }
    hienKetQua() {
        return this.diem;
    }
    kiemtradiem(min, max) {
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
    layHocLuc() {
        return "Giỏi";
    }
}
__decorate([
    hienKetQuaDecor(0, 10)
], SinhVienThi.prototype, "hienKetQua", null);
__decorate([
    layHocLucDecor("Khá")
], SinhVienThi.prototype, "layHocLuc", null);
const sv1 = new SinhVienThi(6);
console.log(sv1.hienKetQua());
sv1.kiemtradiem(0, 10);
console.log(sv1.layHocLuc());
// bai 4
function addUserStatus(st) {
    return function (constructor) {
        constructor.prototype.status = st;
    };
}
let User1 = class User1 {
    constructor(name) {
        this.name = name;
    }
};
User1 = __decorate([
    addUserStatus(4)
], User1);
let u1 = new User1('Lượm');
console.log(u1);
