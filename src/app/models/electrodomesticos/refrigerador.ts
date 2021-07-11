export class RefrigeradorModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public marca: string,
        public color: string,
        public ancho: string,
        public alto: string,
        public profundidad: string,
        public filtro_agua: string,
        public peso: string,
        public acabado: string,
        public material: string,
        public luz_interior: string,
        public voltaje: string,
        public control_humedad: string,
        public no_puertas: string, //numero de puertas
        public despachador_agua: string,
        public compartimientos: string,
        public unidadventa: string,
        public garantia: string,
        public otra_inf: string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen: any[],
        public comentarios:[Object]
    ) { }
} 