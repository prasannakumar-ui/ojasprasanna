import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { EmpupdComponent } from './empupd/empupd.component';
import { SecPipe } from './sec.pipe';
import { CurPipe } from './cur.pipe';
import { ImgComponent } from './img/img.component'
const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'empupd', component: EmpupdComponent}
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, EmpupdComponent, SecPipe, CurPipe, ImgComponent],
  imports: [
    FormsModule,CommonModule,RouterModule.forChild(routes),HttpClientModule,ReactiveFormsModule]
})
export class MainModule { }
