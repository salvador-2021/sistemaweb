import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../services/datosGlobales';

@Injectable()
export class tblCountService {

    public _datosGlobales: DatosGlobales;
    private httpHeaders: HttpHeaders;

    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();

        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');   
    }

    countProduct(tblName): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + tblName + '/countProduct', { headers: this.httpHeaders });
    }
}