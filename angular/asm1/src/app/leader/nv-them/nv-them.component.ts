import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from 'src/app/nhan-vien';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;
    }

    ho: string ='';
    ten: string ='';
    ngaysinh: string='';
    phai: boolean = false;
    khuvuc: string ='';

    addNV(event:Event) {
        //event.preventDefault();

        let newID:number = 0;
        if (this.projectData.listNhanVien.length <= 0)
        {
            newID = 1;
        }
        else {
            newID = this.projectData.listNhanVien[this.projectData.listNhanVien.length - 1].id + 1;
        }

        const newNV:NhanVien = {
            id: newID,
            ho: this.ho,
            ten: this.ten,
            ngaysinh: this.ngaysinh,
            phai: this.phai,
            khuvuc: this.khuvuc,
        };

        console.log(newNV);
        this.projectData.listNhanVien.push(newNV);

        this.projectData.themNhanVien(newNV);
        this.projectData.getNhanVien();

        //this.updateCN.emit("dsNV");
        this.route.navigate(['leader/dsnv']);
    }
}
