import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import {CardModule} from 'primeng-lts/card';
;


@NgModule({
  declarations: [VideoListComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
		CardModule

  ]
})
export class VideosModule { }
