import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
  styleUrls: ['./cliente-login.page.scss'],
})
export class ClienteLoginPage {
  correo_cli: string;
  contrasena_cli: string;

  constructor(private router: Router, private alertController: AlertController) {
    this.correo_cli = '';
    this.contrasena_cli = '';
  }

  login() {
    console.log("Correo: ", this.correo_cli);
    console.log("Contraseña: ", this.contrasena_cli);

    //lógica de autenticación para el cliente
    if (this.correo_cli === 'perez.juan1222@gmail.com' && this.contrasena_cli === 'juan123') {
      // Si las credenciales son correctas, redirige al cliente
      this.router.navigate(['/crear-aviso']);
    } else {
      console.log("Credenciales incorrectas");
      // Si las credenciales son incorrectas, muestra la alerta
      this.presentAlert();
    }
  }

  forgotPassword() {
    //agregar la lógica para la recuperación de contraseña del cliente
    console.log('Olvidaste tu contraseña...');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesión',
      message: 'El correo electrónico o la contraseña son incorrectos.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

