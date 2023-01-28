import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component ,  Input,  OnInit } from '@angular/core';

import { VideoFlixService } from 'src/app/services/video-flix.service';
import { Video } from 'src/app/models/video';




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

  constructor( private formBuilder: FormBuilder, private videoFlixService :VideoFlixService ) {
		this.formGroup = this.formBuilder.group({
			titulo: ['',[Validators.required]],
			descricao: ['',[Validators.required]],
			url: ['',[Validators.required, Validators.pattern(this.myPattern)]],
			categoria: [{id:1}],

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
			this.video = resposta
			console.log(resposta)
			this.displayPosition = false;
			this.formGroup.reset()
		})
		}
		cancelar() {
			this.displayPosition = false;
			this.formGroup.reset()

		}
}
