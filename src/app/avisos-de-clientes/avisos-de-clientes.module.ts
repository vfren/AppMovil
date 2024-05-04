import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisosDeClientesPageRoutingModule } from './avisos-de-clientes-routing.module';

import { AvisosDeClientesPage } from './avisos-de-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisosDeClientesPageRoutingModule
  ],
  declarations: [AvisosDeClientesPage]
})
export class AvisosDeClientesPageModule {}
