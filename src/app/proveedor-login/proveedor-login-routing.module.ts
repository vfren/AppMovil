import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorLoginPage } from './proveedor-login.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorLoginPageRoutingModule {}
