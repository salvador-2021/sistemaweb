import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-ropa',
  templateUrl: './f-ropa.component.html',
  styleUrls: ['./f-ropa.component.css']
})
export class FRopaComponent implements OnInit {

  validacionForm: FormGroup;
  nombreProducto: string;
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre_producto: ['', [Validators.required, Validators.maxLength(30)]],
      marca: ['', [Validators.required, Validators.maxLength(15)]],
      talla: ['', [Validators.required, Validators.maxLength(10)]],
      color: ['', [Validators.required, Validators.maxLength(20)]],
      genero: ['Hombre', [Validators.required, Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void { }

  busquedaConFiltro() {
    let data = {
      linea:"ropas",
      nombreProducto: this.validacionForm.value.nombre_producto,
      marca: this.validacionForm.value.marca,
      talla: this.validacionForm.value.talla,
      color: this.validacionForm.value.color,
      genero: this.validacionForm.value.genero
    }

    this._router.navigate(
      //['/busqueda-principal-producto', lineaSelect, nombreProducto]
      ['/busqueda-principal-producto', data ]
    );

    console.log(data);
  }

}
