export class CamaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public material_relleno: string,
        public tipo_colchon: string,
        public altura: string,
        public ancho: string,
        public grosor: string,
        public marca: string,
        public peso: string, //peso del producto
        public color: string,
        public garantia: string,
        public incluye: string,
        public otra_inf: string,
        public unidadventa:string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 