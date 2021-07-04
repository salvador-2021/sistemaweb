import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MotoModel } from '../models/moto';
import { DatosGlobales } from '../services/datosGlobales';

@Injectable()
export class MotoService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    private httpHeadersImage: HttpHeaders;

    constructor(
        private _http: HttpClient,
    ) {
        this._datosGlobales = new DatosGlobales();
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "moto";
    }

    saveData(dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/save-data', params, { headers: this.httpHeaders });
    }

    getListProductNegocio(estado): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getAllProductNegocio/' + estado, { headers: this.httpHeaders });
    }

    getProductNegocio(_id): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/searchproduct/' + _id, { headers: this.httpHeaders });
    }

    updateProductNegocio(_id, dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-data/' + _id, params, { headers: this.httpHeaders });
    }

    deleteProductNegocio(_id): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-data/' + _id, { headers: this.httpHeaders })
    }

    updateStatusProduct(idproducto, status): Observable<any> {
        let dataModel = {
            _id: idproducto,
            estado: status
        }
        let params = JSON.stringify(dataModel);

        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-status/', params, { headers: this.httpHeaders });
    }

    searchProductName(nameproduct): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/searchproductName/' + nameproduct, { headers: this.httpHeaders });
    }

    /*SUBIDA DE LA IMAGEN */
    uploadImage(file: File, _idproducto): Observable<any> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);

        this.httpHeadersImage = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);

        const req = new HttpRequest('POST', this._datosGlobales.urlApi + this.tblName + '/upload-imagen/' + _idproducto, formdata, {
            headers: this.httpHeadersImage,
            reportProgress: true,
            responseType: 'json'
        });
        // responseType: text
        return this._http.request(req);
    }
    /*RECUPERAR IMAGEN */
    getImageName(nameImage): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-img/' + nameImage, { headers: this.httpHeaders, responseType: 'blob' });
    }
    /*ELIMINAR IMAGEN */
    deleteImageProduct(_nameImage): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-img/' + _nameImage, { headers: this.httpHeaders });
    }
}