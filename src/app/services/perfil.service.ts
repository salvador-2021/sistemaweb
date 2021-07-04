import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosGlobales } from '../services/datosGlobales';

@Injectable()
export class PerfilService {

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
        this.tblName = "perfil";
    }

    saveUpdateData(dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.post(this._datosGlobales.urlApi + this.tblName + '/save-data', params, { headers: this.httpHeaders });
    }

    getData(): Observable<any> {
        return this._http.get(this._datosGlobales.urlApi + this.tblName + '/get-data/' , { headers: this.httpHeaders });
    }

    updateData( dataModel): Observable<any> {
        let params = JSON.stringify(dataModel);
        return this._http.put(this._datosGlobales.urlApi + this.tblName + '/update-data', params, { headers: this.httpHeaders });
    }

    deleteData(): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-data' , { headers: this.httpHeaders })
    }

    /*SUBIDA DE LA IMAGEN */
    uploadImage(file: File): Observable<any> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);

        this.httpHeadersImage = new HttpHeaders().set('Authorization', this._datosGlobales.getAuthorization);

        const req = new HttpRequest('POST', this._datosGlobales.urlApi + this.tblName + '/upload-imagen' , formdata, {
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
    deleteImage(_nameImage): Observable<any> {
        return this._http.delete(this._datosGlobales.urlApi + this.tblName + '/delete-imagen/' + _nameImage, { headers: this.httpHeaders });
    }
}