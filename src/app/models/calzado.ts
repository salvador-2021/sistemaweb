export class CalzadoModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public tipo_calzado: string,
        public detalle: string,
        public marca: string,
        public unidadventa: string,
        public genero: string,
        public garantia: string,
        public otra_inf: string,
        public existencia: number,
        public precio: number,
        public colores: any[],
        public tallas: any[],
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 