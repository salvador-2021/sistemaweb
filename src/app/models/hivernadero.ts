export class HivernaderoModel {
    constructor(
        public _id: string,
        public nombre: string,
        public instru_cuidado: string,
        public otra_inf: string,
        public unidadventa:string,  
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen: any[],
        public comentarios:any[]
    ) { }
} 