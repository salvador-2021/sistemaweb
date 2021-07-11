export class ServicioModel{
    constructor(
        public _id:string,
        public nombre:string,
        public descripcion:string,
        public tipo_servicio:string,
        public precio:number, 
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public imagen:any[],
        public comentarios:[Object]
    ){}
}
