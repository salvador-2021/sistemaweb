import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';
import {VerificarTokenService} from '../../services/validarToken/tokenNegocio.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/*
@Component({
  selector: 'app-add-accesorio-cel',
  templateUrl: './add-accesorio-cel.component.html',
  styleUrls: ['./add-accesorio-cel.component.css'],
  providers: [AccesorioMovilService]
})*/

export class GuardNegocioGuard implements CanActivate {
  private _datosGlobales: DatosGlobales;

  constructor( private _router: Router , private _verificarTokenService : VerificarTokenService) {
    this._datosGlobales = new DatosGlobales();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.checkUserLogueado();
  }

  checkUserLogueado():boolean{
    console.log("Token desde angular ",this._datosGlobales.getAuthorization);
    this._verificarTokenService.verificarTokenNegocio().subscribe(
      response=>{
        console.log(response);
      },
      error =>{

      }
    );
    return true;
  }

}
