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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    ProflieComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
