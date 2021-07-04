export class OpticaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public incluye: string,
        public unidadventa:string,
        public marca: string,
        public numero: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 