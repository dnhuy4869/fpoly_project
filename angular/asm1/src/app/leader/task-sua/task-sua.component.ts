import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/project-data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent {
    @Output() updateCN: EventEmitter<string> = new EventEmitter<string>();

    tenTask: string = '';
    moTa: string = '';
    duAnID: number = 0;
    nhanvienID: number = 0;
    priority: number = 0;
    status: number = 0;

    constructor(
        private route: Router,
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;

        this.tenTask = this.projectData.editTask.tenTask;
        this.moTa = this.projectData.editTask.moTa;
        this.duAnID = this.projectData.editTask.duAnID;
        this.nhanvienID = this.projectData.editTask.nhanvienID;
        this.priority = this.projectData.editTask.priority;
        this.status = this.projectData.editTask.status;
    }

    editTask(event: Event) {
        if (this.projectData.listTask.length <= 0)
        {
           return;
        }

        const index = this.projectData.listTask.findIndex(task => task.id === this.projectData.editTask.id);
        if (index != -1)
        {
            const newTask:Task = {
                id: this.projectData.editTask.id,
                tenTask: this.tenTask,
                moTa: this.moTa,
                duAnID: Number(this.duAnID),
                nhanvienID: Number(this.nhanvienID),
                priority: Number(this.priority),
                status: Number(this.status),
            };

            this.projectData.suaTask(newTask);
            this.projectData.getTask();

            this.projectData.listTask[index] = newTask;
            //this.updateCN.emit("dsTask");
            this.route.navigate(['leader/dstask']);
        }
    }
}
