import { Video } from './../../models/video';
import { CategoriaService } from './../../services/categoria.service';

import { Component, OnInit } from '@angular/core';

import { VideoFlixService } from 'src/app/services/video-flix.service';
import { Categoria } from 'src/app/models/categoria';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(private videoFlixService:VideoFlixService, private catService : CategoriaService,
		private sanitizer: DomSanitizer) {}

 videos:Video[]=[]
categorias:Categoria[]=[]
filter:string = ''

ngAfterViewInit() {

}

	ngOnInit(): void {
		this.listarVideos()

  }


	listarVideos():void{
		this.videoFlixService.buscarVideos()
		.subscribe((resposta) =>{
			this.videos = resposta['content']
			console.log(resposta['content'])
			this.videos.forEach(vid =>{
				vid.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url)
			})


		},
		(error) =>{
console.log(error)
		})
	}

	listarCategorias():void {
		this.catService.listarCategorias()
		.subscribe((resposta) =>{
			this.categorias = resposta
console.log(resposta)



		},
		(error) =>{
console.log(error)
		})
	}
}

