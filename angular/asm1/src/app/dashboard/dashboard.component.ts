import { Component } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(
        public projectData: ProjectDataService,
    ) {
        this.projectData = projectData;
    }

    calcTotalCost() {
        let price:number = 0;

        this.projectData.listDuAn.forEach((duan) => {
            price += duan.tien;
        })

        return price;
    }
}
