import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './size/navbar/navbar.component';
import { SlideComponent } from './size/slide/slide.component';
import { RegisterComponent } from './size/register/register.component';
import { FooterComponent } from './size/footer/footer.component';
import { LoginComponent } from './size/login/login.component';
import { ProflieComponent } from './size/proflie/proflie.component';
import { AboutComponent } from './size/about/about.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StatusComponent } from './admin/status/status.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductComponent } from './admin/product/product.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    ProflieComponent,
    AboutComponent,
    SiteComponent,
    AdminComponent,
    DashboardComponent,
    StatusComponent,
    UsersComponent,
    ProductComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
