import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import {LectureService} from '../lecture.service'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,private problemService:ProblemService,private lectureService:LectureService,private activatedRoute:ActivatedRoute) { }
  lectures:any;
  problems:any;
  selected_problem:any
  view='video'
  selected_video:SafeResourceUrl=null;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let elementId = params['elementId']
      this.lectureService.getLectures(elementId).subscribe(data=>{
        this.lectures=data;
        console.log(data[0].video_link)
       this.selected_video=this.sanitizer.bypassSecurityTrustResourceUrl(data[0].video_link)
       
      })
      this.problemService.getProblems(elementId).subscribe(data=>{
        this.problems=data;
        console.log(data)
       
      })
      });
  }
  selectVideo(video:string){
    this.view='video'
    this.selected_video=this.sanitizer.bypassSecurityTrustResourceUrl(video)
  }
  selectProblem(problem:any){
    this.view='problem'
    this.selected_problem=problem;
  }

}
