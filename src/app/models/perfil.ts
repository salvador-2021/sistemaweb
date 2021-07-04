export class PerfilModel {
    constructor(
        public _id: string,
        public tipo_servicio: string,
        public nombre_responsable: string,
        public cedula_profesional: string,
        public especializacion:string,
        public imagen: any
    ) { }
} 
