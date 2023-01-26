
import { VideoFlixService } from 'src/app/services/video-flix.service';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';


@Component({
  selector: 'app-novo-video',
  templateUrl: './novo-video.component.html',
  styleUrls: ['./novo-video.component.scss']
})
export class NovoVideoComponent implements OnInit {

	video:Video = new Video()

  constructor(private videoService: VideoFlixService) { }

  ngOnInit(): void {

  }

	inserirVideo() {
		this.videoService.inserirVideo(this.video)
		.subscribe((resposta) => {
this.video = new Video()
console.log(this.video)
console.log(resposta)
		})

	}
}
