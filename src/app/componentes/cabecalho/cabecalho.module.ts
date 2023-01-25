import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import {MenubarModule} from 'primeng-lts/menubar';
import {ButtonModule} from 'primeng-lts/button';
import {MenuItem} from 'primeng-lts/api';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
		RouterModule,
		MenubarModule,
		ButtonModule,

  ],
	exports:[CabecalhoComponent]

})
export class CabecalhoModule { }
