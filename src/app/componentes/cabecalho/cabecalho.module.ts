import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MenubarModule} from 'primeng-lts/menubar';
import {ButtonModule} from 'primeng-lts/button';
import {DialogModule} from 'primeng-lts/dialog';
import { InputTextModule } from 'primeng-lts/inputtext';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import { CabecalhoComponent } from './cabecalho.component';
import { NovoVideoComponent } from 'src/app/videos/novo-video/novo-video.component';

@NgModule({
  declarations: [CabecalhoComponent, NovoVideoComponent],
	imports: [
    CommonModule,
		RouterModule,
		MenubarModule,
		ButtonModule,
		DialogModule,
		FormsModule,
		ReactiveFormsModule,
		InputTextModule,
		RadioButtonModule




  ],
	exports:[CabecalhoComponent]
})
export class CabecalhoModule { }
