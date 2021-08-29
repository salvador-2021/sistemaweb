import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginNegocioService } from '../../services/login-negocio.service';
import { EmpresaService } from '../../services/mycompany/empresa.service';
import { LoginNegocioModel } from '../../models/login-negocio';
import { Router } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-login-negocio',
  templateUrl: './login-negocio.component.html',
  styleUrls: ['./login-negocio.component.css'],
  providers: [LoginNegocioService, EmpresaService],
})
export class LoginNegocioComponent implements OnInit {

  public dataModel: LoginNegocioModel;
  public _datosGlobales: DatosGlobales;
  validacionForm: FormGroup;

  constructor(
    private _loginNegocioService: LoginNegocioService,
    private _empresaService: EmpresaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {

    this._datosGlobales = new DatosGlobales();
    this.dataModel = new LoginNegocioModel("", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', [Validators.required, Validators.maxLength(15)]],
      usuario: ['usuario', [Validators.required]]
    });
  }

  onSubmit() {

    this.dataModel.password = this.validacionForm.value.password;
    this.dataModel.correo = this.validacionForm.value.correo;

    if (this.validacionForm.value.usuario == "usuario") {

      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      this._loginNegocioService.AuthUsuario(this.dataModel).subscribe(
        response => {

          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          if (response.status == 'success') {
            //localStorage.setItem('access_token', response.token);
            this._datosGlobales.saveAuthorization(response.token);
            this._datosGlobales.saveTipoUserAuthorization(response.negocio.tipo);
            this._router.navigate(['/home']);
          }
          if (response.status == "Usuario invalido") {
            Swal.fire("Usuario inválido",
              "Datos incorrectos",
              "error");
          }
        },
        error => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Usuario inválido",
            "Datos incorrectos",
            "error");
        }

      );

    } else if (this.validacionForm.value.usuario == "negocio") {
      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      this._loginNegocioService.AuthNegocio(this.dataModel).subscribe(
        response => {
          

          if (response.status == 'success') { //EL USUARIO ES VALIDO
            this._datosGlobales.saveAuthorization(response.token);
            this._datosGlobales.saveTipoUserAuthorization("negocio");
             
              //SE COMPRUEBA QUE EL NEGOCIO HAYA SELECCIONADO LA LINEA DE PRODUCTO QUE OFRECE SU NEGOCIO
              this._empresaService.getLineaNegocio().subscribe(
                response => {
                  this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
                 
                  if (response.status == "success") {
                    let listaLinea = [];
                    listaLinea = response.message.lineaNegocio;
                    let _idNegocio = response.message._id;

                    if (listaLinea.length == 0 || listaLinea == null) {
                      this._router.navigate(['/config-linea-negocio', _idNegocio]);
                      //[routerLink]="['/config-linea-negocio' , _idNegocio ]"
                    } else if (listaLinea.length > 0) {
                      this._router.navigate(['/home']);
                    }
                  }
                },

                error => {

                });
          
          }

          /*if (response.status == 'success') {
            this._datosGlobales.saveAuthorization(response.token);
            this._datosGlobales.saveTipoUserAuthorization("negocio");
            this._router.navigate(['/home']);

          }*/

          if (response.status == "Usuario invalido") {
            Swal.fire("Usuario inválido",
              "Datos incorrectos",
              "error");
          }
        },
        error => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Usuario inválido",
            "Datos incorrectos",
            "error");

        }
      );
    }

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
