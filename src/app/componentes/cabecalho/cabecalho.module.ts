import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import {MenubarModule} from 'primeng-lts/menubar';
import {ButtonModule} from 'primeng-lts/button';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng-lts/messages';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
		RouterModule,
		MenubarModule,
		ButtonModule,
		ConfirmDialogModule,
		MessagesModule

  ],
	exports:[CabecalhoComponent]

})
export class CabecalhoModule { }
