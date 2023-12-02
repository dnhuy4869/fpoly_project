import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';
import { DuAn } from './du-an';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectDataService {

    constructor(private httpClient: HttpClient) {
        // this._listNhanVien = this.listNhanVien;
        // this._listDuAn = this.listDuAn;
        // this._listTask = this.listTask;
    }

    listNhanVien: NhanVien[] = [
        { id: 1, ho: 'Nguyễn Bá', ten: 'Đạo', ngaysinh: '2001-01-03', phai: true, khuvuc: 'Bắc' },
        { id: 2, ho: 'Phạm Kỷ', ten: 'Luật', ngaysinh: '2001-05-06', phai: true, khuvuc: 'Bắc' },
        { id: 3, ho: 'Cao Thị Chót', ten: 'Vót', ngaysinh: '2002-08-19', phai: false, khuvuc: 'Nam' },
        { id: 4, ho: 'Mai Thanh', ten: 'Toán', ngaysinh: '2002-06-15', phai: true, khuvuc: 'Nam' },
        { id: 5, ho: 'Mai Phạt Sáu', ten: 'Ngàn', ngaysinh: '2001-02-28', phai: false, khuvuc: 'Trung' },
    ];

    _listNhanVien: any[] = [];

    editNhanVien!: NhanVien;

    listDuAn: DuAn[] = [
        { id: 1, tenDuAn: 'Quản lý trại heo', ngayStart: '2022-03-01', tien: 67890000, leader: 1, thanhvien: [1, 3, 4] },
        { id: 2, tenDuAn: 'Cây xanh công viên', ngayStart: '2022-04-02', tien: 98500000, leader: 1, thanhvien: [1, 3, 4] },
        { id: 3, tenDuAn: 'Website Văn hóa Việt', ngayStart: '2022-04-15', tien: 35000000, leader: 2, thanhvien: [2, 4] },
        { id: 4, tenDuAn: 'Website Du lịch Bụi', ngayStart: '2022-04-21', tien: 75500000, leader: 2, thanhvien: [2, 4] },
        { id: 5, tenDuAn: 'Quản lý nhà thuốc Vĩnh An', ngayStart: '2022-05-02', tien: 97000000, leader: 3, thanhvien: [3, 4] },
        { id: 6, tenDuAn: 'Chăm sóc thú cưng', ngayStart: '2022-12-11', tien: 18999990, leader: 3, thanhvien: [3, 4] },
    ];

    _listDuAn: DuAn[] = [];

    editDuAn!: DuAn;

    listTask: Task[] = [
        { id: 1, tenTask: 'Phân tích yêu cầu', duAnID: 1, nhanvienID: 1, moTa: "Phân tích các yêu cầu của khách hàng để team thực hiện", status: 0, priority: 1 },
        { id: 2, tenTask: 'Thực hiện layout cho ứng dụng', duAnID: 1, nhanvienID: 2, moTa: "Thực hiện layout website, chú ý kỹ responsive", status: 0, priority: 1 },
        { id: 3, tenTask: 'Tìm hiểu yêu cầu của khách hàng', duAnID: 2, nhanvienID: 3, moTa: "Đến công ty và ghi nhận các yêu cầu của khách hàng", status: 0, priority: 2 },
        { id: 4, tenTask: 'Đăng ký thành viên', duAnID: 3, nhanvienID: 4, moTa: "Thực hiện chức năng đăng ký, có capcha, mail kích hoạt", status: 0, priority: 1 },
        { id: 5, tenTask: 'Đổi pass, quên pass', duAnID: 1, nhanvienID: 4, moTa: "Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ", status: 0, priority: 1 },
        { id: 6, tenTask: 'Testing 1', duAnID: 4, nhanvienID: 3, moTa: "Kiểm tra mọi form chức năng theo các case đã liệt kê", status: 0, priority: 2 },
        { id: 7, tenTask: 'Triển khai website', duAnID: 5, nhanvienID: 4, moTa: "Triển khai website lên hosting đã mua", status: 0, priority: 2 },
        { id: 8, tenTask: 'Hướng dẫn sử dụng và bàn giao', duAnID: 5, nhanvienID: 1, moTa: "Hướng dẫn sử dụng cho khách hàng", status: 0, priority: 2 },
        { id: 9, tenTask: 'Testing 2', duAnID: 4, nhanvienID: 2, moTa: "Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án", status: 0, priority: 2 },
    ];

    _listTask: Task[] = [];

    editTask!: Task;

    detailTask!: Task;

    getNhanVien() {
        return this.httpClient.get("http://localhost:3000/nhanvien").subscribe(data => {
            this._listNhanVien = data as NhanVien[];
            this.listNhanVien = this._listNhanVien;
        });
    }

    themNhanVien(nv: any) {
        return this.httpClient.post("http://localhost:3000/nhanvien/", nv).subscribe(data => {});
    }

    suaNhanVien(nv: any) {
        return this.httpClient.put("http://localhost:3000/nhanvien/" + nv.id, nv).subscribe(data => {});
    }

    xoaNhanVien(id: number) {
        return this.httpClient.delete(`http://localhost:3000/nhanvien/${id}`).subscribe(data => {});
    }

    getDuAn() {
        return this.httpClient.get("http://localhost:3000/duan").subscribe(data => {
            this._listDuAn = data as DuAn[];
            this.listDuAn = this._listDuAn;
        });
    }

    themDuAn(nv: any) {
        return this.httpClient.post("http://localhost:3000/duan/", nv).subscribe(data => {});
    }

    suaDuAn(nv: any) {
        return this.httpClient.put("http://localhost:3000/duan/" + nv.id, nv).subscribe(data => {});
    }

    xoaDuAn(id: number) {
        return this.httpClient.delete(`http://localhost:3000/duan/${id}`).subscribe(data => {});
    }

    getTask() {
        return this.httpClient.get("http://localhost:3000/task").subscribe(data => {
            this._listTask = data as Task[];
            this.listTask = this._listTask;
        });
    }

    themTask(nv: any) {
        return this.httpClient.post("http://localhost:3000/task/", nv).subscribe(data => {});
    }

    suaTask(nv: any) {
        return this.httpClient.put("http://localhost:3000/task/" + nv.id, nv).subscribe(data => {});
    }

    xoaTask(id: number) {
        return this.httpClient.delete(`http://localhost:3000/task/${id}`).subscribe(data => {});
    }
}
