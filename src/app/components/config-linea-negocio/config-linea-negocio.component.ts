import { Component, OnInit } from '@angular/core';
import { MycompanyModel } from '../../models/mycompany'
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-config-linea-negocio',
  templateUrl: './config-linea-negocio.component.html',
  styleUrls: ['./config-linea-negocio.component.css'],
  providers: [EmpresaService]
})
export class ConfigLineaNegocioComponent implements OnInit {

  private dataModel: MycompanyModel;
  listImageMongoDb = [];

  constructor( private _empresaService: EmpresaService,) {
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
        title: 'Relojería',
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
        nameTable: 'electrodomenticos',
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

  agregaItem(valor: string) {
   
    this.listaLineaSeccionada.push({
      linea:valor
    });
    
    console.log(this.listaLineaSeccionada);
  }

  eliminarItem(valor) {
    var index = this.listaLineaSeccionada.findIndex(function (item, i) {
      return item.linea === valor
    });
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.listaLineaSeccionada.splice(index, 1);
    console.log(this.listaLineaSeccionada);
  }

  cantidadMax = 2;
  /**
   * CAMBIA EL DIV EN CUADRADO O EN CIRCULO Y GUARDA LOS NOMBRE EN UN ARRAY
   * @param nombreCampo nombre que se le da a cada elemento para poder convertir el div en cuadrado o circulo con css
   * @param valor true = esta en cuadrado = false, esta en circulo
   * @param index posicion que tiene el elemento en la lista
   */

  seleccionar(nombreCampo, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(nombreCampo);
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
  seleccionarServicio(nombreCampo, valor, index) {

    if (valor == true) {
      if (this.listaLineaSeccionada.length <= (this.cantidadMax - 1)) {
        this.agregaItem(nombreCampo);
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

  guardar(){
    if(this.listaLineaSeccionada.length>0){
      
      console.log(this.listaLineaSeccionada);

      this._empresaService.updateLinea(this.listaLineaSeccionada).subscribe(
        response=>{
          console.log(response);
        },
        error=>{

        }
      );
    }else{
      Swal.fire("Selecciona la linea",
      "Selecciona 1 o 2 lineas de producto que ofrece tu negocio",
      "error");
    }
   
  }
}

