import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-video-detalhe',
  templateUrl: './video-detalhe.component.html',
  styleUrls: ['./video-detalhe.component.scss']
})
export class VideoDetalheComponent implements OnInit {

	id!:number;
	videos:Video[] = []
categoria:Categoria
rows: any[]=[]
categorias:Categoria[]=[]

	constructor(private categoriaService: CategoriaService,
		 private activatedRoute:ActivatedRoute,
		 private sanitizer: DomSanitizer, private router :Router) { }

  ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params.id
		this.router.routeReuseStrategy.shouldReuseRoute = () => false; //recarregar a pagina quando passar outro id
		this.mostrarVideoPorIdCategoria()
		this.listarCategorias()

  }



	mostrarVideoPorIdCategoria(){
		this.categoriaService.ListarVideoPorCategoriaId(this.id)
		.subscribe((resposta) =>{
			this.videos = resposta
				resposta.forEach((res) =>{
					res.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url)
					this.categoria = res.categoria

				})
			console.log(resposta)
		})
	}

	listarCategorias():void {
		this.categoriaService.listarCategorias()
		.subscribe((resposta) =>{
			this.categorias = resposta
		}),
		(error) =>{
console.log(error)
		}
	}
retornar(){
	this.router.navigate(['/videos'])
}
}

