import { layHS } from "./module";

type HocSinh = {
    id: number;
    ten: string;
    toan: number;
    van: number;
}

let arrHocSinh: HocSinh[];

const loadTableData = async () => {
    await fetch("http://localhost:3000/hocsinh")
        .then(res => res.json())
        .then(data => {
            arrHocSinh = data as HocSinh[];
            console.log(arrHocSinh);
        })
        .catch(e => console.log(e))

    const tblData = document.getElementById("tblData") as HTMLElement;
    let txtData: string = ``;

    arrHocSinh.forEach((hs: HocSinh, index) => {
        txtData += `<tr>
        <th scope="row">${index}</th>
        <td>${hs.ten}</td>
        <td>${hs.toan}</td>
        <td>${hs.van}</td>
        <td>${(hs.toan + hs.van) / 2}</td>
      </tr>`;
    });

    tblData.innerHTML = txtData;
}

loadTableData();

// cau 2

enum PHONG_BAN
{
    KY_THUAT,
    KE_TOAN,
    KINH_DOANH,
    NGHIEP_VU,
}

type NhanVien = {
    idnv: number;
    hoten: string;
    namsinh: number;
}

type ThongTin = {
    idnv: number;
    phongban: PHONG_BAN;
    sonamct: number;
}

type ThongTinNhanVien = ThongTin & NhanVien;

const arrNhanVien: ThongTinNhanVien[] = [
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
]

console.log(arrNhanVien);

// cau 3
console.log(layHS(1));