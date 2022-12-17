import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private httpClient: HttpClient,
		 private usuarioService: UsuarioService) { }

	autenticar(usuario:string, senha:string):Observable<HttpResponse<any>> {
		return this.httpClient.post('http://localhost:8080/usuarios/auth',{
		email:usuario,
		senha:senha,
	},
	{observe :'response'}
	).pipe(
		tap((response)=>{
			const authToken = response.body.get('token') ?? ''
			this.usuarioService.salvaToken(authToken)
		})
	)
	}
}

