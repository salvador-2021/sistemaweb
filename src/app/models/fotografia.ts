export class FotografiaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public medidas: string,
        public color: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 