import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAvisoProvePage } from './crear-aviso-prove.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAvisoProvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAvisoProvePageRoutingModule {}
