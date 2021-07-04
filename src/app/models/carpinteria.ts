
export class CarpinteriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public medidas: string,
        public color: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 