import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent implements OnInit {

	@Input() exibirMais: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
