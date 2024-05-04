import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliente-login',
    loadChildren: () => import('./cliente-login/cliente-login.module').then( m => m.ClienteLoginPageModule)
  },
  {
    path: 'proveedor-login',
    loadChildren: () => import('./proveedor-login/proveedor-login.module').then( m => m.ProveedorLoginPageModule)
  },
  {
    path: 'crear-aviso',
    loadChildren: () => import('./crear-aviso/crear-aviso.module').then( m => m.CrearAvisoPageModule)
  },
  {
    path: 'avisos-de-clientes',
    loadChildren: () => import('./avisos-de-clientes/avisos-de-clientes.module').then( m => m.AvisosDeClientesPageModule)
  },
  {
    path: 'crear-aviso-prove',
    loadChildren: () => import('./crear-aviso-prove/crear-aviso-prove.module').then( m => m.CrearAvisoProvePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
