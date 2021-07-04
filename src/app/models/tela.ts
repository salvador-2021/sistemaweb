export class TelaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public tipo_tela: string,
        public medidas: string,
        public otra_inf:string,
        public color: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 

 // public descripcion: string,