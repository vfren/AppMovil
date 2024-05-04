import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisosDeClientesPage } from './avisos-de-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: AvisosDeClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosDeClientesPageRoutingModule {}
