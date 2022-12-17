import { Credenciais } from './credenciais';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	private usuarioSubject = new BehaviorSubject<Credenciais>({})

  constructor(private tokenService: TokenService) {
		if(this.tokenService.possuiToken()){
			this.decodificaJWT()
		}
	 }

	private decodificaJWT(){
		const token = this.tokenService.retornaToken()
		const usuario = jwt_decode(token) as Credenciais
		this.usuarioSubject.next(usuario)
	}

	retornaUsuario(){
		return this.usuarioSubject.asObservable()
	}

	logout(){
		this.tokenService.excluiToken()
		this.usuarioSubject.next({})
	}

	salvaToken(token: string){
		this.tokenService.salvaToken(token)
		this.decodificaJWT()
	}

	estaLogado(){
		return this.tokenService.possuiToken()
	}
}
