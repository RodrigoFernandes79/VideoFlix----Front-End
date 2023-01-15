import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Video } from './../../models/video';
import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {

  constructor(private catService : CategoriaService,
		private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) {}

		videos:Video[]=[]
		categorias:Categoria[]=[]
		filter:string = ''
debounce: Subject<string>= new Subject<string>()



ngOnInit(): void {

	this.videos = this.activatedRoute.snapshot.data.videos['content']
	this.videos.forEach(vid =>
		vid.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url))

		this.debounce
		.pipe(debounceTime(400)) //Somente procura o filtro apos 400 milisegundos
		.subscribe(filter => this.filter = filter)


	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe() //encerrar o consumo do filtro do componente VideoListComponent
	}
	//-> deixando de usar o método para iniciar a aplicação com o resolve diretamente no NgOnInit
// 	listarVideos():void{
// 		this.videoFlixService.buscarVideos()
// 		.subscribe((resposta) =>{
// 		this.videos = resposta['content']
// 		this.videos.forEach(vid =>
// 			vid.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url))
// 			},
// 		(error) =>{
// console.log(error)
// })
// }

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



