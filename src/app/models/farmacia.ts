export class FarmaciaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public categoria: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 