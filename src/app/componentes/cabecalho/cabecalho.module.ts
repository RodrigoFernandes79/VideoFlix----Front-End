import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import {MenubarModule} from 'primeng-lts/menubar';


@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
		RouterModule,
		MenubarModule
  ],
	exports:[CabecalhoComponent]

})
export class CabecalhoModule { }
