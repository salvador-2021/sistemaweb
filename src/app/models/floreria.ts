export class FloreriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public tema: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 