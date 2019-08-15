import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureWindowRoutingModule } from './lecture-window-routing.module';
import { WindowComponent } from './window/window.component';


@NgModule({
  declarations: [WindowComponent],
  imports: [
    CommonModule,
    LectureWindowRoutingModule
  ]
})
export class LectureWindowModule { }
