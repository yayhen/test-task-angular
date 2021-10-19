import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'users' ,loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule), canActivate: [UserGuard]},
  {path: 'admin' ,loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canActivate: [AdminGuard]},
  {path: '', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
