import { CategoriaService } from './../../services/categoria.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideoFlixService } from 'src/app/services/video-flix.service';
import { Categoria } from 'src/app/models/categoria';
import { TokenService } from 'src/app/autenticacao/token.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(private videoFlixService:VideoFlixService, private catService : CategoriaService,
		private tokenService: TokenService) {}

	videos:Video[]=[]
categorias:Categoria[]=[]

ngAfterViewInit() {

}

	ngOnInit(): void {
this.listarVideos()
this.listarCategorias()
  }

	listarVideos():void{
		this.videoFlixService.buscarVideos()
		.subscribe((resposta) =>{
			this.videos = resposta


		},
		(error) =>{
console.log(error)
		})
	}

	listarCategorias():void {
		this.catService.listarCategorias()
		.subscribe((resposta) =>{
			this.categorias = resposta




		},
		(error) =>{
console.log(error)
		})
	}
}

