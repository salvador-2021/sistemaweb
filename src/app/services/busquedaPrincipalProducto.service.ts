import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
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

    /*HACE UNA BUSQUEDA EN TODOS LOS NEGOCIOS PARA ENCONTRAR EL PRODUCTO */
    /*RECUPERA UNA LISTA DE COINCIDENCIAS*/
    getListProductoAll(nombre): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto/' + nombre, { headers: this.httpHeaders });
    }
    getListAllProductoNegocioById(_idnegocio, data): Observable<any> {
                 
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto_negocio/' + _idnegocio, { headers: this.httpHeaders, params: data } );
    }
    
    getDataByIdNegocioIdProducto(nameTblSearch, _idprodcto): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getDataByIdNegocioIdProducto/' + nameTblSearch + '/' + _idprodcto);
    }
    
    /*RECUPERAR IMAGEN DEL PRODUCTO */
    getImageName(_idNegocio,nameTableSearch,nameImage): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getImageByIdNegocioNameTable/' + _idNegocio +'/'+nameTableSearch+'/'+ nameImage  , { headers: this.httpHeaders, responseType: 'blob' });
    }
    
    getListProductByNameTable(nameProduct , nameTable): Observable<any>{
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto_nameTable/' + nameProduct + '/' + nameTable );
    }
}