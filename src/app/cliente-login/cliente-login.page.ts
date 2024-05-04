import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
  styleUrls: ['./cliente-login.page.scss'],
})
export class ClienteLoginPage {
  correo_cli: string;
  contra_cli: string;

  constructor(private router: Router) {
    this.correo_cli = '';
    this.contra_cli = '';
  }

  login() {
    // Aquí deberías agregar la lógica de autenticación para el cliente
    if (this.correo_cli === 'perez.juan1222@gmail.com' && this.contra_cli === 'juan123') {
      // Si las credenciales son correctas, redirige al cliente a la página principal
      this.router.navigate(['/home']);
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error o realiza otra acción
      console.log('Credenciales incorrectas');
    }
  }

  forgotPassword() {
    // Aquí puedes agregar la lógica para la recuperación de contraseña del cliente
    console.log('Olvidaste tu contraseña...');
  }
}
