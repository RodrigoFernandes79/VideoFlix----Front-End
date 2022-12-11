import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng-lts/button';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import {ToastModule} from 'primeng-lts/toast';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
		ButtonModule,
		FormsModule,
		ToastModule




	],
		exports: [
			HomeComponent

		],


})
export class HomeModule { }
