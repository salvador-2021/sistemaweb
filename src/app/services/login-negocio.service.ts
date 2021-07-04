import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginNegocioModel} from '../models/login-negocio';
import {DatosGlobales} from '../services/datosGlobales';


@Injectable()
export class LoginNegocioService{

    public _datosGlobales:DatosGlobales;
    private tblName :string;
    private httpHeaders: HttpHeaders;

    constructor(
        private _http : HttpClient
    ){
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "auth"; 
    }

    saveData(dataModel):Observable<any>{
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi+this.tblName+'/autentificar-negocio', params, { headers : this.httpHeaders } );  
    }

}