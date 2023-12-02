import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/project-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
    constructor(
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;
    }

    getNhanVien(id: number) {
        if (this.projectData.listNhanVien.length <= 0)
        {
           return "";
        }

        const index = this.projectData.listNhanVien.findIndex(nv => nv.id === id);
        if (index != -1)
        {
            return `${this.projectData.listNhanVien[index].ho} ${this.projectData.listNhanVien[index].ten}`;
        }

        return "";
    };

    getDuAn(id: number) {
        if (this.projectData.listDuAn.length <= 0)
        {
           return "";
        }

        const index = this.projectData.listDuAn.findIndex(nv => nv.id === id);
        if (index != -1)
        {
            return this.projectData.listDuAn[index].tenDuAn;
        }

        return "";
    }

    getPriority(priority: number) {
        switch (priority) {
            case 0: {
                return "Bình thường";
            }
            case 1: {
                return "Quan trọng";
            }
        }

        return "";
    }

    getStatus(status: number) {
        switch (status) {
            case 0: {
                return "Chưa hoàn thành";
            }
            case 1: {
                return "Đã hoàn thành";
            }
        }

        return "";
    }
}
