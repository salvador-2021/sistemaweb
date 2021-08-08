import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../datosGlobales';

@Injectable()
export class VerificarTokenService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
  
    constructor(
        private _http: HttpClient
    ) {
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "verificar_token";
    }

    verificarTokenNegocio(): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/verificar-Token-Negocio', { headers: this.httpHeaders });
    }
}