import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccesorioMovilService } from '../../services/accesorio_movil.service';
import { AccesorioMovilModel } from '../../models/accesorio_movil';

@Component({
  selector:'app-add-accesorio-cel',
  templateUrl:'./add-accesorio-cel.component.html',
  styleUrls:['./add-accesorio-cel.component.css'],
  providers:[AccesorioMovilService]
})
export class AddAccesorioCelComponent implements OnInit {

  public dataModel: AccesorioMovilModel;
  validacionForm: FormGroup;

  constructor(
    private _accesorioMovilService: AccesorioMovilService,
    private formBuilder: FormBuilder
  ) {
  
    this.dataModel = new AccesorioMovilModel("", "", "", "", "", 0, 0 , null,null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      color: ['', [Validators.required , Validators.maxLength(15)]],
      otra_inf: ['', [Validators.nullValidator,  Validators.maxLength(100)]],
      precio: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/) ,  Validators.maxLength(10)]],
      existencia: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(7)]]
    });
  }
  
  onSubmit() {
    
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.descripcion = this.validacionForm.value.descripcion;
    this.dataModel.color = this.validacionForm.value.color;
    this.dataModel.otra_inf = this.validacionForm.value.otra_inf;
    this.dataModel.precio = this.validacionForm.value.precio;
    this.dataModel.existencia = this.validacionForm.value.existencia;
  
    this._accesorioMovilService.saveData(this.dataModel).subscribe(
      response =>{
        if(response.status == 'success'){
          console.log(response);
        }
      },
      error =>{

      }
    );

  }

  ngOnInit(): void {
  }

}
