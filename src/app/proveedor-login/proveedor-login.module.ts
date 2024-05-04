import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorLoginPageRoutingModule } from './proveedor-login-routing.module';

import { ProveedorLoginPage } from './proveedor-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorLoginPageRoutingModule
  ],
  declarations: [ProveedorLoginPage]
})
export class ProveedorLoginPageModule {}
