export class RopaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public detalle: string,
        public marca: string,
        public tipo_ropa:string, //tipoRopa
        public genero: string,
        public tallas: Array<Object>,        
        public colores: Array<Object>,      
        public unidadventa: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 