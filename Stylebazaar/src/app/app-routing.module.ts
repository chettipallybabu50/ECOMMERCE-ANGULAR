import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component:ProfilePageComponent,
    path:'profile'
  },
  {
    component:ProductListComponent,
    path:'product-list'
  },
  {
    component:ViewProductComponent,
    path:'view-product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
