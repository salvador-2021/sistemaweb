import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../../services/datosGlobales';

@Injectable()
export class AdminService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    
    constructor(
        private _http: HttpClient
    ) {
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);

        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "admin";
    }

    /**
     * ELIMINA LOS DATOS DEL NEGOCIO
     * @param _idnegocio id del negocio
     */
    deleteDataNegocio(_idnegocio): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-negocio/' + _idnegocio, { headers: this.httpHeaders });
    }

    /**
     * RECUPERA TODOS LOS NEGOCIOS INDICANDO EL ESTADO
     * @param estado true, false
     */
    getListNegocio(estado): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-list-negocio/' + estado, { headers: this.httpHeaders });
    }

    /**
     * ACTUALIZA EL ESTATUS DEL NEGOCIO
     * @param _id id del negocio
     * @param estado true or false
     */
    updateStatusNegocio(_id, estado): Observable<any> {
        let dataModel = {
            estado: estado
        }
        let params = JSON.stringify(dataModel);

        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-status-negocio/' + _id , params, { headers: this.httpHeaders });
    }

    /**
     * ACTUALIZA EL MONTO DE PAGO DEL MES TODOS LOS NEGOCIOS
     * @param monto 
     */
    updatePagoMesNegocio(monto):Observable<any>{
        let dataModel = {
            monto: monto
        }
        let params = JSON.stringify(dataModel);

        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-pago-mes-negocio' ,params, { headers: this.httpHeaders });
    }
    
    /**
     * ELIMINA LA CARPETA DEL NEGOCIO
     * @param _id 
     */
    deleteFileProduc(_id): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-file_negocio/' + _id, { headers: this.httpHeaders });
    }

    /**
     * RECUPERA TODOS LOS USUARIOS INDICANDO EL ESTADO
     * @param estado true , false
     */
    getListUsuarios(estado):Observable<any>{
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-list-usuario/' + estado, { headers: this.httpHeaders });
    }

    /**
     * ELIMINA LOS DATOS DEL USUARIO
     * @param _idusuario id del usuario
     */
    deleteDataUsuario(_idusuario): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-usuario/' + _idusuario, { headers: this.httpHeaders });
    }

    /**
     * ACTUALIZA EL ESTADO DEL USUARIO
     * @param _id id del usuario
     * @param estado true or false
     */
    updateStatusUsuario(_id, estado): Observable<any> {
        let dataModel = {
            estado: estado
        }
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-status-usuario/' + _id , params, { headers: this.httpHeaders });
    }
}