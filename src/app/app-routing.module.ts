import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdzDashboardComponent } from '@fdz/components';

const routes: Routes = [
  { path: '', component: FdzDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
