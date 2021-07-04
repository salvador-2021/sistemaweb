export class PlomeriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public marca: string,
        public unidadventa:string,
        public garantia: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 