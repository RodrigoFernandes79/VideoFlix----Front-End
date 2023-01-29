import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component ,  Input,  OnInit } from '@angular/core';

import { VideoFlixService } from 'src/app/services/video-flix.service';
import { Video } from 'src/app/models/video';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-novo-video',
  templateUrl: './novo-video.component.html',
  styleUrls: ['./novo-video.component.scss']
})
export class NovoVideoComponent implements OnInit {

	@Input() displayModal: boolean =true
displayPosition: boolean;
 formGroup:FormGroup
  position: string;
video:Video = new Video()
myPattern= /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

categorias:Categoria[]=[]
categoriaSelecionada: Categoria



  constructor( private formBuilder: FormBuilder,
		 private videoFlixService :VideoFlixService,
		 private categoriaService: CategoriaService ) {
		this.formGroup = this.formBuilder.group({
			titulo: ['',[Validators.required]],
			descricao: ['',[Validators.required]],
			url: ['',[Validators.required, Validators.pattern(this.myPattern)]],
			categoria: [{id:this.categoriaSelecionada}],

		})

	}

  ngOnInit(): void {
		this.listarCategoria()



  }
	adicionarVideo(position: string) {
		this.position = position;
		this.displayPosition = true;
	}

	criarVideo() {
		this.videoFlixService.inserirVideo(this.formGroup.value)
		.subscribe((resposta) =>{
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Seu Vídeo Foi Adicionado!',
				showConfirmButton: false,
				timer: 1500
			})
			this.video = resposta

			this.displayPosition = false;
			this.formGroup.reset()
		},
		 (error) =>{
			console.log(error)
	})
}
		cancelar() {
			this.displayPosition = false;
			this.formGroup.reset()

		}

		listarCategoria() {
			this.categoriaService.listarCategorias()
			.subscribe((resposta) =>{
				this.categorias = resposta
				this.categoriaSelecionada = this.categorias[0]

			},(error) =>{
				console.log(error.message)
						}
		)}
}


