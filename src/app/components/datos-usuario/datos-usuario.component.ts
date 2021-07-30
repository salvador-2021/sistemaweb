import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
  validacionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
  }

}
