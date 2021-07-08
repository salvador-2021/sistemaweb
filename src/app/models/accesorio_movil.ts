export class AccesorioMovilModel{
    constructor(
        public _id:string,
        public nombre:string,
        public descripcion:string,
        public color:string,
        public otra_inf:string,
        public existencia:number,  
        public precio:number,
        public imagen:any[],
        public comentarios:[Object]
    ){}
}
