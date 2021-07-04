export class JoyeriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public marca: string,
        public kilataje: string,
        public color: string,
        public unidadventa:string,
        public genero: string,
        public acabado: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 