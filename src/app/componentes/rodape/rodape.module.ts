import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CardModule} from 'primeng-lts/card';

import { RodapeComponent } from './rodape.component';
import { ButtonModule } from 'primeng-lts/button';


@NgModule({
  declarations: [RodapeComponent],
  imports: [
    CommonModule,
		RouterModule,
		CardModule,
		ButtonModule
  ],
	exports: [RodapeComponent]
})
export class RodapeModule { }
