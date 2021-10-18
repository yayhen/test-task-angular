import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../pages/details/details.component';
import { UsersComponent } from '../pages/users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
