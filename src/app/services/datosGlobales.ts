export class DatosGlobales {

    /**
     * GUARDA EL TOKEN CUANDO SE INICIA SESION 
     * @param token 
     */
    saveAuthorization(token) {
        localStorage.setItem('access_token', token);
    }
    saveTipoUserAuthorization(tipo){
        localStorage.setItem('tipo_user_access', tipo);
    }
    /**
     * ELIMINA EL TOKEN DESPUES DE CERRAR SESIÓN
     */
    deleteAuthorization() {
        localStorage.removeItem('access_token');
    }
    
    deleteTipoUserAuthorization() {
        localStorage.removeItem('tipo_user_access');
    }

    /**
     * DEVUELVE EL TOKEN GENERADO DESPUES DEL LOGUEO
     */
    public get getAuthorization(): any {
        return localStorage.getItem('access_token');
    }

    public get getTipoUserAuthorization(): any{
        return localStorage.getItem("tipo_user_access");
    }
    /* True ===> Hay datos , False  ===> No hay dato*/
    /**
     * DEVUELVE TRUE SI ESTA LOGUEADO
     */
    public get loggedIn(): boolean {
        if (localStorage.getItem('access_token') != null){
            return true;
        }else{
            return false;
        }
    }

    public get urlApi(): string {
        return 'http://localhost:3900/api/';
    }

}

export var DataGlobal = {
    url: 'http://localhost:3900/api/',
    authorization: localStorage.getItem('access_token')
}