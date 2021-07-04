/* ESTE SERVICE NO!!! */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccesorioMovilModel} from '../models/accesorio_movil';
import {DatosGlobales} from '../services/datosGlobales';

@Injectable()
export class AccesorioMovilService{

    public _datosGlobales:DatosGlobales;
    private tblName :string;
    private httpHeaders: HttpHeaders;
    
    constructor(
        private _http : HttpClient,
    ){
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "accesorio_movil";  
    }

    saveData(dataModel):Observable<any>{
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi+this.tblName+'/save-data', params, {headers: this.httpHeaders});
    }

    getListProductNegocio():Observable<any>{
       return this._http.get(this._datosGlobales.urlApi+this.tblName+'/getAllProductNegocio', {headers: this.httpHeaders});
   }
}