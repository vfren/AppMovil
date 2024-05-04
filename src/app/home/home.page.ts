import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irALogin(tipo: string) {
    if (tipo === 'cliente') {
      this.router.navigate(['/cliente-login']);
    } else if (tipo === 'proveedor') {
      this.router.navigate(['/proveedor-login']);
    }
  }

}

