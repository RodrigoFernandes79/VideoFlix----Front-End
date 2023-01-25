import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Video } from './../../models/video';
import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { VideoFlixService } from 'src/app/services/video-flix.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {


  constructor(private catService : CategoriaService,
		private sanitizer: DomSanitizer,
		 private activatedRoute: ActivatedRoute,
		 private videoFlixService: VideoFlixService) {}


		videos:Video[]=[]
		categorias:Categoria[]=[]
		filter:string = ''
		debounce: Subject<string>= new Subject<string>()
		exibirMais: boolean = true
		atualizarPagina: number = 0

ngOnInit(): void {
	this.videos = this.activatedRoute.snapshot.data.videos
	this.videos.forEach(vid => {
		vid.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url)})
		this.debounce
		.pipe(debounceTime(400)) //Somente procura o filtro apos 400 milisegundos
		.subscribe(filter => this.filter = filter)

  this.listarCategorias()
	}

	ngOnDestroy(): void {
		this.debounce.unsubscribe() //encerrar o consumo do filtro do componente VideoListComponent
	}

	load() {
		this.videoFlixService.buscarVideosPaginado(++this.atualizarPagina)
		.subscribe(vid =>{
		this.videos =	this.videos.concat(vid)
		vid.forEach(res =>{
			res.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url)
			})
			if(!vid.length) {
				this.exibirMais = false
			}
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

