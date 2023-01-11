import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private usuarioService : UsuarioService,
		  private httpClient: HttpClient,
		) { }

	 headers = new HttpHeaders({
	"Content-type":"application/json",
	"Accept":"application/json",
	'Access-Control-Allow-Headers':
            'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Content-Type': 'application/json; charset=UTF-8',
        })


	autenticar(usuario:string,senha:string):Observable<any> {
		return this.httpClient.post('http://localhost:8080/usuarios/auth',{
		email:usuario,
		senha:senha,
	},
{headers: this.headers}
	).pipe(tap(res => {
		const token = res['token']
		console.log(token)
 	 this.usuarioService.salvaToken(token)

}));
	}
}
