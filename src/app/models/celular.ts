export class CelularModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public tipoPantalla: string,
        public seguridad: string,
        public marca: string,
        public modelo: string,
        public sistemaOperativo: string,
        public altavoces: string,
        public camaraF: string,
        public camaraT: string,
        public tamanioPantalla: string, 
        public resolucion: string,
        public bateria: string,
        public memoriaRam: string,
        public color: string,
        public bluetooth: string, 
        public interfazCarga: string, // USB  tipo C
        public almacenamiento: string, // Capacidad en GB de almacenamiento
        public procesador: string,
        public garantia: string,
        public unidadventa:string,
        public otra_inf: string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen:any[],
        public comentarios:any[]
    ) { }
} 