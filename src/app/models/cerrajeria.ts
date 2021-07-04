export class CerrajeriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public unidadventa:string,
        public color:string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 