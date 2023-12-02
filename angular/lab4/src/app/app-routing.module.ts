import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin/sp', component: ProductDsComponent },
    { path: 'admin/themSP', component: ProductThemComponent },
    { path: 'admin/suaSP/:id', component: ProductSuaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
