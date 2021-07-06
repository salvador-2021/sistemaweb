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
    private _router: Router,

  ) {

    this._datosGlobales = new DatosGlobales();
    this.dataModel = new LoginNegocioModel("", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', [Validators.required, Validators.maxLength(9)]]
    });
  }

  onSubmit() {

    this.dataModel.password= this.validacionForm.value.password;
    this.dataModel.correo = this.validacionForm.value.correo;

    this._loginNegocioService.saveData(this.dataModel).subscribe(
      response =>{

        if(response.status == 'success'){
          //localStorage.setItem('access_token', response.token);
          this._datosGlobales.saveAuthorization(response.token);

          this.irMenu();
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

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  irMenu(){
    this._router.navigate(['/add-abarrote']);
  }
  ngOnInit(): void {
  }

}
