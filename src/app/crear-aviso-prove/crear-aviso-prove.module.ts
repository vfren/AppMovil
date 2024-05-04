import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAvisoProvePageRoutingModule } from './crear-aviso-prove-routing.module';

import { CrearAvisoProvePage } from './crear-aviso-prove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAvisoProvePageRoutingModule
  ],
  declarations: [CrearAvisoProvePage]
})
export class CrearAvisoProvePageModule {}
