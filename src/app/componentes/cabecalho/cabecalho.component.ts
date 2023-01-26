import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng-lts/api';



@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
providers: [ConfirmationService]
})
export class CabecalhoComponent implements OnInit {

	user$ = this.usuarioService.retornaUsuario()

	msgs: Message[] = [];

	position: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private confirmationService: ConfirmationService,
		 private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
console.log(this.usuarioService.retornaUsuario())
this.primengConfig.ripple = true;


  }
logout(){
	this.usuarioService.logout()
	this.router.navigate([''])
}



adicionarVideo(position: string) {
	this.position = position;

	this.confirmationService.confirm({
			message: 'Voc?',
			header: 'Adicionar um Novo Vídeo',
			icon: 'pi pi-video',
			accept: () => {
					this.msgs = [{severity:'info', summary:'Confirmed', detail:'Vídeo Adicionado!'}];
			},
			reject: () => {
					this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
			},
			key: "positionDialog"
	});
}
}



