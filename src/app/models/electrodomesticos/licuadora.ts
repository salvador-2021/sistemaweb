export class LicuadoraModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public unidadventa: string,
        public modelo: string,
        public marca: string,
        public color: string,
        public accesorios: string,
        public voltaje: string,
        public potencia: string,
        public velocidades: string,
        public capacidad: string,
        public material: string,
        public peso: string,
        public incluye: string,
        public garantia: string,
        public otra_inf: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 
