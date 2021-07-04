export class HerreriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public incluye: string,
        public medidas: string,
        public color: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 