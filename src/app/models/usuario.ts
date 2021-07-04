
export class UsuarioModel{
    constructor(
        public _id:string,
        public nombre:string,
        public correo:string, 
        public password:string, 
        public tipo: string
    ){}
}

