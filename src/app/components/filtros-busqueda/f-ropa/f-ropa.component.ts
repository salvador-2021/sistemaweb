import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-ropa',
  templateUrl: './f-ropa.component.html',
  styleUrls: ['./f-ropa.component.css']
})
export class FRopaComponent implements OnInit {
  
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
