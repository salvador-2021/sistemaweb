import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';
import { VerificarTokenService } from '../../services/validarToken/tokenNegocio.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GuardNegocioGuard implements CanActivate {
  private _datosGlobales: DatosGlobales;

  constructor(private _router: Router, private _verificarTokenService: VerificarTokenService) {
    this._datosGlobales = new DatosGlobales();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const respuesta = this.checkUserLogueado();
    return respuesta;
  }

  checkUserLogueado(): Promise<boolean> {
    return new Promise(resolve => {

      this._verificarTokenService.verificarTokenNegocio().subscribe(
        response => {

          if (response.status == "success") {
            
            resolve(true);

          } else {
            resolve(false);
          }
        },
        error => {
          resolve(false);
          this._datosGlobales.deleteAuthorization();
          this._datosGlobales.deleteTipoUserAuthorization();
          this._router.navigate(
            ['/login']
          );
        }
      );

    });
  }

}
