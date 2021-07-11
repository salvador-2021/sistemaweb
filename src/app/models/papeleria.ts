export class PapeleriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public medidas: string,
        public color: string,
        public unidadventa:string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 