import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {DatosGlobales} from '../../services/datosGlobales';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  @Input() mostrarBuscador: boolean;
  @ViewChild( 'nombreProductoBuscar' ) nombreProductoBuscar: ElementRef;
  public _datosGlobales: DatosGlobales;

  logueado:boolean=false;
  constructor( private _router: Router ) {
    this._datosGlobales = new DatosGlobales();
    // VALOR INICIAL, SE LE MANDARA TRUE PARA MOSTRAR EL BUSCADOR DESDE OTROS COMPONENTES PADRES
    this.mostrarBuscador = false;
  }

  ngOnInit(): void {
   this.isLoggedIn();
  }

  buscarProducto() {
    if ( this.nombreProductoBuscar.nativeElement.value != null ) {
      this._router.navigate(
        [ '/busqueda-principal-producto', this.nombreProductoBuscar.nativeElement.value ]
      );
    }
  }

  //COMPRUEBA SI EL USUARIO ESTA LOGUEADO
  public isLoggedIn() {
    if(this._datosGlobales.loggedIn){
      this.logueado = true;
    }else{
      this.logueado = false;
    }
  }

  cerrarSesion() {
    this.logueado = false;
    localStorage.removeItem('access_token');
    this._router.navigate(['/home']);
  }
}
