import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoVideoComponent } from './novo-video/novo-video.component';

import { VideoDetalheComponent } from './video-detalhe/video-detalhe.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListResolver } from './video-list/video-list.resolver';

const routes: Routes = [
	{path:'',
	component: VideoListComponent,
	 resolve:
	 {
			videos: VideoListResolver
	},
		},
	{
		path:'categorias/:id',
		component:VideoDetalheComponent
		},
		{
			path:'novo-video',
			component: NovoVideoComponent
		}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
