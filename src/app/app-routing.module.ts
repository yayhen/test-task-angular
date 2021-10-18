import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { OverviewModule } from './overview/overview.module';
import { AuthComponent } from './pages/auth/auth.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'users' ,loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule), canActivate: [UserGuard]},
  {path: 'admin' ,loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
