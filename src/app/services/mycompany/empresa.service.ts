import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../../models/empresa';
import { DatosGlobales } from '../datosGlobales';

@Injectable()
export class EmpresaService {

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

    getDataAllNegocio(estado): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/all-negocios/' + estado, { headers: this.httpHeaders });
    }

    getDataNegocio(): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/getDataNegocio' , { headers: this.httpHeaders });
    }


    getDataNegocioForPerfil(_id): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get_data_negocio_perfil/' + _id, { headers: this.httpHeaders });
    }

    /**
     * ACTUALIZA TODO MENOS LA CONTRASEÑA
     * @param dataModel 
     */
    updateDataNegocio(dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-data', params, { headers: this.httpHeaders });
    }
    
    /**
     * ACTUALIZA SOLO LA CONTRASEÑA
     * @param dataModel 
     */
    updatePassword(dataModel):Observable<any>{
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-password' , params, { headers: this.httpHeaders });  
    }

    deleteDataNegocio(): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-data', { headers: this.httpHeaders });
    }

    /*SUBIDA DE LA IMAGEN */
    uploadImage(file: File): Observable<any> {
        this.httpHeadersImage = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);
       
        const formdata: FormData = new FormData();
        formdata.append('file', file);

        const req = new HttpRequest('POST', this._datosGlobales.urlApi + this.tblName + '/upload-imagen', formdata, {
            headers: this.httpHeadersImage,
            reportProgress: true,
            responseType: 'json'
        });
        // responseType: text
        return this._http.request(req);
    }
    /*RECUPERAR IMAGEN */
    getImageFile(nameImage): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-img/' + nameImage, { headers: this.httpHeaders, responseType: 'blob' });
    }

    getLogoNegocio(): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/logo-negocio' , { headers: this.httpHeaders, responseType: 'blob'});
    }

    /*ELIMINAR IMAGEN */
    deleteImageNegocio(_nameImage): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-img/' + _nameImage, { headers: this.httpHeaders });
    }

    getLineaNegocio(): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-Linea-negocio', { headers:  this.httpHeaders });
    }
    
    getCantidadProductosRegistrado(nombreArray):Observable<any>{
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/cantidad-producto-registrado/'+nombreArray, { headers:  this.httpHeaders });

    }

}