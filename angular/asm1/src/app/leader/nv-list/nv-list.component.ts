import { Component, EventEmitter, Output } from '@angular/core';
import { NhanVien } from '../../nhan-vien';
import { DatePipe } from '@angular/common';
import { ProjectDataService } from '../../project-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nv-list',
    templateUrl: './nv-list.component.html',
    styleUrls: ['./nv-list.component.css']
})

export class NvListComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public datePipe: DatePipe,
        public projectData: ProjectDataService,
    ) {
        this.datePipe = datePipe;
        this.projectData = projectData;

        this.projectData.getNhanVien();
    }

    deleteNhanVien(id: number) {
        // this.projectData.listNhanVien = this.projectData.listNhanVien.filter(nv => nv.id !== id);
        // this.projectData._listNhanVien = this.projectData.listNhanVien;
        // this.tukhoa = '';

        if (confirm("Bạn có chắc không ?") == false) {
            return;
        }

        this.projectData.xoaNhanVien(id);
        this.projectData.getNhanVien();

        //this.updateCN.emit("dsNV");
        this.route.navigate(['leader/dsnv']);
    }

    editNhanVien(nv: NhanVien) {
        this.projectData.editNhanVien = nv;
        // this.projectData._listNhanVien = this.projectData.listNhanVien;
        // this.tukhoa = '';

        //this.updateCN.emit("suaNV");
        this.route.navigate(['leader/suanv']);
    }

    tukhoa:string = '';

    search() {
        this.projectData._listNhanVien = this.projectData.listNhanVien.filter((p) => {
            let hoten:string = `${p.ho} ${p.ten}`;
            return hoten.toLowerCase().includes(this.tukhoa.toLowerCase())
        });
    }
}
