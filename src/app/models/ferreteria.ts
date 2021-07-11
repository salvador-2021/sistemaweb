export class FerreteriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,      
        public unidadventa:string,
        public uso:string,
        public incluye:string,
        public marca:string,
        public modelo:string,
        public peso:string,
        public medidas:string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen:any[],
        public comentarios:[Object]
    ) { }
} 