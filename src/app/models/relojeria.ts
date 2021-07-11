export class RelojeriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public marca: string,
        public modelo: string,
        public caratula: string,
        public color: string,
        public unidadventa:string,
        public genero: string,
        public funcionamiento: string,
        public garantia: string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 