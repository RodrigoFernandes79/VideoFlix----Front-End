import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component ,  Input,  OnInit } from '@angular/core';

import { VideoFlixService } from 'src/app/services/video-flix.service';




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

  constructor( private formBuilder: FormBuilder, private videoFlixService :VideoFlixService ) {
		this.formGroup = this.formBuilder.group({
			titulo: ['',[Validators.required]],
			descricao: ['',[Validators.required]],
			url: ['',[Validators.required]],
			categoria: [''],

		})

	}

  ngOnInit(): void {



  }
	adicionarVideo(position: string) {
		this.position = position;
		this.displayPosition = true;
	}

	criarVideo() {
		this.videoFlixService.inserirVideo(this.formGroup.value)
		.subscribe(resposta =>{
			console.log(resposta)

		})
		this.formGroup.reset()


		}
}
