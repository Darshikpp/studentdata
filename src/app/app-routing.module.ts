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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'register', component:RegisterComponent},
  // {path:'login', component:LoginComponent},
  {path:'view',component:ViewComponent},
  {path:'admin',component:AdminComponent},
  {path:'course',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
