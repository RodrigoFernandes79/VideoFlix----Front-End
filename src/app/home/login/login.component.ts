import {MessageService} from 'primeng-lts/api';
import {Message} from 'primeng-lts//api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
	providers: [MessageService]
})
export class LoginComponent implements OnInit {

	email = "";
	senha = "";

  constructor(private autencicacaoService: AutenticacaoService,
		private router: Router, private messageService :MessageService
	) { }

  ngOnInit(): void {
  }

	login(){
	this.autencicacaoService.autenticar(this.email,this.senha)
	.subscribe(()=>{
		this.router.navigate(['videos'])
},
	(error)=>{
		this.messageService.add({severity:'error', summary: 'Erro!', detail: 'Usuário e/ou senha inválidos'});

		console.log(error);
	})
	}

}
