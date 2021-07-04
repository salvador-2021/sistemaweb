export class TelevisionModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public pantalla: string,
        public resolucion: string,
        public puerto_usb: string,
        public puerto_hdml: string,
        public mas_puertos: string,
        public marca: string,
        public color: string,
        public peso: string,
        public anio_modelo: string,
        public medidas: string,
        public pulgadas: string,
        public velocidad_trans: string, //velocidad de transicion
        public pantalla_cur: string, //Pantalla curva
        public altavoces: string,       
        public unidadventa: string,
        public garantia: string,
        public otra_inf: string,
        public precio: number,
        public existencia: number,
        public imagen: [string],
        public comentarios:[Object]
    ) { }
} 