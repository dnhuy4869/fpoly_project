class SinhVien
{
    constructor(ten, masv, diem) {
        this.ten = ten;
        this.masv = masv;
        this.diem = parseFloat(diem);
    }

    get getTen() {
        return this.ten;
    }

    set setTen(ten) {
        this.ten = ten;
    }

    xuat() {
        console.log(this.ten);
        console.log(this.masv);
        console.log(this.diem);
    }
}

const sv = new SinhVien('Huy', "120", 8);
sv.xuat();