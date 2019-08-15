import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CourseElementsService} from '../course-elements.service'
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-course-elements',
  templateUrl: './course-elements.component.html',
  styleUrls: ['./course-elements.component.css']
})
export class CourseElementsComponent implements OnInit {

  constructor(public router: Router,public courseElementsService:CourseElementsService,private route: ActivatedRoute) { }
  elements:any;
  currentPath:string
  id:string
  view:string
  ngOnInit() {
    if(!this.router.routerState.snapshot.url.includes('lecture'))
    this.view='course-elements'
    else
    this.view='lecture'
    
    this.currentPath=this.router.url;
    this.route.params.subscribe(data=>this.id=data.id)
    this.courseElementsService.getCourseElements(this.id).subscribe(data=>{
      this.elements=data;});
  }
  
  changePathToLecture(id:any){
    
    this.view='lecture'
    console.log(id)
    this.currentPath='/courses/module/'+id+'/lecture';
    console.log(this.currentPath)
  }
}
