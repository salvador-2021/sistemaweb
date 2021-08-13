import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';

@Injectable()
export class PagoService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
  
    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "pagos";
    }

    guardarPago(tokenGenerado,monto , description , nombreCliente): Observable<any> {
        let data={
            stripeToken : tokenGenerado,
            monto:monto,
            descripcion: description,
            nombreCliente:nombreCliente
        }
        let params = JSON.stringify(data);
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/guardar-pago', params, { headers: this.httpHeaders });
    }

}