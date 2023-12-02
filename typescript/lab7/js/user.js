"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.thoat = exports.dangnhap = exports.admin = void 0;
;
exports.admin = {
    hoten: 'Tèo',
    username: "teo",
    password: '123',
    tuoi: 24,
};
const dangnhap = () => { console.log('Hàm đăng nhập'); };
exports.dangnhap = dangnhap;
const thoat = () => { console.log('Hàm thoát'); };
exports.thoat = thoat;
class User {
    constructor(hoten, username, password, tuoi) {
        this.hoten = hoten;
        this.username = username;
        this.password = password;
        this.tuoi = tuoi;
        this.hoten = hoten;
        this.username = username;
        this.password = password;
        this.tuoi = tuoi;
    }
}
exports.User = User;
