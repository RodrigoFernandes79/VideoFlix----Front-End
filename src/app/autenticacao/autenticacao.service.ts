import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private httpClient: HttpClient) { }

	autenticar(usuario:string, senha:string):Observable<any> {
		return this.httpClient.post('http://localhost:8080/usuarios/auth',{
		email:usuario,
		senha:senha,
	});
	}
}
