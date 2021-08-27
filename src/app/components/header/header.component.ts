import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() mostrarBuscador: boolean;
  @ViewChild('nombreProductoBuscar') nombreProductoBuscar: ElementRef;
  public _datosGlobales: DatosGlobales;

  logueado: boolean = false;
  listaLinea: any[];
  isAdmin: boolean = false;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._datosGlobales = new DatosGlobales();
    // VALOR INICIAL, SE LE MANDARA TRUE PARA MOSTRAR EL BUSCADOR DESDE OTROS COMPONENTES PADRES
    this.mostrarBuscador = false;
  }

  ngOnInit(): void {
    this.isLoggedIn();
    this.listaJsonLineaFiltro();
    if (this._datosGlobales.getTipoUserAuthorization == "ADMINISTRADOR") {
      this.isAdmin = true;
    }
  }

  buscarProducto() {
   
    let nombreProductoB = this.nombreProductoBuscar.nativeElement.value;
    if (nombreProductoB) {
      this._router.navigate(
        //['/busqueda-principal-producto', "busqueda general" ,this.nombreProductoBuscar.nativeElement.value]
        ['/busqueda-principal-producto', { linea: "busqueda general", nombreProducto: nombreProductoB }]
      );
    }
  }

  //COMPRUEBA SI EL USUARIO ESTA LOGUEADO
  public isLoggedIn() {
    if (this._datosGlobales.loggedIn) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  /**
   * CERRAMOS SESIÓN DE LA CUENTA 
   */
  cerrarSesion() {
    this.logueado = false;
    this.isAdmin = false;
    this._datosGlobales.deleteAuthorization();
    this._datosGlobales.deleteTipoUserAuthorization();
    this._router.navigate(['/home']);
  }

  /**
   * MANDAMOS AL USUARIO QUE ESTA EN SECCION A SU PERFIL CORRESPONDIENTE
   */
  misDatos() {
    let tipousuario = this._datosGlobales.getTipoUserAuthorization;
    // console.log("tipo de usuario entrando " ,tipousuario);
    if (tipousuario == "negocio") {
      this._router.navigate(['/negocio/datos']);
    }
    if (tipousuario == "usuario") {
      this._router.navigate(['/perfil-usuario']);
    }
    if (tipousuario == "ADMINISTRADOR") {
      this._router.navigate(['/administrador/datos']);
    }
  }

  /**
   * EVENTO CLICK EN EL COMPONENTE SELECT ,UNA VEZ SELECCIONADO EL FILTRO CORRESPONDIENTE SE VA AL COMPONENTE BUSQUEDA PRINCIPAL
   * @param lineaSelect VALOR SELECCIONADO
   */
  onSelectLinea(lineaSelect) {
    let nombreProducto = null;
    if (lineaSelect == "ropas") {
      nombreProducto = "playera";
    }
    else if (lineaSelect == "zapatos") {
      nombreProducto = "zapato";
    } else {
      nombreProducto = "mochila";
    }

    this._router.navigate(
      //['/busqueda-principal-producto', lineaSelect, nombreProducto]
      ['/busqueda-principal-producto', { linea: lineaSelect, nombreProducto }]
    );
  }

  listaJsonLineaFiltro() {
    this.listaLinea = [
      {
        arrayMongodb: "Busqueda general",
        titulo: "Busqueda general"
      },
      {
        arrayMongodb: "ropas",
        titulo: "Ropa"
      },
      {
        arrayMongodb: "zapatos",
        titulo: "Calzado"
      }
    ];
  }

  /**
   * FUNCION PARA MOSTRAR UN FORMULARIO DONDE EL USUARIO PODRA BUSCAR EL NEGOCIO
   */
  busquedaNegocio() {

    this._router.navigate(
      //['/busqueda-principal-producto', lineaSelect, nombreProducto]
      ['/busqueda-principal-producto', { negocio: "busqueda_negocio" }]
    );

  }

  administrador() {
    this._router.navigate(['/administrador']);
  }
}
