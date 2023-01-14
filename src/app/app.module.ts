import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng-lts/messages';
import {MessageModule} from 'primeng-lts/message';
import {ToastModule} from 'primeng-lts/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { RadioButtonModule } from 'primeng-lts/radiobutton';
import { MenubarModule } from 'primeng-lts/menubar';
import { RodapeModule } from './componentes/rodape/rodape.module';

import { AppComponent } from './app.component';
import { CardModule } from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		MessageModule,
		MessagesModule,
		BrowserAnimationsModule,
		ButtonModule,
		FormsModule,
		ToastModule,
		ReactiveFormsModule,
		RadioButtonModule,
		MenubarModule,
		CardModule,
		CabecalhoModule,
		RodapeModule,
		InputTextModule





  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
