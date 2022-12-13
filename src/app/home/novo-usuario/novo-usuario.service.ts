
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

	cadastrarNovoUsuario(novoUsuario: NovoUsuario){
		this.http.post('http://localhost:8080/usuarios',novoUsuario)
	}
}
