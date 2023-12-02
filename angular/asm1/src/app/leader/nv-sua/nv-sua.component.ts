import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from 'src/app/nhan-vien';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    ho: string ='';
    ten: string ='';
    ngaysinh: string='';
    phai: boolean = false;
    khuvuc: string ='';

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;

        this.ho = this.projectData.editNhanVien.ho;
        this.ten = this.projectData.editNhanVien.ten;
        this.ngaysinh = this.projectData.editNhanVien.ngaysinh;
        this.phai = this.projectData.editNhanVien.phai;
        this.khuvuc = this.projectData.editNhanVien.khuvuc;

        console.log(this.phai);
    }

    suaNhanVien(event:Event) {
        if (this.projectData.listNhanVien.length <= 0)
        {
           return;
        }

        const index = this.projectData.listNhanVien.findIndex(nv => nv.id === this.projectData.editNhanVien.id);
        if (index != -1)
        {
            const newNV:NhanVien = {
                id: this.projectData.editNhanVien.id,
                ho: this.ho,
                ten: this.ten,
                ngaysinh: this.ngaysinh,
                phai: this.phai,
                khuvuc: this.khuvuc,
            };

            this.projectData.listNhanVien[index] = newNV;

            this.projectData.suaNhanVien(newNV);
            this.projectData.getNhanVien();

            //this.updateCN.emit("dsNV");
            this.route.navigate(['leader/dsnv']);

        }
    }
}
