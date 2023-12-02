import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ProjectDataService } from './project-data.service';
import { FormsModule } from '@angular/forms';
import { DuanThemComponent } from './leader/duan-them/duan-them.component';
import { DuanListComponent } from './leader/duan-list/duan-list.component';
import { DuanSuaComponent } from './leader/duan-sua/duan-sua.component';
import { TaskListComponent } from './leader/task-list/task-list.component';
import { TaskThemComponent } from './leader/task-them/task-them.component';
import { TaskSuaComponent } from './leader/task-sua/task-sua.component';
import { NvListComponent } from './leader/nv-list/nv-list.component';
import { NvThemComponent } from './leader/nv-them/nv-them.component';
import { NvSuaComponent } from './leader/nv-sua/nv-sua.component';
import { TaskDetailComponent } from './leader/task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NvListComponent,
    NvThemComponent,
    NvSuaComponent,
    TaskDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    ProjectDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
