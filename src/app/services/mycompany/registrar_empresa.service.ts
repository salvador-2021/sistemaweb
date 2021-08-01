import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../../models/empresa';
import { DatosGlobales } from '../datosGlobales';

@Injectable()
export class RegistrarEmpresaService {

    public _datosGlobales: DatosGlobales;
    private tblName: string;
    private httpHeaders: HttpHeaders;
    private httpHeadersImage: HttpHeaders;

    constructor(
        private _http: HttpClient
    ) {
        this._datosGlobales = new DatosGlobales();
        console.log("Autorizacion ", this._datosGlobales.getAuthorization);
        this.httpHeaders = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        this.tblName = "negocio";
    }

    saveData(dataModel): Observable<any> {
        console.log("creando negocio");
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/save-data', params, { headers: this.httpHeaders });
    }

    getDataAllNegocio(estado): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/all-negocios/' + estado, { headers: this.httpHeaders });
    }

    getDataNegocio(_id): Observable<any> {
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getDataNegocio/' + _id, { headers: this.httpHeaders });
    }

    getDataNegocioForPerfil(_id): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get_data_negocio_perfil/' + _id, { headers: this.httpHeaders });
    }

    updateDataNegocio(dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-data', params, { headers: this.httpHeaders });
    }

    deleteDataNegocio(): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-data', { headers: this.httpHeaders });
    }

    /*SUBIDA DE LA IMAGEN */
    subidadImg(_id,file: File): Observable<any> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);

        this.httpHeadersImage = new HttpHeaders();

        const req = new HttpRequest('POST', this._datosGlobales.urlApi + this.tblName + '/subida-imagen/' + _id, formdata, {
            headers: this.httpHeadersImage,
            reportProgress: true,
            responseType: 'json'
        });
        // responseType: text
        return this._http.request(req);
    }
    /*RECUPERAR IMAGEN */
    getImageName(_id,nameImage): Observable<any> {
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-img/' + _id + "/" + nameImage, { headers: this.httpHeaders, responseType: 'blob' });
    }
    /*ELIMINAR IMAGEN */
    deleteImageProduct(_nameImage): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-img/' + _nameImage, { headers: this.httpHeaders });
    }

    updateLinea(_idnegocio, dataModel): Observable<any> {
        this.httpHeaders = new HttpHeaders();
        this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json');
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-Linea-negocio/' + _idnegocio, params, { headers: this.httpHeaders });
    }

    getLineaNegocio(): Observable<any> {
        this.httpHeadersImage = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-Linea-negocio', { headers: this.httpHeadersImage });
    }

}