import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteLoginPageRoutingModule } from './cliente-login-routing.module';

import { ClienteLoginPage } from './cliente-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteLoginPageRoutingModule
  ],
  declarations: [ClienteLoginPage]
})
export class ClienteLoginPageModule {}
