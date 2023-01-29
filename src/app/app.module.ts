import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MessageModule} from 'primeng-lts/message';
import {InputTextModule} from 'primeng-lts/inputtext';
import {MessagesModule} from 'primeng-lts/messages';
import { MenubarModule } from 'primeng-lts/menubar';


import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		MessageModule,
		MessagesModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MenubarModule,
		CabecalhoModule,
		RodapeModule,
		InputTextModule,








  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
