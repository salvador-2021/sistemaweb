import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-negocio',
  templateUrl: './buscar-negocio.component.html',
  styleUrls: ['./buscar-negocio.component.css']
})
export class BuscarNegocioComponent implements OnInit {

  validacionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
    
  ) {
    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({    
      nombre_negocio: ['', [Validators.required, Validators.maxLength(50)]]       
    });
   }

  ngOnInit(): void {
  }

}
