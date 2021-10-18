import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { CreateComponent } from '../pages/create/create.component';
import { EditComponent } from '../pages/edit/edit.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
