import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
