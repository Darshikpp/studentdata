import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { AdminComponent } from './admin/admin.component';
import { ArgumentOutOfRangeErrorCtor } from 'rxjs/internal/util/ArgumentOutOfRangeError';
import { CoursesComponent } from './courses/courses.component';
import { TestingComponent } from './testing/testing.component';
import { AspComponent } from './asp/asp.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { FlutterComponent } from './flutter/flutter.component';
import { MearnComponent } from './mearn/mearn.component';
import { PythonComponent } from './python/python.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'register', component:RegisterComponent},
  // {path:'login', component:LoginComponent},
  {path:'view',component:ViewComponent},
  {path:'admin',component:AdminComponent},
  {path:'course',component:CoursesComponent},
  {path:'testing',component:TestingComponent},
  {path:'asp',component:AspComponent},
  {path:'datascience',component:DatascienceComponent},
  {path:'flutter',component:FlutterComponent},
  {path:'mearn',component:MearnComponent},
  {path:'python',component:PythonComponent},
  {path:'gallery',component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
