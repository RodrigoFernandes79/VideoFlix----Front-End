import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng-lts/button';
import {ToastModule} from 'primeng-lts/toast';
import {RadioButtonModule} from 'primeng-lts/radiobutton';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';




@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
		ButtonModule,
		FormsModule,
		ToastModule,
		ReactiveFormsModule,
		RadioButtonModule

	],
		exports: [
			HomeComponent

		],


})
export class HomeModule { }
