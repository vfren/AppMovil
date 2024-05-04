import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos-de-clientes',
  templateUrl: './avisos-de-clientes.page.html',
  styleUrls: ['./avisos-de-clientes.page.scss'],
})
export class AvisosDeClientesPage implements OnInit {
  anunciosClientes: any[]; // Suponiendo que tienes un array de anuncios para mostrar

  constructor() {     
    this.anunciosClientes = [];
  }

  ngOnInit() {
    // cargar los anuncios creados por los clientes
    //  llamada a una API o cargar los datos desde algún servicio
    // Por ahora, los datos se asumen que están disponibles en this.anunciosClientes
    this.anunciosClientes = [
      { titulo: 'Anuncio 1', descripcion: 'Descripción del anuncio 1', salario: 1000 },
      { titulo: 'Anuncio 2', descripcion: 'Descripción del anuncio 2', salario: 2000 },
      
    ];
  }
}
