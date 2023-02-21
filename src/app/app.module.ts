import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { TestingComponent } from './testing/testing.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { AspComponent } from './asp/asp.component';
import { PythonComponent } from './python/python.component';
import { MearnComponent } from './mearn/mearn.component';
import { FlutterComponent } from './flutter/flutter.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ViewComponent,
    AdminComponent,
    CoursesComponent,
    TestingComponent,
    DatascienceComponent,
    AspComponent,
    PythonComponent,
    MearnComponent,
    FlutterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
