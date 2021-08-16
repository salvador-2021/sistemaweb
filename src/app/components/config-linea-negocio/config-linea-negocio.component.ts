import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistrarEmpresaService } from '../../services/mycompany/registrar_empresa.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-config-linea-negocio',
  templateUrl: './config-linea-negocio.component.html',
  styleUrls: ['./config-linea-negocio.component.css'],
  providers: [RegistrarEmpresaService]
})
export class ConfigLineaNegocioComponent implements OnInit {


  listImageMongoDb = [];

  constructor(private _empresaService: RegistrarEmpresaService, private _router: Router, private _activatedRoute: ActivatedRoute) {

  }

  lista: any;
  listaElectronicos: any;
  listaServicios: any;
  //listaLineaSeccionada = new Array();
  listaLineaSeccionada: any[];
  // var miarray = new Array(4);

  _idnegocio: string = "";
  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idnegocio = _id;
      }
    });

    if (this.listaLineaSeccionada == null) {
      this.listaLineaSeccionada = [];
    }

    this.lista = [
      //[0]
      {
        nameTable: 'abarrote', //controla el efecto click sobre el elemento seleccionado
        arrayMongo: 'abarrote', //titulo del elemento 
        title: 'Abarrote', //titulo del elemento 
        routerLink: "/negocio/agregar-abarrote", //ruta del componente
        description: 'Frijol, Arroz, Leche, Café.', //descripcion del elemento
        cuadrado: true, //cirulo o cuadrado
        image: '../../../assets/images/icon-abarrote.png' //imagen del elemento
      },
      //[1]
      {
        nameTable: 'alimento',
        arrayMongo: 'alimento',
        title: 'Alimentos',
        routerLink: "/negocio/agregar-alimentos",
        description: 'Para gato, perros, vacas, caballos.',
        cuadrado: true,
        image: '../../../assets/images/icon-alimento.png'
      },
      //[2]
      {
        nameTable: 'accesorio_movil',
        arrayMongo: 'accesorio_movil',
        title: 'Acesorios para celular',
        routerLink: "/negocio/agregar-accesorio-movil",
        description: 'Micas, protecor, llaveros, audifonos.',
        cuadrado: true,
        image: '../../../assets/images/icon-accesorios-cel.png'
      },
      //[3]
      {
        nameTable: 'bicicleta',
        arrayMongo: 'bicicleta',
        title: 'Bicicletas',
        routerLink: "/negocio/agregar-bicicleta",
        description: 'Bicletas, Triciclos.',
        cuadrado: true,
        image: '../../../assets/images/icon-bicicleta.png'
      },
      //[4]
      {
        nameTable: 'bodega',
        arrayMongo: 'bodega',
        title: 'Bodega',
        routerLink: "/negocio/agregar-bodega",
        description: 'Refrescos, Modelo, Victoria.',
        cuadrado: true,
        image: '../../../assets/images/icon-bodega.png'
      },
      //[5]
      {
        nameTable: 'computadora',
        arrayMongo: 'computadora',
        title: 'Computadora',
        routerLink: "/negocio/agregar-computado",
        description: 'Laptop, computadora de escritorio.',
        cuadrado: true,
        image: '../../../assets/images/icon-computadora.png'
      },
      //[6]
      {
        nameTable: 'celulares',
        arrayMongo: 'celulares',
        title: 'Celular',
        routerLink: "/negocio/agregar-celular",
        description: 'Celulares como Samsung, Apple, Xiaomi , Huamwei.',
        cuadrado: true,
        image: '../../../assets/images/icon-celular.png'
      },
      //[7]
      {
        nameTable: 'cerrajeria',
        arrayMongo: 'cerrajeria',
        title: 'LLaves',
        routerLink: "/negocio/agregar-cerrajeria",
        description: 'Duplicado de todo tipo de llaves.',
        cuadrado: true,
        image: '../../../assets/images/icon-llaves.png'
      },
      //[8]
      {
        nameTable: 'cama',
        arrayMongo: 'cama',
        title: 'Camas',
        routerLink: "/negocio/agregar-cama",
        description: 'cama, colchón.',
        cuadrado: true,
        image: '../../../assets/images/icon-cama.png'
      },
      //[9]
      {
        nameTable: 'carpinteria',
        arrayMongo: 'carpinteria',
        title: 'Carpinteria',
        routerLink: "/negocio/agregar-carpinteria",
        description: 'Tablas, Triplay, polines.',
        cuadrado: true,
        image: '../../../assets/images/icon-carpinteria.png'
      },
      //[10]
      {
        nameTable: 'carniceria',
        arrayMongo: 'carniceria',
        title: 'Carniceria',
        routerLink: "/negocio/agregar-carniceria",
        description: 'Carde de puerco, res, cecina, suadero.',
        cuadrado: true,
        image: '../../../assets/images/icon-carniceria.png'
      },
      {
        nameTable: 'construccion',
        arrayMongo: 'construccion',
        title: 'Construcción',
        routerLink: "/negocio/agregar-construccion",
        description: 'Cemento, multiplas, azulejos, herramientos, arena, graba.',
        cuadrado: true,
        image: '../../../assets/images/icon-construccion.png'
      },
      {
        nameTable: 'fruteria',
        arrayMongo: 'fruteria',
        title: 'Fruteria',
        routerLink: "/negocio/agregar-fruteria",
        description: 'Sandia, Mango, Melón, Cebolla, aguacate.',
        cuadrado: true,
        image: '../../../assets/images/icon-fruteria.png'
      },
      {
        nameTable: 'farmacia',
        arrayMongo: 'farmacia',
        title: 'Farmacia',
        routerLink: "/negocio/agregar-farmacia",
        description: 'Jarabe, Pañales, Vitaminas, productos de higiene.',
        cuadrado: true,
        image: '../../../assets/images/icon-farmacia.png'
      },
      {
        nameTable: 'fotos',
        arrayMongo: 'fotos',
        title: 'Fotos',
        routerLink: "/negocio/agregar-fotografia",
        description: 'Servicio fotografico, video, Marcos para fotos',
        cuadrado: true,
        image: '../../../assets/images/icon-fotos.png'
      },
      {
        nameTable: 'ferreteria',
        arrayMongo: 'ferreteria',
        title: 'Ferreteria',
        routerLink: "/negocio/agregar-ferreteria",
        description: 'Martillo, Lámina, carretilla, Pico, Pala.',
        cuadrado: true,
        image: '../../../assets/images/icon-ferreteria.png'
      },
      {
        nameTable: 'fierro',
        arrayMongo: 'fierro',
        title: 'Acero',
        routerLink: "/negocio/agregar-acero",
        description: 'HSS, MONTEN , VIGA, Tubo galvanizo, Tubo para cerca.',
        cuadrado: true,
        image: '../../../assets/images/icon-acero.png'
      }
      ,
      {
        nameTable: 'floreria',
        arrayMongo: 'floreria',
        title: 'Floreria',
        routerLink: "/negocio/agregar-floreria",
        description: 'Girasoles, Nochebuena, Orquídeas, Cempasúchitl.',
        cuadrado: true,
        image: '../../../assets/images/icon-floreria.png'
      },
      {
        nameTable: 'funeraria',
        arrayMongo: 'funeraria',
        title: 'Funeraria',
        routerLink: "/negocio/agregar-funeraria",
        description: 'Ataud, Cruz, Servicios embalsamiento, velorio',
        cuadrado: true,
        image: '../../../assets/images/icon-funeraria.png'
      },
      {
        nameTable: 'herreria',
        arrayMongo: 'herreria',
        title: 'Herreria',
        routerLink: "/negocio/agregar-herreria",
        description: 'Puerta, Ventana, Portón',
        cuadrado: true,
        image: '../../../assets/images/icon-herreria.png'
      },
      {
        nameTable: 'hivernadero',
        arrayMongo: 'hivernadero',
        title: 'Hivernadero',
        routerLink: "/negocio/agregar-hivernadero",
        description: 'Plantas, flores, Macetas, Fertilizantes',
        cuadrado: true,
        image: '../../../assets/images/icon-hivernadero.png'
      },
      {
        nameTable: 'joyeria',
        arrayMongo: 'joyeria',
        title: 'Joyeria',
        routerLink: "/negocio/agregar-joyeria",
        description: 'Anillos, Cadenas, Relojes, Aretes',
        cuadrado: true,
        image: '../../../assets/images/icon-joyeria.png'
      },
      {
        nameTable: 'muebleria',
        arrayMongo: 'muebleria',
        title: 'Muebleria',
        routerLink: "/negocio/agregar-muebleria",
        description: 'Mesas, Roperos, Camas, Mesas',
        cuadrado: true,
        image: '../../../assets/images/icon-mueble.png'
      },
      {
        nameTable: 'moto',
        arrayMongo: 'moto',
        title: 'Moto',
        routerLink: "/negocio/agregar-moto",
        description: 'Motos',
        cuadrado: true,
        image: '../../../assets/images/icon-moto.png'
      },
      {
        nameTable: 'optica',
        arrayMongo: 'optica',
        title: 'Lentes',
        routerLink: "/negocio/agregar-optica",
        description: 'Lentes para sol, para leer.',
        cuadrado: true,
        image: '../../../assets/images/icon-optica.png'
      },
      {
        nameTable: 'plomeria',
        arrayMongo: 'plomeria',
        title: 'Plomeria',
        routerLink: "/negocio/agregar-plomeria",
        description: 'Taza, Tubos, Pegamento, Tinaco, Bomba de agua.',
        cuadrado: true,
        image: '../../../assets/images/icon-plomeria.png'
      },
      {
        nameTable: 'papeleria',
        arrayMongo: 'papeleria',
        title: 'Papeleria',
        routerLink: "/negocio/agregar-papeleria",
        description: 'Cuaderno, Lapiz, Goma, Regla, colores, Lapicero.',
        cuadrado: true,
        image: '../../../assets/images/icon-papeleria.png'
      },
      {
        nameTable: 'pintura',
        arrayMongo: 'pintura',
        title: 'Pintura',
        routerLink: "/negocio/agregar-pintura",
        description: 'Pintura, Brochas, Esmalte, Pintura para pisina.',
        cuadrado: true,
        image: '../../../assets/images/icon-pintura.png'
      },
      {
        nameTable: 'relojeria',
        arrayMongo: 'relojeria',
        title: 'Relojería',
        routerLink: "/negocio/agregar-relojeria",
        description: 'Reloj para niños, mujeres y hombre, reloj para el hogar.',
        cuadrado: true,
        image: '../../../assets/images/icon-relojeria.png'
      },
      {
        nameTable: 'ropa',
        arrayMongo: 'ropa',
        title: 'Ropa',
        routerLink: "/negocio/agregar-ropa",
        description: 'Ropa para niños, mujer y hombre, pantalon etc.',
        cuadrado: true,
        image: '../../../assets/images/icon-ropa.png'
      },
      {
        nameTable: 'zapatos',
        arrayMongo: 'zapatos',
        title: 'Calzado',
        routerLink: "/negocio/agregar-calzado",
        description: 'zapatos para niños, mujer y hombre',
        cuadrado: true,
        image: '../../../assets/images/icon-calzado.png'
      },
      {
        nameTable: 'tela',
        arrayMongo: 'tela',
        title: 'Tela',
        routerLink: "/negocio/agregar-tela",
        description: 'Tela, hilo, agujas, Tela para tapizar',
        cuadrado: true,
        image: '../../../assets/images/icon-tela.png'
      },
      {
        nameTable: 'veladora',
        arrayMongo: 'veladora',
        title: 'Veladora, Cohetes',
        routerLink: "/negocio/agregar-veladora",
        description: 'veladora, Libros bíblicos, Rosario, copal, aguardiente',
        cuadrado: true,
        image: '../../../assets/images/icon-veladoras.png'
      },
      {
        nameTable: 'electrodomenticos',
        arrayMongo: 'electrodomenticos',
        title: 'Electrodomésticos',
        routerLink: "",
        description: 'Licuadora, Plancha, Refrigerador, Microonda',
        cuadrado: true,
        image: '../../../assets/images/icon-electrodomesticos.png'
      }
    ];

    this.listaServicios = [
      {
        nameTable: 'mecanico',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Mecánico',
        description: 'Cambio de aceite, llanta y bujía',
        cuadrado: true,
        image: '../../../assets/images/icon-mecanico.png'
      },
      {
        nameTable: 'optica-servicio',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Óptica',
        description: 'Examén visual',
        cuadrado: true,
        image: '../../../assets/images/icon-optica.png'
      },
      {
        nameTable: 'odontologia',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Odontología',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades de los dientes',
        cuadrado: true,
        image: '../../../assets/images/icon-odontologia.png'
      },
      {
        nameTable: 'pediatria',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Pediatría',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades en los niños',
        cuadrado: true,
        image: '../../../assets/images/icon-pediatria.png'
      },
      {
        nameTable: 'consultorio_medico',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Consultorio médico',
        description: 'Diagnóstico, prevención y tratamiento de enfermedades y malestares.',
        cuadrado: true,
        image: '../../../assets/images/icon-consultorio_medico.png'
      },
      {
        nameTable: 'ginecologo',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Ginecólogo',
        description: 'Estudio y tratamiento del aparato reproductor femenino.',
        cuadrado: true,
        image: '../../../assets/images/icon-ginecologo.png'
      },
      {
        nameTable: 'despacho_juridico',
        arrayMongo: 'servicios',
        routerLink: "/negocio/agregar-servicio",
        title: 'Despacho jurídico',
        description: 'Asuntos penales, tramites de .',
        cuadrado: true,
        image: '../../../assets/images/icon-despacho.png'
      }
    ]
  }


  /**
   * 
   * @param nameTable nameTable
   * @param titleLinea  title
   * @param routerLink  routerLink
   */
  agregaItem(arrayMongo, nameTable: string, titleLinea: string, routerLink: string) {

    if (nameTable == 'electrodomenticos') {
      this.listaLineaSeccionada.push({
        linea: "microonda",
        nameTable: "microonda",
        titulo_linea: "Microonda",
        routerLink: '/negocio/agregar-microonda'
      });

      this.listaLineaSeccionada.push({
        linea: "licuadora",
        nameTable: "licuadora",
        titulo_linea: "Licuadora",
        routerLink: '/negocio/agregar-licuadora'
      });

      this.listaLineaSeccionada.push({
        linea: "plancha",
        nameTable: "plancha",
        titulo_linea: "Plancha",
        routerLink: '/negocio/agregar-plancha'
      });

      this.listaLineaSeccionada.push({
        linea: "refrigerador",
        nameTable: "refrigerador",
        titulo_linea: "Refrigerador",
        routerLink: '/negocio/agregar-refrigerador'
      });
    } else {

      this.listaLineaSeccionada.push({
        linea: arrayMongo,
        nameTable: nameTable,
        titulo_linea: titleLinea,
        routerLink: routerLink
      });
    }

    console.log(this.listaLineaSeccionada);
  }

  eliminarItem(valor) {

    if (valor == 'electrodomenticos') {

      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.nameTable === "microonda"
      });
      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.nameTable === "licuadora"
      });
      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.nameTable === "plancha"
      });

      this.listaLineaSeccionada.splice(index, 1);
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.nameTable === "refrigerador"
      });

      this.listaLineaSeccionada.splice(index, 1);

    } else {
      var index = this.listaLineaSeccionada.findIndex(function (item, i) {
        return item.nameTable === valor
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
   * @param nameTable nombre que se le da a cada elemento para poder convertir el div en cuadrado o circulo con css
   * @param valor true = esta en cuadrado = false, esta en circulo
   * @param index posicion que tiene el elemento en la lista
   */

  seleccionar(arrayMongo, nameTable, titulo_linea, routerLink, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(arrayMongo, nameTable, titulo_linea, routerLink);
        this.lista[index].cuadrado = false;
      } else {
        Swal.fire("CANTIDAD MÁXIMO A SELECCIONAR",
          "Solo se le permite seleccionar " + this.cantidadMax + " tipos de linea",
          "info");
      }
    } else {
      this.eliminarItem(nameTable);
      this.lista[index].cuadrado = true;
    }

  }

  /**
   * CAMBIA EL DIV DE LOS SERVICIOS EN CUADRADO O EN CIRCULO Y GUARDA LOS NOMBRE EN UN ARRAY
   * @param nameTable nombre que se le da a cada elemento para poder convertir el div en cuadrado o circulo con css
   * @param valor true = esta en cuadrado = false, esta en circulo
   * @param index posicion que tiene el elemento en la lista
   */
  seleccionarServicio(arrayMongo, nameTable, titulo_linea, routerLink, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(arrayMongo, nameTable, titulo_linea, routerLink);
        this.listaServicios[index].cuadrado = false;
      } else {
        Swal.fire("CANTIDAD MÁXIMO A SELECCIONAR",
          "Solo se le permite seleccionar " + this.cantidadMax + " tipos de linea",
          "info");
      }
    } else {
      this.eliminarItem(nameTable);
      this.listaServicios[index].cuadrado = true;
    }
  }

  guardar() {
    if (this.listaLineaSeccionada.length > 0) {

      this._empresaService.updateLinea(this._idnegocio, this.listaLineaSeccionada).subscribe(
        response => {
          if (response.status == "success") {
            this._router.navigate(['/login']);
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

