import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../services/datosGlobales';

@Injectable()
export class BusquedaGeneralProductoService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    private httpHeadersImage: HttpHeaders;

    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();

       // this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
       this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');

        this.tblName = "busqueda_principal_producto";
    }

    getListProductoAll(nombre): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto/' +nombre, { headers: this.httpHeaders });
    }

}