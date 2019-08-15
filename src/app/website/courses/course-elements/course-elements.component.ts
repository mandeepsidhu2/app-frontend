import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-elements',
  templateUrl: './course-elements.component.html',
  styleUrls: ['./course-elements.component.css']
})
export class CourseElementsComponent implements OnInit {

  constructor(public router: Router) { }
  elements:any=[1,2,3];
  currentPath:string
  ngOnInit() {
    
    this.currentPath=this.router.url;
    console.log(this.currentPath)
  }

  changePathToLecture(){
    this.currentPath=this.router.url+'/lecture';
    console.log(this.currentPath)
  }
}
