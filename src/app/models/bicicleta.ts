
export class BicicletaModel {
    
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public medidas: string,
        public velocidades: string, //Cantidad velocidades
        public marca: string,
        public material: string,
        public frenos: string,
        public pedales: string,
        public pesoProducto: string,
        public pesoSoportado: string,
        public genero: string,//bicicleta para hombre, mujer, unicex
        public color: string,
        public otra_inf: string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
}   