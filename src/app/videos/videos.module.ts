import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';
import {CarouselModule} from 'primeng-lts/carousel';
import { ButtonModule } from 'primeng-lts/button';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideosComponent } from './video-list/videos/videos.component';
import { FiltrarPorTitulo } from './video-list/filtrar-por-titulo.pipe';
import { LoadButtonComponent } from './video-list/load-button/load-button.component';
import { VideoDetalheComponent } from './video-detalhe/video-detalhe.component';
import { CarrosselCategoriasComponent } from './video-list/carrossel-categorias/carrossel-categorias.component';
import { NovoVideoComponent } from './novo-video/novo-video.component';



@NgModule({
  declarations: [VideoListComponent, VideosComponent, FiltrarPorTitulo, LoadButtonComponent, VideoDetalheComponent, CarrosselCategoriasComponent, NovoVideoComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
		CardModule,
		InputTextModule,
		ButtonModule,
		CarouselModule,

  ],
	exports:[VideosComponent]
})
export class VideosModule { }
