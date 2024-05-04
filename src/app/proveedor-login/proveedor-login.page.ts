import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-login',
  templateUrl: './proveedor-login.page.html',
  styleUrls: ['./proveedor-login.page.scss'],
})
export class ProveedorLoginPage {
  correo_prov: string;
  contra_prov: string;

  constructor(private router: Router) {
    this.correo_prov = '';
    this.contra_prov = '';
  }

  login() {
    // Aquí deberías agregar la lógica de autenticación para el proveedor
    if (this.correo_prov === 'ana.bel1212@gmail.com' && this.contra_prov === 'ana123') {
      // Si las credenciales son correctas, redirige al proveedor a la página principal
      this.router.navigate(['/home']);
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error o realiza otra acción
      console.log('Credenciales incorrectas');
    }
  }

  forgotPassword() {
    // Aquí puedes agregar la lógica para la recuperación de contraseña del proveedor
    console.log('Olvidaste tu contraseña...');
  }
}
