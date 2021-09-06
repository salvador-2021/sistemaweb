export class AccesorioMovilModel{
    constructor(
        public _id:string,
        public nombre:string,
        public descripcion:string,
        public color:string,
        public otra_inf:string,
        public existencia:number,  
        public precio:number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public imagen:any[],
        public comentarios:any[]
    ){}
}
