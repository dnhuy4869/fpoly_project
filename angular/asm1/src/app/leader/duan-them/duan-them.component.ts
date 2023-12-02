import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from 'src/app/du-an';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})

export class DuanThemComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;
    }

    tenDuAn: string ='';
    ngayStart: string ='';
    tien: number = 0;
    leader: number = 0;
    thanhvien: number[] = [];

    addDuan(event:Event) {
        //event.preventDefault();

        const listTV: number[] = this.thanhvien.map(str => Number(str));

        let newID:number = 0;
        if (this.projectData.listDuAn.length <= 0)
        {
            newID = 1;
        }
        else {
            newID = this.projectData.listDuAn[this.projectData.listDuAn.length - 1].id + 1;
        }

        const newDuan:DuAn = {
            id: newID,
            tenDuAn: this.tenDuAn,
            ngayStart: this.ngayStart,
            tien: Number(this.tien),
            leader: this.leader,
            thanhvien: listTV,
        };

        console.log(newDuan);
        this.projectData.listDuAn.push(newDuan);

        this.projectData.themDuAn(newDuan);
        this.projectData.getDuAn();

        //this.updateCN.emit("dsDuan");
        this.route.navigate(['leader/dsduan']);
    }
}
