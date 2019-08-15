import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component'
import {CourseElementsComponent} from './course-elements/course-elements.component'
const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  },
  
  {
    path: 'module/:id',
    component: CourseElementsComponent
  ,
  children: [
  {
  path: 'lecture',
  loadChildren: './lecture-window/lecture-window.module#LectureWindowModule'
  
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
