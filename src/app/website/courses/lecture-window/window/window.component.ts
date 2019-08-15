import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import {LectureService} from '../lecture.service'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,private lectureService:LectureService,private activatedRoute:ActivatedRoute) { }
  lectures:any;
  selected_video:SafeResourceUrl=null;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let elementId = params['elementId']
      this.lectureService.getLectures(elementId).subscribe(data=>{
        this.lectures=data;
        console.log(data[0].video_link)
       this.selected_video=this.sanitizer.bypassSecurityTrustResourceUrl(data[0].video_link)
       
      })
      });
  }
  selectVideo(video:string){
    this.selected_video=this.sanitizer.bypassSecurityTrustResourceUrl(video)

  }

}
