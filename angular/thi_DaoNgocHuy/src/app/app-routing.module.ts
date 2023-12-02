import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewsComponent } from './add-news/add-news.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'add-news', component: AddNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
