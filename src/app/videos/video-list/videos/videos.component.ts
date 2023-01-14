import { Video } from './../../../models/video';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnChanges {

	@Input() videos:Video[]
	rows: any[]=[]

  constructor( ) { }
	ngOnChanges(changes: SimpleChanges): void {
		if(changes.videos) {
			this.rows = this.grupoDeColunas(this.videos)
		}
	}

	ngOnInit(): void {

	}


	grupoDeColunas(videos : Video[]) {
		const novasLinhas = []

		for(let index =0;index < videos.length; index +=3) {
			novasLinhas.push(videos.slice(index, index +3))
		}

		return novasLinhas
	}

}
