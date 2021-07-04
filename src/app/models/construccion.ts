export class ConstruccionModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public marca: string,
        public categoria: string,
        public unidadventa:string,
        public peso:string,
        public medidas:string,
        public otra_inf:string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 