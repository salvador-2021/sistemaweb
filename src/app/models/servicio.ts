export class ServicioModel{
    constructor(
        public _id:string,
        public nombre:string,
        public descripcion:string,
        public tipo_servicio:string,
        public precio:number, 
        public imagen:any[],
        public comentarios:[Object]
    ){}
}
