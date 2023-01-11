import { Observable  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoFlixService {

	videoFlixUrl = 'http://localhost:8080/videos'

  constructor(private http: HttpClient) { }

	httpOptions = {
		headers: new HttpHeaders({
			 'Authorization': 'Bearer '+localStorage.token,
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
			'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
		})
	};

	buscarVideos():Observable<Video[]>{
		return this.http.get<Video[]>('http://localhost:8080/videos',this.httpOptions)

}
}


