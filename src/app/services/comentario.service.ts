import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../services/datosGlobales';

@Injectable()
export class ComentarioService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    private httpHeadersImage: HttpHeaders;

    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();

        //this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);

        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "comentario_producto";
    }

    saveData(_idusuario , _idnegocio , _idproducto , dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        //:_idusuario/:_idnegocio/:_idproducto
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/save-data/'+_idusuario + '/' + _idnegocio + '/' + _idproducto , params, { headers: this.httpHeaders });
    }

}