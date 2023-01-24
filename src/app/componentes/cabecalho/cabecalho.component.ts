import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

	user$ = this.usuarioService.retornaUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
console.log(this.usuarioService.retornaUsuario())

  }
logout(){
	this.usuarioService.logout()
	this.router.navigate([''])

}
}
