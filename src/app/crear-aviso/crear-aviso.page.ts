import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../database.service';



@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss'],
})
export class CrearAvisoPage {
  titulo_anuncio: string;
  descrip_anuncio: string;
  salario_ofrecidoporel_cliente: number;
  region: string;
  comuna: string;

  regiones: { [key: string]: string[] } = {
    region1: ['Alhué', 'Buin', 'Calera de Tango', 'Cerrillos', 'Cerro Navia', 'Colina', 'Conchalí', 'Curacaví', 'El Bosque', 'El Monte', 'Estación Central',
              'Huechuraba', 'Independencia', 'Isla de Maipo', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Lampa', 'Las Condes', 
              'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'María Pinto', 'Melipilla', 'Ñuñoa', 'Padre Hurtado', 'Paine', 'Pedro Aguirre Cerda', 
              'Peñaflor', 'Peñalolén', 'Pirque', 'Providencia', 'Pudahuel', 'Puente Alto', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Bernardo', 
              'San Joaquín', 'San José de Maipo', 'San Miguel', 'San Pedro', 'San Ramón', 'Santiago', 'Talagante', 'Tiltil', 'Vitacura'],
    region2: ['Arica', 'Camarones', 'General Lagos', 'Putre'],
    region3: ['Camiña', 'Colchane', 'Huara', 'Iquique', 'Pica', 'Pozo Almonte'],
    region4: ['Antofagasta', 'Calama', 'María Elena', 'Mejillones', 'Ollagüe', 'San Pedro de Atacama',
              'Sierra Gorda', 'Taltal', 'Tocopilla'],
    region5: ['Alto del Carmen', 'Caldera', 'Chañaral', 'Copiapó', 'Diego de Almagro', 'Freirina', 
              'Huasco', 'Tierra Amarilla', 'Vallenar'],
    region6: ['Andacollo', 'Canela', 'Combarbalá', 'Coquimbo', 'Illapel', 'La Higuera', 'La Serena', 'Los Vilos', 'Monte Patria', 'Ovalle', 'Paiguano', 'Punitaqui',
              'Río Hurtado', 'Salamanca', 'Vicuña'],
    region7: ['Algarrobo', 'Cabildo', 'Calera', 'Calle Larga', 'Cartagena', 'Casablanca', 'Catemu', 'Concón', 'El Quisco', 'El Tabo', 'Hijuelas', 'Isla de Pascua', 
              'Juan Fernández', 'La Cruz', 'La Ligua', 'Limache', 'Llaillay', 'Los Andes', 'Nogales', 'Olmué', 'Panquehue', 'Papudo', 'Petorca', 'Puchuncaví', 
              'Putaendo', 'Quillota', 'Quilpué', 'Quintero', 'Rinconada', 'San Antonio', 'San Esteban', 'San Felipe', 'Santa María', 'Santo Domingo', 'Valparaíso', 
              'Villa Alemana', 'Viña del Mar', 'Zapallar'],
    region8: ['Chépica', 'Chimbarongo', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'La Estrella', 'Las Cabras', 'Litueche', 'Lolol', 'Machalí', 
              'Malloa', 'Marchihue', 'Mostazal', 'Nancagua', 'Navidad', 'Olivar', 'Palmilla', 'Paredones', 'Peralillo', 'Peumo', 'Pichidegua', 'Pichilemu', 
              'Placilla', 'Pumanque', 'Quinta de Tilcoco', 'Rancagua', 'Rengo', 'Requínoa', 'San Fernando', 'San Francisco de Mostazal', 
              'San Vicente de Tagua Tagua', 'Santa Cruz'],
    region9: ['Cauquenes', 'Chanco', 'Colbún', 'Constitución', 'Curepto', 'Curicó', 'Empedrado', 'Hualañé', 'Licantén', 'Linares', 'Longaví', 'Maule', 'Molina', 
              'Parral', 'Pelarco', 'Pelluhue', 'Pencahue', 'Rauco', 'Retiro', 'Romeral', 'Río Claro', 'Sagrada Familia', 'San Clemente', 'San Javier', 
              'San Rafael', 'Talca', 'Teno', 'Vichuquén', 'Villa Alegre', 'Yerbas Buenas'],
    region10: ['Bulnes', 'Chillán', 'Chillán Viejo', 'Cobquecura', 'Coelemu', 'Coihueco', 'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo', 
              'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'Treguaco', 'Yungay'],
    region11: ['Alto Biobío', 'Antuco', 'Arauco', 'Bulnes', 'Cabrero', 'Cañete', 'Chiguayante', 'Chillán', 'Chillán Viejo', 'Cobquecura', 'Coelemu', 
              'Coihueco', 'Concepción', 'Contulmo', 'Coronel', 'Curanilahue', 'El Carmen', 'Florida', 'Hualpén', 'Hualqui', 'Laja', 'Lebu', 'Los Álamos', 
              'Los Ángeles', 'Lota', 'Mulchén', 'Nacimiento', 'Negrete', 'Ninhue', 'Pemuco', 'Penco', 'Pinto', 'Portezuelo', 'Quilaco', 'Quilleco', 'Quillón', 
              'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'San Pedro de la Paz', 'Santa Bárbara', 'Santa Juana', 
              'Talcahuano', 'Tirúa', 'Tomé', 'Treguaco', 'Tucapel', 'Yumbel', 'Yungay'],
    region12: ['Angol', 'Carahue', 'Cholchol', 'Collipulli', 'Cunco', 'Curacautín', 'Curarrehue', 'Ercilla', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 
              'Loncoche', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 
              'Purén', 'Renaico', 'Saavedra', 'Temuco', 'Teodoro Schmidt', 'Toltén', 'Traiguén', 'Victoria', 'Vilcún', 'Villarrica'],
    region13: ['Corral', 'Futrono', 'La Unión', 'Lago Ranco', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'Río Bueno', 'Valdivia'],
    region14: ['Ancud', 'Calbuco', 'Castro', 'Chaitén', 'Chonchi', 'Cochamó', 'Curaco de Vélez', 'Dalcahue', 'Fresia', 'Frutillar', 'Futaleufú', 'Hualaihué', 
              'Llanquihue', 'Los Muermos', 'Maullín', 'Osorno', 'Palena', 'Puerto Montt', 'Puerto Octay', 'Puerto Varas', 'Puqueldón', 'Purranque', 'Puyehue', 
              'Queilén', 'Quellón', 'Quemchi', 'Quinchao', 'Río Negro', 'San Juan de la Costa', 'San Pablo'],
    region15: ['Aisén', 'Chile Chico', 'Cisnes', 'Cochrane', 'Coyhaique', 'Guaitecas', 'Lago Verde', 'O Higgins', 'Río Ibáñez', 'Tortel'],
    region16: ['Cabo de Hornos', 'Laguna Blanca', 'Natales', 'Porvenir', 'Primavera', 'Punta Arenas', 'Río Verde', 'San Gregorio', 
              'Timaukel', 'Torres del Paine']
  };

  constructor(private DatabaseService: DatabaseService, private navCtrl: NavController) {
    this.titulo_anuncio = '';
    this.descrip_anuncio = '';
    this.salario_ofrecidoporel_cliente = 0;
    this.region = '';
    this.comuna = '';
  }


  
  guardarAviso() {
    // Guardar los datos del aviso en la base de datos
    const salario = parseFloat(this.salario_ofrecidoporel_cliente.toString());
    this.DatabaseService.CrerAnuncio(this.descrip_anuncio, this.titulo_anuncio, 'rut_del_cliente', 0, salario, 0)
      .then((response) => {
        console.log(response); // Muestra el mensaje de éxito en la consola
        // Realiza cualquier acción adicional, como navegar a otra página
        this.navCtrl.navigateForward('/avisos-de-clientes'); 
      })
      .catch((error) => {
        console.error(error); // Muestra el mensaje de error en la consola
        
      });
  }
  

  onRegionChange() {
    // realizar acciones adicionales cuando cambia la región, como cargar las comunas correspondientes
    console.log('Región seleccionada:', this.region);
  }

  formatSalary(event: any) {
    // Obtener el valor del salario ingresado por el usuario
    let salaryValue = event.target.value;
  
    // Eliminar cualquier punto existente para evitar problemas de formato
    salaryValue = salaryValue.replace(/\./g, '');
  
    // Aplicar el formato de miles con un punto separador cada tres dígitos
    salaryValue = salaryValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Actualiza el valor del salario con el formato aplicado
    this.salario_ofrecidoporel_cliente = salaryValue;
  }
}
