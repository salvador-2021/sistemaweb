import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-calzado',
  templateUrl: './f-calzado.component.html',
  styleUrls: ['./f-calzado.component.css']
})
export class FCalzadoComponent implements OnInit {

  validacionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({      
      talla: ['', [Validators.required, Validators.maxLength(50)]],
      color: ['', [Validators.required, Validators.maxLength(50)]],
      
    });
   }

  ngOnInit(): void {
  }

}
