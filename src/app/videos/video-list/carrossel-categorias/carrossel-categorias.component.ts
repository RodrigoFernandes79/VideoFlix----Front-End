import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-carrossel-categorias',
  templateUrl: './carrossel-categorias.component.html',
  styleUrls: ['./carrossel-categorias.component.scss']
})
export class CarrosselCategoriasComponent implements OnInit {

	@Input() categorias:Categoria[]=[]
	responsiveOptions;

  constructor(private router: Router) {
		this.responsiveOptions = [
			{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
			},
			{
					breakpoint: '768px',
					numVisible: 2,
					numScroll: 2
			},
			{
					breakpoint: '560px',
					numVisible: 1,
					numScroll: 1
			}
	];
}


  ngOnInit(): void {

  }

	listarVideos(id:number){
		this.router.navigate(['/videos/categorias/',id ])
	}
}
