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

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._datosGlobales = new DatosGlobales();
    // VALOR INICIAL, SE LE MANDARA TRUE PARA MOSTRAR EL BUSCADOR DESDE OTROS COMPONENTES PADRES
    this.mostrarBuscador = false;
  }

  ngOnInit(): void {
    this.isLoggedIn();
    this.listaJsonLineaFiltro();
  }

  buscarProducto() {
    if (this.nombreProductoBuscar.nativeElement.value != null) {

      this._router.navigate(
        //['/busqueda-principal-producto', "busqueda general" ,this.nombreProductoBuscar.nativeElement.value]
        ['/busqueda-principal-producto', { linea: "busqueda general", nombreProducto: this.nombreProductoBuscar.nativeElement.value } ]

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

  cerrarSesion() {
    this.logueado = false;
    this._datosGlobales.deleteAuthorization();
    this._datosGlobales.deleteTipoUserAuthorization();
    this._router.navigate(['/home']);
  }

  perfilUsuario() {
    let tipousuario = this._datosGlobales.getTipoUserAuthorization;
    if (tipousuario == "negocio") {
      this._router.navigate(['/admin-negocio']);
    }
    if (tipousuario == "usuario") {
      this._router.navigate(['/perfil-usuario']);
    }
  }

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
      ['/busqueda-principal-producto', { linea: lineaSelect , nombreProducto} ]
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
}
