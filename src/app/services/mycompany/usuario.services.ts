import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';

@Injectable()
export class UsuarioService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;

    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();

        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);

        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');

        this.tblName = "usuario";
    }

    saveData(dataModel): Observable<any> {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json'); 
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/save-data', params, { headers: this.httpHeaders });
    }

    updateDataUsuario( dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-data' , params, { headers: this.httpHeaders });
    }

    deleteProductNegocio(_id): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-data/' + _id, { headers: this.httpHeaders });
    }
    
    getDataUsuario():Observable<any>{
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-data/', { headers: this.httpHeaders });
    }

    //METODO QUE SE USA EN EL MODULO DE COMENTARIOS
    getNameUser(_iduser):Observable<any>{
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-name-user/' + _iduser, { headers: this.httpHeaders });
    }


    updateStatusProduct(idproducto, status): Observable<any> {
        let dataModel = {
            _id: idproducto,
            estado: status
        }
        let params = JSON.stringify(dataModel);

        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-status/', params, { headers: this.httpHeaders });
    }

}

