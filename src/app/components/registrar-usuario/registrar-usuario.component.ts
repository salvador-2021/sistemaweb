import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistrarUsuarioService } from '../../services/mycompany/registrar_usuario.service';
import { LoginNegocioService } from '../../services/login-negocio.service';
import { UsuarioModel } from '../../models/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [RegistrarUsuarioService]
})

export class RegistrarUsuarioComponent implements OnInit {

  validacionForm: FormGroup;
  public titlePage: String;
  public dataModel: UsuarioModel;
  public _idNegocio: string;
  private dataModelUpdate: UsuarioModel;
  public _datosGlobales: DatosGlobales;

  constructor(
    private _usuarioService: RegistrarUsuarioService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._datosGlobales = new DatosGlobales();
    this.titlePage = "DATOS DEL USUARIO";
    this.dataModel = new UsuarioModel("", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/), Validators.maxLength(40)]],
      password: ['', [Validators.nullValidator, Validators.maxLength(15)]]
    });
  }

  ngOnInit(): void {
    //this.datosEdit();
  }


  onSubmit() {
    this.recogerAsignar();

    if (typeof this.dataModel.password == null || this.dataModel.password.length == 0) {

      Swal.fire("Requerido",
        "Introduce una contraseña, gracias",
        "info");
    } else {

      this._usuarioService.saveData(this.dataModel).subscribe(
        response => {
          console.log("Response create user", response);
          if (response.status == 'success') {

            //==============================================================================================
            /*this._loginNegocioService.AuthUsuario(this.dataModel).subscribe(
              response =>{

                console.log("Response token " , response)
                if (response.status == 'success') {
                  this._datosGlobales.saveAuthorization(response.token);
                }
              },
              error=>{

              }
            );*/

            //====================================================================================
            Swal.fire("Usuario creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                this._idNegocio = response.message;
                this._router.navigate(['/login']);
              });

          } else if (response.status == 'duplicado') {
            Swal.fire("Información inválida",
              "Ya existe una cuenta con estos datos",
              "info");
          }
          else if (response.status == 'error') {

          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  recogerAsignar() {
    if (this._idNegocio != null) {
      this.dataModel._id = this._idNegocio;
    }
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.correo = this.validacionForm.value.correo;
    this.dataModel.password = this.validacionForm.value.password;
    this.dataModel.tipo = "usuario";
  }

  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    nombre: false,
    correo: false,
    password: false,

  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "correo") { this.listaDatosMostrar.correo = valor; }
    if (nombreCampo == "password") { this.listaDatosMostrar.password = valor; }
  }

}
