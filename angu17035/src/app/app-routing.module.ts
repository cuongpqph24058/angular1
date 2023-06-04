import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotPageComponent } from './pages/not-page/not-page.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CProductComponent } from './pages/c-product/c-product.component';
import { TrangchuAdminComponent } from './pages/admin/trangchu-admin/trangchu-admin.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';



const routes: Routes = [

  {path: '',component: HomePageComponent, },
  {path: '',component: HomePageComponent,children: [
  ]},


  {path: 'admin',component: HomeAdminComponent,children: [
    {path: '',redirectTo: "home",pathMatch: 'full'},
    {path: 'home',component: TrangchuAdminComponent},
    {path: 'add',component: AddProductComponent},
  ]},
  {path: 'signup',component: SignupComponent,},
  {path: 'signin',component: SigninComponent,},
  {path: 'chitiet/product',component: CProductComponent,},
  {path: '**',component: NotPageComponent,},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
