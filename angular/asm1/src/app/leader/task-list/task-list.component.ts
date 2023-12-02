import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';
import { Task } from 'src/app/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;

        this.projectData.getTask();
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

    deleteTask(id: number) {
        // this.projectData.listTask = this.projectData.listTask.filter(task => task.id !== id);
        // this.projectData._listTask = this.projectData.listTask;
        // this.tukhoa = '';

        if (confirm("Bạn có chắc không ?") == false) {
            return;
        }

        this.projectData.xoaTask(id);
        this.projectData.getTask();

        //this.updateCN.emit("dsTask");
        this.route.navigate(['leader/dstask']);
    }

    editTask(task: Task) {
        this.projectData.editTask = task;
        // this.projectData._listTask = this.projectData.listTask;
        // this.tukhoa = '';

        //this.updateCN.emit("suaTask");
        this.route.navigate(['leader/suatask']);
    }

    viewDetailTask(task: Task) {
        this.projectData.detailTask = task;
        //this.updateCN.emit("detailTask");
        this.route.navigate(['leader/detailtask']);
    }

    tukhoa:string = '';

    search() {
        this.projectData._listTask = this.projectData.listTask.filter((p) => {
            return p.tenTask.toLowerCase().includes(this.tukhoa.toLowerCase())
        });
    }
}
