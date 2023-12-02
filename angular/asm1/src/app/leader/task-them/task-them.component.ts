import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;
    }

    tenTask: string = '';
    moTa: string = '';
    duAnID: number = 0;
    nhanvienID: number = 0;
    priority: number = 0;
    status: number = 0;

    addTask(event: Event) {
        let newID:number = 0;
        if (this.projectData.listTask.length <= 0)
        {
            newID = 1;
        }
        else {
            newID = this.projectData.listTask[this.projectData.listTask.length - 1].id + 1;
        }

        const newTask:Task = {
            id: newID,
            tenTask: this.tenTask,
            moTa: this.moTa,
            duAnID: Number(this.duAnID),
            nhanvienID: Number(this.nhanvienID),
            priority: Number(this.priority),
            status: Number(this.status),
        };

        console.log(newTask);
        this.projectData.listTask.push(newTask);

        this.projectData.themTask(newTask);
        this.projectData.getTask();

        //this.updateCN.emit("dsTask");
        this.route.navigate(['leader/dstask']);
    }
}
