import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-elements',
  templateUrl: './course-elements.component.html',
  styleUrls: ['./course-elements.component.css']
})
export class CourseElementsComponent implements OnInit {

  constructor() { }
  elements:any=[1,2,3];

  ngOnInit() {
  }

}
