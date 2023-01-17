import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import {CardModule} from 'primeng-lts/card';
import { VideosComponent } from './video-list/videos/videos.component';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FiltrarPorTitulo } from './video-list/filtrar-por-titulo.pipe';
import { LoadButtonComponent } from './video-list/load-button/load-button.component';
import { ButtonModule } from 'primeng-lts/button';




@NgModule({
  declarations: [VideoListComponent, VideosComponent, FiltrarPorTitulo, LoadButtonComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
		CardModule,
		InputTextModule,
		ButtonModule



  ]
})
export class VideosModule { }
