import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
    { path: 'themnv', component: NvThemComponent },
    { path: 'dsnv', component: NvListComponent },
    { path: 'suanv', component: NvSuaComponent },
    { path: 'themduan', component: DuanThemComponent },
    { path: 'suaduan', component: DuanSuaComponent },
    { path: 'dsduan', component: DuanListComponent },
    { path: 'themtask', component: TaskThemComponent },
    { path: 'suatask', component: TaskSuaComponent },
    { path: 'dstask', component: TaskListComponent },
    { path: 'detailTask', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
