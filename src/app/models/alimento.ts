
export class AlimentoModel{
    constructor(
        public _id:string,
        public nombre:string,
        public descripcion:string,
        public unidadventa:string,
        public existencia:number,  
        public precio:number,
        public precio_anterior:number,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public imagen:any[],
        public comentarios:[Object]
    ){}
}   
