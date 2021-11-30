import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './admin/product/product.component';
import { StatusComponent } from './admin/status/status.component';
import { UsersComponent } from './admin/users/users.component';
import { SiteComponent } from './site/site.component';
import { AboutComponent } from './size/about/about.component';
import { ProflieComponent } from './size/proflie/proflie.component';
import { SlideComponent } from './size/slide/slide.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '', component: SlideComponent },
      { path: 'about', component: AboutComponent },
      { path: 'profile', component: ProflieComponent },
      { path: 'slide', component: SlideComponent },
    ]
  },
  {
    path:'',component:AdminComponent,
    children:[
      {path:'admin',component:AdminComponent},
      {path:'users',component:UsersComponent},
      {path:'status',component:StatusComponent},
      {path:'product',component:ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}