import { Component, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProjectDataService } from 'src/app/project-data.service';
import { DuAn } from 'src/app/du-an';
import { Router } from '@angular/router';

@Component({
    selector: 'app-duan-list',
    templateUrl: './duan-list.component.html',
    styleUrls: ['./duan-list.component.css']
})

export class DuanListComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public datePipe: DatePipe,
        public projectData: ProjectDataService,
    ) {
        this.datePipe = datePipe;
        this.projectData = projectData;

        this.projectData.getDuAn();
    }

    deleteDuAn(id: number) {
        // this.projectData.listDuAn = this.projectData.listDuAn.filter(duan => duan.id !== id);
        // this.projectData._listDuAn = this.projectData.listDuAn;
        // this.tukhoa = '';

        if (confirm("Bạn có chắc không ?") == false) {
            return;
        }

        this.projectData.xoaDuAn(id);
        this.projectData.getDuAn();

        //this.updateCN.emit("dsDuan");
        this.route.navigate(['leader/dsduan']);
    }

    editDuAn(duan: DuAn) {
        this.projectData.editDuAn = duan;
        // this.projectData._listDuAn = this.projectData.listDuAn;
        // this.tukhoa = '';

        //this.updateCN.emit("suaDuan");
        this.route.navigate(['leader/suaduan']);
    }

    tukhoa:string = '';

    search() {
        this.projectData._listDuAn = this.projectData.listDuAn.filter((p) => {
            return p.tenDuAn.toLowerCase().includes(this.tukhoa.toLowerCase())
        });
    }
}
