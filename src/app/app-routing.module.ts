import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdzDashboardComponent, FdzFundComponent, FdzHomeComponent } from '@fdz/components';

const routes: Routes = [
  { path: '', component: FdzHomeComponent },
  { path: 'funds', component: FdzDashboardComponent },
  { path: 'fund/:id', component: FdzFundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
