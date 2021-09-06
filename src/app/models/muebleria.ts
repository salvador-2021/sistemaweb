export class MuebleriaModel {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public especificacion: string,
        public alto: string,
        public ancho: string,
        public profundidad: string,
        public peso: string,
        public unidadventa:string,
        public color: string,
        public marca: string,
        public tipo_acabado: string,
        public recomendacion_uso: string,
        public otra_inf: string,
        public precio: number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public existencia: number,
        public imagen: any[],
        public comentarios:any[]
    ) { }
} 