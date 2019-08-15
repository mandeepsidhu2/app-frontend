import { Component, OnInit } from '@angular/core';
import {CourseListService} from '../course-list.service'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private courseListService:CourseListService) { }
  courses:any;
  image_link:string;
  ngOnInit() {
    this.courseListService.getCourses().subscribe(data=>{
      this.courses=data;
      console.log(this.courses);});
  
  }
  selectedCourse(course:any){
    console.log(course)
  }
}
