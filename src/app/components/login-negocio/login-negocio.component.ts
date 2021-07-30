import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginNegocioService } from '../../services/login-negocio.service';
import { LoginNegocioModel } from '../../models/login-negocio';
import { Router } from '@angular/router';
import {DatosGlobales} from '../../services/datosGlobales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-negocio',
  templateUrl: './login-negocio.component.html',
  styleUrls: ['./login-negocio.component.css'],
  providers: [LoginNegocioService],
})
export class LoginNegocioComponent implements OnInit {

  public dataModel:LoginNegocioModel;
  public _datosGlobales: DatosGlobales;
  validacionForm: FormGroup;

  constructor(
    private _loginNegocioService: LoginNegocioService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {

    this._datosGlobales = new DatosGlobales();
    this.dataModel = new LoginNegocioModel("", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', [Validators.required, Validators.maxLength(15)]]
    });
  }

  onSubmit() {

    this.dataModel.password= this.validacionForm.value.password;
    this.dataModel.correo = this.validacionForm.value.correo;

    this._loginNegocioService.saveData(this.dataModel).subscribe(
      response =>{
        console.log(response);
        if(response.status == 'success'){
          //localStorage.setItem('access_token', response.token);
          this._datosGlobales.saveAuthorization(response.token);

          this._router.navigate(['/home']);
        }
        if(response.status == "Usuario invalido"){
          Swal.fire("Usuario inválido",
          "Datos incorrectos",
          "error");
        }
      },
      error =>{

      }
    );
  }

  ngOnInit(): void {
  }

  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    correo: false,
    password: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "correo") { this.listaDatosMostrar.correo = valor; }
    if (nombreCampo == "password") { this.listaDatosMostrar.password = valor; }
  }


  

}
