import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseElementsComponent } from './course-elements/course-elements.component';

@NgModule({
  declarations: [CourseListComponent, CourseElementsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
    
  ],
  exports: [
    
  ]
})
export class CoursesModule { }
