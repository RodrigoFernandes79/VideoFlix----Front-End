import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import {CardModule} from 'primeng-lts/card';
import { VideosComponent } from './video-list/videos/videos.component';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FiltrarPorTitulo } from './video-list/filtrar-por-titulo.pipe';




@NgModule({
  declarations: [VideoListComponent, VideosComponent, FiltrarPorTitulo],
  imports: [
    CommonModule,
    VideosRoutingModule,
		CardModule,
		InputTextModule



  ]
})
export class VideosModule { }
