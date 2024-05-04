import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-proveedor-login',
  templateUrl: './proveedor-login.page.html',
  styleUrls: ['./proveedor-login.page.scss'],
})
export class ProveedorLoginPage {
  correo_prov: string;
  contrasena_prov: string;

  constructor(private router: Router, private alertController: AlertController) {
    this.correo_prov = '';
    this.contrasena_prov = '';
  }

  login() {
    // agregar la lógica de autenticación para el proveedor
    if (this.correo_prov === 'ana.bel1212@gmail.com' && this.contrasena_prov === 'ana123') {
      // Si las credenciales son correctas, redirige al proveedor a la página principal
      this.router.navigate(['/crear-aviso-prove']);
    } else {
      // Si las credenciales son incorrectas, muestra una alerta
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesión',
      message: 'El correo electrónico o la contraseña son incorrectos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  forgotPassword() {
    //agregar la lógica para la recuperación de contraseña del proveedor
    console.log('Olvidaste tu contraseña...');
  }
}
