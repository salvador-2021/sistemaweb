import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';

@Injectable()
export class AdminService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    private httpHeadersImage: HttpHeaders;

    constructor(
        private _http: HttpClient
    ) {
        this._datosGlobales = new DatosGlobales();

        //this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "admin";
    }


    deleteDataNegocio(_idnegocio): Observable<any> {

        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-negocio/' + _idnegocio, { headers: this.httpHeaders });
    }

    getListNegocio(estado): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-list-negocio/' + estado, { headers: this.httpHeaders });
    }

    /**
     * 
     * @param _id id del negocio
     * @param estado true or false
     */
    updateStatusNegocio(_id, estado): Observable<any> {
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-status-negocio/' + _id + "/" + estado, { headers: this.httpHeaders });
    }
    
    /**
     * ELIMINA LA CARPETA DEL NEGOCIO
     * @param _id 
     */
    deleteFileProduc(_id): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-file_negocio/' + _id, { headers: this.httpHeaders });
    }
}