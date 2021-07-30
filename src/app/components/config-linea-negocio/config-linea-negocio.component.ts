import { Component, OnInit } from '@angular/core';
import { MycompanyModel } from '../../models/mycompany'
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/empresa.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-config-linea-negocio',
  templateUrl: './config-linea-negocio.component.html',
  styleUrls: ['./config-linea-negocio.component.css'],
  providers: [EmpresaService]
})
export class ConfigLineaNegocioComponent implements OnInit {

  private dataModel: MycompanyModel;
  listImageMongoDb = [];

  constructor(private _empresaService: EmpresaService, private _router: Router ) {
    this.dataModel = new MycompanyModel("", 0, 0, 0);
  }

  lista: any;
  listaElectronicos: any;
  listaServicios: any;
  //listaLineaSeccionada = new Array();
  listaLineaSeccionada: any[];
  // var miarray = new Array(4);

  ngOnInit(): void {
    if (this.listaLineaSeccionada == null) {
      this.listaLineaSeccionada = [];
    }

    this.lista = [
      //[0]
      {
        nameTable: 'abarrote',
        title: 'Abarrote',
        routerLink: "/agregar-abarrote",
        description: 'Frijol, Arroz, Leche, Café.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[1]
      {
        nameTable: 'alimento',
        title: 'Alimentos',
        routerLink: "agregar-alimentos",
        description: 'Para gato, perros, vacas, caballos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[2]
      {
        nameTable: 'accesorio_movil',
        title: 'Acesorios para celular',
        routerLink: "/agregar-accesorio-movil",
        description: 'Micas, protecor, llaveros, audifonos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[3]
      {
        nameTable: 'bicicleta',
        title: 'Bicicletas',
        routerLink: "/agregar-bicicleta",
        description: 'Bicletas, Triciclos.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[4]
      {
        nameTable: 'bodega',
        title: 'Bodega',
        routerLink: "/agregar-bodega",
        description: 'Refrescos, Modelo, Victoria.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[5]
      {
        nameTable: 'computadora',
        title: 'Computadora',
        routerLink: "/agregar-computado",
        description: 'Laptop, computadora de escritorio.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[6]
      {
        nameTable: 'celulares',
        title: 'Celular',
        routerLink: "/agregar-celular",
        description: 'Celulares como Samsung, Apple, Xiaomi , Huamwei.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[7]
      {
        nameTable: 'cerrajeria',
        title: 'LLaves',
        routerLink: "/agregar-cerrajeria",
        description: 'Duplicado de todo tipo de llaves.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[8]
      {
        nameTable: 'cama',
        title: 'Camas',
        routerLink: "/agregar-cama",
        description: 'cama, colchón.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[9]
      {
        nameTable: 'carpinteria',
        title: 'Carpinteria',
        routerLink: "/agregar-carpinteria",
        description: 'Tablas, Triplay, polines.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      //[10]
      {
        nameTable: 'carniceria',
        title: 'Carniceria',
        routerLink: "/agregar-carniceria",
        description: 'Carde de puerco, res, cecina, suadero.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'construccion',
        title: 'Construcción',
        routerLink: "/agregar-construccion",
        description: 'Cemento, multiplas, azulejos, herramientos, arena, graba.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fruteria',
        title: 'Fruteria',
        routerLink: "/agregar-fruteria",
        description: 'Sandia, Mango, Melón, Cebolla, aguacate.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'farmacia',
        title: 'Farmacia',
        routerLink: "/agregar-farmacia",
        description: 'Jarabe, Pañales, Vitaminas, productos de higiene.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fotos',
        title: 'Fotos',
        routerLink: "/agregar-fotografia",
        description: 'Servicio fotografico, video, Marcos para fotos',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ferreteria',
        title: 'Ferreteria',
        routerLink: "/agregar-ferreteria",
        description: 'Martillo, Lámina, carretilla, Pico, Pala.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'fierro',
        title: 'Acero',
        routerLink: "/agregar-acero",
        description: 'HSS, MONTEN , VIGA, Tubo galvanizo, Tubo para cerca.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
      ,
      {
        nameTable: 'floreria',
        title: 'Floreria',
        routerLink: "/agregar-floreria",
        description: 'Girasoles, Nochebuena, Orquídeas, Cempasúchitl.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'funeraria',
        title: 'Funeraria',
        routerLink: "/agregar-funeraria",
        description: 'Ataud, Cruz, Servicios embalsamiento, velorio',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'herreria',
        title: 'Herreria',
        routerLink: "/agregar-herreria",
        description: 'Puerta, Ventana, Portón',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'hivernadero',
        title: 'Hivernadero',
        routerLink: "/agregar-hivernadero",
        description: 'Plantas, flores, Macetas, Fertilizantes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'joyeria',
        title: 'Joyeria',
        routerLink: "/agregar-joyeria",
        description: 'Anillos, Cadenas, Relojes, Aretes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'muebleria',
        title: 'Muebleria',
        routerLink: "/agregar-muebleria",
        description: 'Mesas, Roperos, Camas, Mesas',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'moto',
        title: 'Moto',
        routerLink: "/agregar-moto",
        description: 'Motos',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'optica',
        title: 'Lentes',
        routerLink: "/agregar-optica",
        description: 'Lentes para sol, para leer.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'plomeria',
        title: 'Plomeria',
        routerLink: "/agregar-plomeria",
        description: 'Taza, Tubos, Pegamento, Tinaco, Bomba de agua.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'papeleria',
        title: 'Papeleria',
        routerLink: "/agregar-papeleria",
        description: 'Cuaderno, Lapiz, Goma, Regla, colores, Lapicero.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'pintura',
        title: 'Pintura',
        routerLink: "/agregar-pintura",
        description: 'Pintura, Brochas, Esmalte, Pintura para pisina.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'relojeria',
        title: 'Relojería',
        routerLink: "/agregar-relojeria",
        description: 'Reloj para niños, mujeres y hombre, reloj para el hogar.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ropa',
        title: 'Ropa',
        routerLink: "/agregar-ropa",
        description: 'Ropa para niños, mujer y hombre, pantalon etc.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'tela',
        title: 'Tela',
        routerLink: "/agregar-tela",
        description: 'Tela, hilo, agujas, Tela para tapizar',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'veladora',
        title: 'Veladora, Cohetes',
        routerLink: "/agregar-veladora",
        description: 'veladora, Libros bíblicos, Rosario, copal, aguardiente',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'electrodomenticos',
        title: 'Electrodomésticos',
        routerLink: "",
        description: 'Licuadora, Plancha, Refrigerador, Microonda',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
    ];

    this.listaServicios = [
      {
        nameTable: 'mecanico',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Mecánico',
        description: 'Cambio de aceite, llanta y bujía',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'optica',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Optica',
        description: 'Examén visual',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'odontologia',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Odontología',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades de los dientes',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'pediatria',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Pediatría',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades en los niños',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'consultorio_medico',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Consultorio médico',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades y malestares.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'ginecologo',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Ginecólogo',
        description: 'Estudio y tratamiento del aparato reproductor femenino.',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      },
      {
        nameTable: 'despacho_juridico',
        routerLink: "/agregar-servicio",
        arrayMongoDB: 'servicio',
        title: 'Despacho jurídico',
        description: 'Asuntos penales, tramites de .',
        cuadrado: true,
        image: '../../../assets/images/icon-tv.png'
      }
    ]
  }

  /**
   * 
   * @param valor nameTable
   * @param titleLinea  title
   * @param routerLink  routerLink
   */
  agregaItem(valor: string, titleLinea: string, routerLink: string) {

    if (valor == 'electrodomenticos') {
      this.listaLineaSeccionada.push({
        linea: "microonda",
        titulo_linea: "Microonda",
        routerLink: '/agregar-microonda'
      });

      this.listaLineaSeccionada.push({
        linea: "licuadora",
        titulo_linea: "Licuadora",
        routerLink: '/agregar-licuadora'
      });

      this.listaLineaSeccionada.push({
        linea: "plancha",
        titulo_linea: "Plancha",
        routerLink: '/agregar-plancha'
      });

      this.listaLineaSeccionada.push({
        linea: "refrigerador",
        titulo_linea: "Refrigerador",
        routerLink: '/agregar-refrigerador'
      });
    } else {

      this.listaLineaSeccionada.push({
        linea: valor,
        titulo_linea: titleLinea,
        routerLink: routerLink
      });
    }

    console.log(this.listaLineaSeccionada);
  }

  eliminarItem(valor) {

    if (valor == 'electrodomenticos') {

      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.linea === "microonda"
      });
      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.linea === "licuadora"
      });
      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.linea === "plancha"
      });
     
      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.linea === "refrigerador"
      });

      this.listaLineaSeccionada.splice(index, 1);

    } else {
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.linea === valor
      });
      this.listaLineaSeccionada.splice(index, 1);
    }

    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada


    console.log(this.listaLineaSeccionada);
  }

  cantidadMax = 2;
  /**
   * CAMBIA EL DIV EN CUADRADO O EN CIRCULO Y GUARDA LOS NOMBRE EN UN ARRAY
   * @param nombreCampo nombre que se le da a cada elemento para poder convertir el div en cuadrado o circulo con css
   * @param valor true = esta en cuadrado = false, esta en circulo
   * @param index posicion que tiene el elemento en la lista
   */

  seleccionar(nombreCampo, titulo_linea, routerLink, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(nombreCampo, titulo_linea, routerLink);
        this.lista[index].cuadrado = false;
      } else {
        Swal.fire("CANTIDAD MÁXIMO A SELECCIONAR",
          "Solo se le permite seleccionar " + this.cantidadMax + " tipos de linea",
          "info");
      }
    } else {
      this.eliminarItem(nombreCampo);
      this.lista[index].cuadrado = true;
    }

  }

