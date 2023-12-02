var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { layHS } from "./module.js";
let arrHocSinh;
const loadTableData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("http://localhost:3000/hocsinh")
        .then(res => res.json())
        .then(data => {
        arrHocSinh = data;
        console.log(arrHocSinh);
    })
        .catch(e => console.log(e));
    const tblData = document.getElementById("tblData");
    let txtData = ``;
    arrHocSinh.forEach((hs, index) => {
        txtData += `<tr>
        <th scope="row">${index}</th>
        <td>${hs.ten}</td>
        <td>${hs.toan}</td>
        <td>${hs.van}</td>
        <td>${(hs.toan + hs.van) / 2}</td>
      </tr>`;
    });
    tblData.innerHTML = txtData;
});
loadTableData();
var PHONG_BAN;
(function (PHONG_BAN) {
    PHONG_BAN[PHONG_BAN["KY_THUAT"] = 0] = "KY_THUAT";
    PHONG_BAN[PHONG_BAN["KE_TOAN"] = 1] = "KE_TOAN";
    PHONG_BAN[PHONG_BAN["KINH_DOANH"] = 2] = "KINH_DOANH";
    PHONG_BAN[PHONG_BAN["NGHIEP_VU"] = 3] = "NGHIEP_VU";
})(PHONG_BAN || (PHONG_BAN = {}));
const arrNhanVien = [
    {
        idnv: 1,
        hoten: "Huy",
        namsinh: 2002,
        phongban: PHONG_BAN.KY_THUAT,
        sonamct: 3
    },
    {
        idnv: 2,
        hoten: "Huy",
        namsinh: 2002,
        phongban: PHONG_BAN.KY_THUAT,
        sonamct: 3
    },
    {
        idnv: 3,
        hoten: "Huy",
        namsinh: 2002,
        phongban: PHONG_BAN.KY_THUAT,
        sonamct: 3
    },
    {
        idnv: 4,
        hoten: "Huy",
        namsinh: 2002,
        phongban: PHONG_BAN.KY_THUAT,
        sonamct: 3
    },
    {
        idnv: 5,
        hoten: "Huy",
        namsinh: 2002,
        phongban: PHONG_BAN.KY_THUAT,
        sonamct: 3
    },
];
console.log(arrNhanVien);
console.log(layHS(1));
