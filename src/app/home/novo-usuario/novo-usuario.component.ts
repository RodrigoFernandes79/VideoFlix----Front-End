import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { minusculoValidator } from './minusculo-validator';



@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],

})
export class NovoUsuarioComponent implements OnInit {

	formGroup: FormGroup
	myPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\S+$).{8,}$"


  constructor(private formBuilder: FormBuilder,
		 private novoUsuarioService: NovoUsuarioService,
		 private router: Router) {

			this.formGroup = this.formBuilder.group({

				nome:['',[Validators.required]],
				email:['',[Validators.required,Validators.email, minusculoValidator]],
				senha:['',[Validators.required,Validators.pattern(this.myPattern)]]
			})

		 }

  ngOnInit(): void {
  }

	cadastrar(){
		this.novoUsuarioService.cadastrarNovoUsuario(this.formGroup.value)
		.subscribe(()=>{

				this.router.navigate([''])

		},
		errors=>{
			console.log(errors)
		})
}
}
