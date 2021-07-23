import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  @Input() mostrarBuscador: boolean;
  @ViewChild( 'nombreProductoBuscar' ) nombreProductoBuscar: ElementRef;

  constructor( private _router: Router, public authService: AuthService ) {
    // VALOR INICIAL, SE LE MANDARA TRUE PARA MOSTRAR EL BUSCADOR DESDE OTROS COMPONENTES PADRES
    this.mostrarBuscador = false;
  }

  ngOnInit(): void {

  }

  buscarProducto() {
    if ( this.nombreProductoBuscar.nativeElement.value != null ) {
      this._router.navigate(
        [ '/busqueda-principal-producto', this.nombreProductoBuscar.nativeElement.value ]
      );
    }
  }
}
