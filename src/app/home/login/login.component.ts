import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email = "";
	senha = "";

  constructor(private autencicacaoService: AutenticacaoService,
		private router: Router,
	) { }

  ngOnInit(): void {
  }

	login(){
	this.autencicacaoService.autenticar(this.email,this.senha)
	.subscribe((resposta)=>{
		console.log(resposta)
		this.router.navigate(['videos']);
	},
	(error)=>{
		alert('Erro de Autenticação. Email e/ou Senha inválidos.');
		console.log(error);
	})
	}

}
