import { SafeResourceUrl } from '@angular/platform-browser';
import { Categoria } from './categoria';
export class Video {

	id?:number;
	titulo?:string;
	descricao?:string;
	url?:string;
	categoria?:Categoria;
	urlSafe:SafeResourceUrl;

}
