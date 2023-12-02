import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    tenDuAn: string ='';
    ngayStart: string ='';
    tien: number = 0;
    leader: number = 0;
    thanhvien: number[] = [];

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;

        this.tenDuAn = this.projectData.editDuAn.tenDuAn;
        this.ngayStart = this.projectData.editDuAn.ngayStart;
        this.tien = this.projectData.editDuAn.tien;
        this.leader = this.projectData.editDuAn.leader;
        this.thanhvien = this.projectData.editDuAn.thanhvien;
    }

    suaDuan(event:Event) {
        if (this.projectData.listDuAn.length <= 0)
        {
           return;
        }

        const listTV: number[] = this.thanhvien.map(str => Number(str));

        const index = this.projectData.listDuAn.findIndex(duan => duan.id === this.projectData.editDuAn.id);
        if (index != -1)
        {
            const newDuan:DuAn = {
                id: this.projectData.editDuAn.id,
                tenDuAn: this.tenDuAn,
                ngayStart: this.ngayStart,
                tien: Number(this.tien),
                leader: this.leader,
                thanhvien: listTV,
            };

            this.projectData.suaDuAn(newDuan);
            this.projectData.getDuAn();

            this.projectData.listDuAn[index] = newDuan;
            //this.updateCN.emit("dsDuan");
            this.route.navigate(['leader/dsduan']);

        }
    }
}
