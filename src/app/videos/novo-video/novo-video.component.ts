import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component ,  Input,  OnInit } from '@angular/core';




@Component({
  selector: 'app-novo-video',
  templateUrl: './novo-video.component.html',
  styleUrls: ['./novo-video.component.scss']
})
export class NovoVideoComponent implements OnInit {

	@Input() displayModal: boolean =true
formGroup:FormGroup

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			titulo: ['',[Validators.required]],
			descricao: ['',[Validators.required]],
			url: ['',[Validators.required]],
			categoria: ['',[Validators.required]],

		})

  }


}
