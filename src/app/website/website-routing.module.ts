import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import {NavbarComponent} from './navbar/navbar.component'
// const routes: Routes = [ {
//   path: 'dashboard',
//   component: DashboardComponent
// },
// {
//   path: 'courses',
//   loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule)
// },
// {
//   path: '',
//   redirectTo: 'dashboard',
//   pathMatch: 'full'
// }];

const routes: Routes = [ {
  path: '',
  component: NavbarComponent
,
children:[
{
  path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule)
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
