import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

	categoriaUrl = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) { }

	 httpOptions = {
		headers: new HttpHeaders({
			 'Authorization': 'Bearer '+localStorage.token,  //passando o token que esta no localstorage pro header para autorizar o método
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
			'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
		})
	};

	listarCategorias():Observable<Categoria[]> {


		console.log(this.httpOptions)
		return this.http.get<Categoria[]>(this.categoriaUrl, this.httpOptions)

}
}
