import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListResolver } from './video-list/video-list.resolver';

const routes: Routes = [
	{path:'',
	component: VideoListComponent,
	 resolve:
	 {
			videos: VideoListResolver
	 }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
