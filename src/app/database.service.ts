import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseObj!: SQLiteObject;

  constructor(private sqlite: SQLite) { 
    this.createDatabase(); // Llamar a createDatabase() en el constructor
  }

  async createDatabase() {
    try {
      const db = await this.sqlite.create({
        name: "aplicaciondb",
        location: "default",
      });
      this.databaseObj = db;
      await this.createTables(); // Llamar a createTables() después de crear la base de datos
    } catch (error) {
      console.error("Error al crear la base de datos:", error);
    }
  }

  async createTables() {
    try {
      await this.createClienteTable();
      await this.createAnuncioTable();
      await this.createProveedorTable();
    } catch (error) {
      console.error("Error al crear las tablas:", error);
    }
  }

async createClienteTable() {
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS cliente_table (
        id_cli INTEGER PRIMARY KEY AUTOINCREMENT,
        rut_cli TEXT,
        dv_cli TEXT,
        nombre_cli TEXT,
        apellido_cli TEXT,
        edad_cli INTEGER,
        correo_cli TEXT,
        telefono_cli TEXT,
        region_cli TEXT,
        comuna_cli TEXT,
        imagen_perfil_cli TEXT,
        fecha_nac_cli DATE,
        direccion_cli TEXT,
        contrasena_cli TEXT
      )`, []
    );
  }

  async createAnuncioTable() {
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS anuncio_table (
        id_anuncio INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo_anuncio TEXT,
        descrip_anuncio TEXT,
        rut_asociado_al_anuncio TEXT,
        valoracion_prove INTEGER,
        pretension_renta_proveedor DECIMAL(10, 2),
        salario_ofrecidoporel_cliente DECIMAL(10, 2)
      )`, []
    );
  }

  async createProveedorTable() {
    await this.databaseObj.executeSql(
      `CREATE TABLE IF NOT EXISTS prov_table (
        id_prov INTEGER PRIMARY KEY AUTOINCREMENT,
        rut_prov TEXT,
        dv_prov TEXT,
        nombre_prov TEXT,
        apellido_prov TEXT,
        edad_prov INTEGER,
        correo_prov TEXT,
        telefono_prov TEXT,
        region_prov TEXT,
        comuna_prov TEXT,
        imagen_perfil_prov TEXT,
        fecha_nac_prov DATE,
        direccion_prov TEXT,
        contrasena_prov TEXT,
        valoracion_prov INTEGER
      )`, []
    );
  }

  async addCliente(
    rut_cli: string,
    dv_cli: string,
    nombre_cli: string,
    apellido_cli: string,
    edad_cli: number,
    correo_cli: string,
    telefono_cli: string,
    region_cli: string,
    comuna_cli: string,
    imagen_perfil_cli: string,
    fecha_nac_cli: string,
    direccion_cli: string,
    contrasena_cli: string
  ) {
    return this.databaseObj.executeSql(
      `INSERT INTO cliente_table (
        rut_cli, dv_cli, nombre_cli, apellido_cli, edad_cli, correo_cli, telefono_cli,
        region_cli, comuna_cli, imagen_perfil_cli, fecha_nac_cli, direccion_cli, contrasena_cli
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [rut_cli, dv_cli, nombre_cli, apellido_cli, edad_cli, correo_cli, telefono_cli,
        region_cli, comuna_cli, imagen_perfil_cli, fecha_nac_cli, direccion_cli, contrasena_cli]
    ).then(() => {
      return "Cliente agregado correctamente";
    }).catch((error) => {
      return "Error al agregar cliente: " + JSON.stringify(error);
    });
  }

  async CrerAnuncio(
    descrip_anuncio: string,
    titulo_anuncio: string,
    rut_asociado_al_anuncio: string,
    valoracion_prove: number,
    pretension_renta_proveedor: number,
    salario_ofrecidoporel_cliente: number
  ) {
    try {
      if (!this.databaseObj) {
        throw new Error("La base de datos no está inicializada");
      }
      await this.databaseObj.executeSql(
        `INSERT INTO anuncio_table (
          titulo_anuncio, descrip_anuncio, rut_asociado_al_anuncio,
          valoracion_prove, pretension_renta_proveedor, salario_ofrecidoporel_cliente
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [titulo_anuncio, descrip_anuncio, rut_asociado_al_anuncio,
          valoracion_prove, pretension_renta_proveedor, salario_ofrecidoporel_cliente]
      );
      return "Anuncio agregado correctamente";
    } catch (error) {
      console.error("Error al agregar anuncio:", error);
      return "Error al agregar anuncio: " + JSON.stringify(error);
    }
  }
}
