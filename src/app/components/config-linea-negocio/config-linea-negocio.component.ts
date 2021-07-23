import { Component, OnInit } from '@angular/core';
import { ImgLineaNegocioService } from '../../services/mycompany/img_linea_negocio.service';
import { MycompanyModel } from '../../models/mycompany'


@Component({
  selector: 'app-config-linea-negocio',
  templateUrl: './config-linea-negocio.component.html',
  styleUrls: ['./config-linea-negocio.component.css'],
  providers: [ImgLineaNegocioService]
})
export class ConfigLineaNegocioComponent implements OnInit {

  private dataModel: MycompanyModel;
  listImageMongoDb = [];

  constructor(private _imgLineaNegocioService: ImgLineaNegocioService, ) {
    this.dataModel = new MycompanyModel("", 0, 0, 0);
  }

  lista: any;
  listaElectronicos: any;
  listaServicios: any;
  listaLineaSeccionada: [string];

  ngOnInit(): void {
    this.lista = [
      //[0]
      {
        nameTable: 'abarrote',
        title: 'Abarrote',
        description: 'Frijol, Arroz, Leche, Café.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[1]
      {
        nameTable: 'alimento',
        title: 'Alimentos',
        description: 'Para gato, perros, vacas, caballos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[2]
      {
        nameTable: 'accesorio_movil',
        title: 'Acesorios para celular',
        description: 'Micas, protecor, llaveros, audifonos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[3]
      {
        nameTable: 'bicicleta',
        title: 'Bicicletas',
        description: 'Bicletas, Triciclos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[4]
      {
        nameTable: 'bodega',
        title: 'Bodega',
        description: 'Refrescos, Modelo, Victoria.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[5]
      {
        nameTable: 'computadora',
        title: 'Computadora',
        description: 'Laptop, computadora de escritorio.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[6]
      {
        nameTable: 'celulares',
        title: 'Celular',
        description: 'Celulares como Samsung, Apple, Xiaomi , Huamwei.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[7]
      {
        nameTable: 'cerrajeria',
        title: 'LLaves',
        description: 'Duplicado de todo tipo de llaves.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[8]
      {
        nameTable: 'cama',
        title: 'Camas',
        description: 'cama, colchón.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[9]
      {
        nameTable: 'carpinteria',
        title: 'Carpinteria',
        description: 'Tablas, Triplay, polines.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[10]
      {
        nameTable: 'carniceria',
        title: 'Carniceria',
        description: 'Carde de puerco, res, cecina, suadero.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'construccion',
        title: 'Construcción',
        description: 'Cemento, multiplas, azulejos, herramientos, arena, graba.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fruteria',
        title: 'Fruteria',
        description: 'Sandia, Mango, Melón, Cebolla, aguacate.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'farmacia',
        title: 'Farmacia',
        description: 'Jarabe, Pañales, Vitaminas, productos de higiene.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fotos',
        title: 'Fotos',
        description: 'Servicio fotografico, video, Marcos para fotos',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ferreteria',
        title: 'Ferreteria',
        description: 'Martillo, Lámina, carretilla, Pico, Pala.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fierro',
        title: 'Acero',
        description: 'HSS, MONTEN , VIGA, Tubo galvanizo, Tubo para cerca.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
      ,
      {
        nameTable: 'floreria',
        title: 'Floreria',
        description: 'Girasoles, Nochebuena, Orquídeas, Cempasúchitl.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'funeraria',
        title: 'Funeraria',
        description: 'Ataud, Cruz, Servicios embalsamiento, velorio',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'herreria',
        title: 'Herreria',
        description: 'Puerta, Ventana, Portón',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'hivernadero',
        title: 'Hivernadero',
        description: 'Plantas, flores, Macetas, Fertilizantes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'joyeria',
        title: 'Joyeria',
        description: 'Anillos, Cadenas, Relojes, Aretes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'muebleria',
        title: 'Muebleria',
        description: 'Mesas, Roperos, Camas, Mesas',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'moto',
        title: 'Moto',
        description: 'Motos',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'optica',
        title: 'Lentes',
        description: 'Lentes para sol, para leer.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'plomeria',
        title: 'Plomeria',
        description: 'Taza, Tubos, Pegamento, Tinaco, Bomba de agua.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'papeleria',
        title: 'Papeleria',
        description: 'Cuaderno, Lapiz, Goma, Regla, colores, Lapicero.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'pintura',
        title: 'Pintura',
        description: 'Pintura, Brochas, Esmalte, Pintura para pisina.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'relojeria',
        title: 'Reloj',
        description: 'Reloj para niños, mujeres y hombre, reloj para el hogar.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ropa',
        title: 'Ropa',
        description: 'Ropa para niños, mujer y hombre, pantalon etc.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'tela',
        title: 'Tela',
        description: 'Tela, hilo, agujas, Tela para tapizar',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'veladora',
        title: 'Veladora, Cohetes',
        description: 'veladora, Libros bíblicos, Rosario, copal, aguardiente',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'electronicos',
        title: 'Electrodomésticos',
        description: 'Licuadora, Plancha, Lavadora, Refrigerador, Estufa, Microonda',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
    ];

    this.listaServicios = [
      {
        nameTable: 'mecanico',
        arrayMongoDB: 'servicio',
        title: 'Mecánico',
        description: 'Cambio de aceite, llanta y bujía',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'optica',
        arrayMongoDB: 'servicio',
        title: 'Optica',
        description: 'Examén visual',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'odontologia',
        arrayMongoDB: 'servicio',
        title: 'Odontología',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades de los dientes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'pediatria',
        arrayMongoDB: 'servicio',
        title: 'Pediatría',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades en los niños',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'consultorio_medico',
        arrayMongoDB: 'servicio',
        title: 'Consultorio médico',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades y malestares.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ginecologo',
        arrayMongoDB: 'servicio',
        title: 'Ginecólogo',
        description: 'Estudio y tratamiento del aparato reproductor femenino.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'despacho_juridico',
        arrayMongoDB: 'servicio',
        title: 'Despacho jurídico',
        description: 'Asuntos penales, tramites de .',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
    ]
  }

  agregaItem(valor:string){
    console.log("agregando" , valor);
    this.listaLineaSeccionada.push(valor);
  }
  eliminarItem(valor:string){
    
    console.log("eliminado" , valor);
    var index = this.listaLineaSeccionada.findIndex(function (item, i) {
      return item === valor
    });
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.listaLineaSeccionada.splice(index, 1);
  }

  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  seleccionar(nombreCampo, valor, index) {
    if (nombreCampo == "abarrote") {
      if (valor == true) {
        this.agregaItem(nombreCampo);
        this.lista[index].cuadrado = false;
      } else {
        this.eliminarItem(nombreCampo);
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "alimento") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "accesorio_movil") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "bicicleta") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "bodega") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "computadora") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "celulares") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "cerrajeria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "cama") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "carpinteria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "carniceria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "construccion") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "fruteria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "farmacia") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "fotos") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "ferreteria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "fierro") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "floreria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "funeraria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "herreria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "hivernadero") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "joyeria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "muebleria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "moto") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "optica") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "plomeria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "papeleria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "pintura") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "relojeria") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "ropa") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "tela") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "veladora") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }
    if (nombreCampo == "electronicos") {
      if (valor == true) {
        this.lista[index].cuadrado = false;
      } else {
        this.lista[index].cuadrado = true;
      }
    }

    console.log(this.listaLineaSeccionada);
  }

  seleccionarServicio(nombreCampo, valor, index) {
    if (nombreCampo == "mecanico") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "optica") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "odontologia") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "pediatria") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "consultorio_medico") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "ginecologo") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
    if (nombreCampo == "despacho_juridico") {
      if (valor == true) {
        this.listaServicios[index].cuadrado = false;
      } else {
        this.listaServicios[index].cuadrado = true;
      }
    }
  }

}

  