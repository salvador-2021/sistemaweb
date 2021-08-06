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


   /**
    * BUSCA EL PRODUCTO EN UN DETERMINADO NEGOCIO
    * @param _idnegocio ID NEGOCIO
    * @param nombre NOMBRE DEL PRODUCTO
    * @param data LISTA DE LINEA DE PRODUCTO QUE OFRECE EL NEGOCIO
    */
    getProductoNegocio(_idnegocio, nombre , data): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto_negocio/' + _idnegocio + "/" + nombre, { headers: this.httpHeaders , params:data });
    }

    /**
     * RECUPERA TODOS LOS PRODUCTOS DE UN NEGOCIO EN ESPECIFICO
     * @param _idnegocio ID NEGOCIO
     * @param data LISTA DE LINEA DE PRODUCTO QUE OFRECE EL NEGOCIO
     */
    getListAllProductoNegocioById(_idnegocio, data): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busquedaAllProductoNegocio/' + _idnegocio, { headers: this.httpHeaders, params: data });
    }

    /**
     * HACE UNA BUSQUEDA EN TODOS LOS NEGOCIO CON EL NOMBRE DEL PRODUCTO
     * @param nombre NOMBRE DEL PRODUCTO
     */
    getListProductoAll(nombre): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto/' + nombre, { headers: this.httpHeaders });
    }

    /**
     * RECUPERA LOS DATOS DE UN PRODUCTO EN ESPECIFICO INDICANDO EL ID DEL PRODUCTO Y SEGUN EL ARRAY (Abarrote, optica, etc) QUE PERTENECE
     * @param nameTblSearch NOMBRE DEL ARRAY AL QUE PERTENECE EL PRODUCTO
     * @param _idprodcto ID DEL PRODUCTO
     */
    getDataByIdNegocioIdProducto(nameTblSearch, _idprodcto): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getDataByIdNegocioIdProducto/' + nameTblSearch + '/' + _idprodcto);
    }

    /**
     * RECUPERA LA IMAGEN DE UN PRODUCTO INDICANDO EL ID DEL NEGOCIO, NOMBRE DEL ARRAY , NOMBRE DE LA IMAGEN
     * @param _idNegocio ID DEL NEGOCIO
     * @param nameTableSearch NOMBRE DEL ARRAY AL QUE PERTENECE EL PRODUCTO 
     * @param nameImage NOMBRE DE LA IMAGEN
     */
    getImageName(_idNegocio, nameTableSearch, nameImage): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getImageByIdNegocioNameTable/' + _idNegocio + '/' + nameTableSearch + '/' + nameImage, { headers: this.httpHeaders, responseType: 'blob' });
    }

    /**
     * RECUPERA TODO LOS PRODUCTOS INDICANDO EL ARRAY(ABARROTE, FARMACIA , FERRETERIA) DE TODOS LOS NEGOCIOS
     * @param nameProduct NOMBRE DEL PRODUCTO A BUSCAR
     * @param nameTable NOMBRE DEL ARRAY
     */
    getListProductByNameTable(nameProduct, nameTable): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda_producto_nameTable/' + nameProduct + '/' + nameTable);
    }
    /**
     * HACE UNA BUSQUEDA CON FILTRO PARA LA ROPA
     * @param data CONTIENE EL NOMBRE, MARCA, COLOR, TALLA
     */
    busquedaFiltroRopa( data): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda-filtro-ropa' , { headers: this.httpHeaders , params:data });
    }

    /**
     * HACE UNA BUSQUEDA CON FILTRO PARA EL CALZADO
     * @param data 
     */
    busquedaFiltroCalzado( data): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/busqueda-filtro-calzado' , { headers: this.httpHeaders , params:data });
    }
}