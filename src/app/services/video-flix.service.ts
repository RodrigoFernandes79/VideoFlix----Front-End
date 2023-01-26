import { Observable  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
			}),
		 params : new HttpParams()
			.set('page',page.toString())
		};

		return this.http.get<Video[]>('http://localhost:8080/videos',httpOptions)
		.pipe(
			map(res =>  res['content'])
	)
		}

	inserirVideo(video: Video): Observable<Video> {
		let httpOptions = {
			headers: new HttpHeaders({
				 'Authorization': 'Bearer '+localStorage.token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
				'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
			}),
		};
		return this.http.post<Video>(`${this.videoFlixUrl}`,video,httpOptions)
	}


		}
