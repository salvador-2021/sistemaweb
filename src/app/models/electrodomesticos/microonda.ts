export class MicroondaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public unidadventa: string,
        public voltaje: string,
        public potencia: string,
        public color: string,
        public medidas: string,
        public luz_interior: string,
        public reloj: string,
        public panel_control: string,
        public peso: string,
        public temporizador: string,
        public acabado: string,
        public incluye: string,
        public garantia: string,
        public otra_inf: string,
        public precio: number,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 