  /**
   * CAMBIA EL DIV DE LOS SERVICIOS EN CUADRADO O EN CIRCULO Y GUARDA LOS NOMBRE EN UN ARRAY
   * @param nombreCampo nombre que se le da a cada elemento para poder convertir el div en cuadrado o circulo con css
   * @param valor true = esta en cuadrado = false, esta en circulo
   * @param index posicion que tiene el elemento en la lista
   */
  seleccionarServicio(nombreCampo, titulo_linea, routerLink, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(nombreCampo, titulo_linea, routerLink);
        this.listaServicios[index].cuadrado = false;
      } else {
        Swal.fire("CANTIDAD MÁXIMO A SELECCIONAR",
          "Solo se le permite seleccionar " + this.cantidadMax + " tipos de linea",
          "info");
      }
    } else {
      this.eliminarItem(nombreCampo);
      this.listaServicios[index].cuadrado = true;
    }
  }

  guardar() {
    if (this.listaLineaSeccionada.length > 0) {

      this._empresaService.updateLinea(this.listaLineaSeccionada).subscribe(
        response => {
          if(response.status == "success"){
            this._router.navigate(['/admin-negocio']);
          }
        },
        error => {

        }
      );
    } else {
      Swal.fire("Selecciona la linea",
        "Selecciona 1 o 2 lineas de producto que ofrece tu negocio",
        "error");
    }

  }
}

