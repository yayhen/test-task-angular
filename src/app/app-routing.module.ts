import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'edit', component: EditComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
