export class DatosGlobales {

    /**
     * GUARDA EL TOKEN CUANDO SE INICIA SESION
     * @param token 
     */
    saveAuthorization(token) {
        localStorage.setItem('access_token', token);
    }
    /**
     * ELIMINA EL TOKEN DESPUES DE CERRAR SESIÓN
     */
    deleteAuthorization() {
        localStorage.removeItem('access_token');
    }

    /**
     * DEVUELVE EL TOKEN GENERADO DESPUES DEL LOGUEO
     */
    public get getAuthorization(): any {
        return localStorage.getItem('access_token');
    }
    /* True ===> Hay datos , False  ===> No hay dato*/
    public get loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
    }

    public get urlApi(): string {
        return 'http://localhost:3900/api/';
    }

}

export var DataGlobal = {
    url: 'http://localhost:3900/api/',
    authorization: localStorage.getItem('access_token')
}