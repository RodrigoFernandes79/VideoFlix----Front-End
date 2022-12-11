import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng-lts/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import {ToastModule} from 'primeng-lts/toast';

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
		ReactiveFormsModule

	],
		exports: [
			HomeComponent

		],


})
export class HomeModule { }
