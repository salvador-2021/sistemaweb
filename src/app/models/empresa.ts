export class EmpresaModel{
    constructor(
        public _id:string,
        public estadoL:string,
        public municipio:string,
        public localidad:string,
        public nombre:string,
        public direccion:string,
        public telefono:string,
        public celular:string,
        public facebook:string,
        public horario_ser:string,  
        public correo:string,
        public password:string,
        public imagen_negocio:any        
    ){}
}

