import { Observable  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoFlixService {

	videoFlixUrl = 'http://localhost:8080/videos'

  constructor(private http: HttpClient) { }


	buscarVideosPaginado(page: number):Observable<Video[]>{

		let httpOptions = {
			headers: new HttpHeaders({
				 'Authorization': 'Bearer '+localStorage.token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
				'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
			})
		};
//-> Este passo vai vincular os parâmetros ao header, pois o metodo GET só recebe 2 parâmetros:
const requestOptions = Object.assign({}, httpOptions);
requestOptions['params'] = Object.assign({}, page.toString);

		return this.http.get<Video[]>('http://localhost:8080/videos',requestOptions)

}
}


