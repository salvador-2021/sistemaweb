export class PlanchaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public unidadventa: string,
        public marca: string,
        public color: string,
        public potencia: string,
        public medidas: string,
        public peso: string,
        public tipo_suela: string,
        public garantia: string,
        public otra_inf: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 