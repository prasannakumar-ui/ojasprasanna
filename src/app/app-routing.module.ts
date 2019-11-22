import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LpageComponent } from './lpage/lpage.component';
import { MainModule } from './main/main.module';

const routes: Routes = [
  { path: '', component: LpageComponent },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MainModule]
})
export class AppRoutingModule { }



