import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmpresaService } from '../../services/empresa.service';
import { EmpresaModel } from '../../models/Empresa';

@Component({
  selector: 'app-tbl-empresa',
  templateUrl: './tbl-empresa.component.html',
  styleUrls: ['./tbl-empresa.component.css'],
  providers: [EmpresaService]
})
export class TblEmpresaComponent implements OnInit {
  
  public dataEmpresa : EmpresaModel[];
  public title : String;

  constructor(
    private _empresaService:EmpresaService 
    ) { 
      this.title="LISTA DE NEGOCIOS";
    }

  ngOnInit(): void {

    this._empresaService.getDataAllNegocio("Activo").subscribe( 
      response=>{
        console.log(response.message);
        this.dataEmpresa = response.message;
      },
      error=>{
        console.log(error);
      }
    );

  }

}
