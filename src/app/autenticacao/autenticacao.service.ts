import { CredenciaisDTO } from './usuario/credenciais';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private usuarioService : UsuarioService,
		  private httpClient: HttpClient,
		) { }

	 headers = new HttpHeaders({
	"Content-type":"application/json",
	"Accept":"application/json"
})

	autenticar(usuario:string,senha:string):Observable<any> {
		return this.httpClient.post('http://localhost:8080/usuarios/auth',{
		email:usuario,
		senha:senha,
	},
{headers: this.headers}
	).pipe(map(res => {
		const token = res['token']
		console.log(token)
  this.usuarioService.salvaToken(token)

}));
	}
}
