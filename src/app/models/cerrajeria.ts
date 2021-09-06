export class CerrajeriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public unidadventa:string,
        public color:string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen:any[],
        public comentarios:any[]
    ) { }
} 