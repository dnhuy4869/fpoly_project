import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'asm1';

    chucNang: string = 'dashboard';

    constructor(
        private route: Router,
        private activeRoute: ActivatedRoute,
        private auth: AuthService,
    ) {

    }

    isLoggedIn() {
        return this.auth.daDangNhap();
    }

    logout() {
        if (confirm("Bạn có chắc không ?") == false) {
            return;
        }

        this.auth.thoat();
    }

    ganCN(cn: string = 'dashboard') {
        this.chucNang = cn;
        console.log(cn);
    }

    updateCN(cn: any): void {
        this.ganCN(cn);
    }

    getCurrBreadcumb() {
        switch (this.route.url) {
            case '':
                return "Bảng điều khiển";
            case 'themnv':
                return "Thêm nhân viên";
            case 'dsnv':
                return "Danh sách nhân viên";
            case 'suanv':
                return "Sửa nhân viên";
            case 'themduan':
                return "Thêm dự án";
            case 'dsduan':
                return "Danh sách dự án";
            case 'suaduan':
                return "Sửa dự án";
            case 'themtask':
                return "Thêm task";
            case 'dstask':
                return "Danh sách task";
            case 'suatask':
                return "Sửa task";
             case 'detailtask':
                return "Chi tiết task";
        }

        return "";
    }

    isTabActive(tab:string) {
        return tab === this.route.url;
    }
}
