import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/mycompany/empresa.service';

@Component({
  selector: 'app-lateral-admin',
  templateUrl: './lateral-admin.component.html',
  styleUrls: ['./lateral-admin.component.css'],
  providers:[EmpresaService]
})
export class LateralAdminComponent implements OnInit {

  listaLinea = [];
  constructor(private _empresaService: EmpresaService) { }

  ngOnInit(): void {

    this._empresaService.getLineaNegocio().subscribe(
      response=>{
        if(response.status=="success"){
          this.listaLinea = response.message.lineaNegocio;
          console.log( this.listaLinea);
        }
      },
      error=>{

      }
    );

   // this.listaLinea = [{ 'linea': "/add-ropa", 'titulo_linea': 'Ropa' } , {'linea':"/add-abarrote" ,"titulo_linea":"Abarrote"}];
  }

}
