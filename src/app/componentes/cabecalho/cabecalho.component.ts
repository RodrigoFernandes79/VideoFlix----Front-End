import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { MenuItem } from 'primeng-lts/api';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
	items: MenuItem[]= []
	user$ = this.usuarioService.retornaUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
console.log(this.usuarioService.retornaUsuario())
this.items = []

  }
logout(){
	this.usuarioService.logout()
	this.router.navigate([''])

}
}
