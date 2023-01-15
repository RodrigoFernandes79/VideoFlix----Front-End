import { Pipe, PipeTransform } from '@angular/core';
import { Video } from 'src/app/models/video';

@Pipe({name: 'filtrarPorTitulo'})
export class FiltrarPorTitulo implements PipeTransform {

	transform(videos: Video[], tituloQuery: string) {
		tituloQuery = tituloQuery
		.trim()
		.toLowerCase()

		if(tituloQuery){
			return videos.filter(video =>
				video.titulo.toLowerCase().includes(tituloQuery)
			)

		}else {
			 return videos
		}
	}

}
