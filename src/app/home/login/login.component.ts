import { TokenService } from './../../autenticacao/token.service';
import { map } from 'rxjs/operators';
import {MessageService} from 'primeng-lts/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
	providers: [MessageService]
})
export class LoginComponent implements OnInit {

	formGroup:FormGroup



  constructor(private autencicacaoService: AutenticacaoService,
		private router: Router, private messageService :MessageService,
		private formBuilder: FormBuilder
	) {

	this.formGroup = this.formBuilder.group({
		email:['',[Validators.required,Validators.email]],
		senha:['',[Validators.required]],

	})
	}
  ngOnInit(): void {
  }



	login(){
	this.autencicacaoService.autenticar(this.formGroup.value.email,this.formGroup.value.senha)
	.subscribe((respo)=>{
console.log(respo)

		this.router.navigate(['videos'])
},
	(error)=>{
		this.messageService.add({severity:'error', summary: 'Erro!', detail: 'Usuário e/ou senha inválidos'});

		console.log(error);
	})
	}

}
