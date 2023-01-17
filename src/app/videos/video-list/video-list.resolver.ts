import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { VideoFlixService } from './../../services/video-flix.service';
import { Video } from 'src/app/models/video';


@Injectable({providedIn: 'root'})
export class VideoListResolver implements Resolve<Observable<Video[]>> {


	constructor(private service: VideoFlixService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
	Observable<Video[]> {


	 return this.service.buscarVideosPaginado(0)
		}
}


