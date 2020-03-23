import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from "./Main_layout/full-layout.component";

import { ADMIN_ROUTES, FACULTY_ROUTES, STUDENT_ROUTES, Comman_ROUTES } from "./shared/routes/Routing_Config";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { loginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: loginComponent,
    pathMatch: 'full'
  },

  { path: 'Admin', component: FullLayoutComponent, children: ADMIN_ROUTES, data: { roles: 'Admin' }, canActivate: [AuthGuard] },
  { path: 'Faculty', component: FullLayoutComponent, children: FACULTY_ROUTES, data: { roles: 'Faculty' }, canActivate: [AuthGuard] },
  { path: 'Student', component: FullLayoutComponent, children: STUDENT_ROUTES, data: { roles: 'Student' }, canActivate: [AuthGuard] },
  { path: 'Comman', component: FullLayoutComponent, children: Comman_ROUTES, data: { roles: 'Comman' } },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
