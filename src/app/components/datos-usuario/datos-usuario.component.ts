import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/mycompany/usuario.services';
import { UsuarioModel } from '../../models/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';
import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR


@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css'],
  providers: [UsuarioService]
})

export class DatosUsuarioComponent implements OnInit {
  validacionForm: FormGroup;
  validacionFormPassw: FormGroup;
  public editDatos: Boolean;
  public titlePage: String;
  public dataModel: UsuarioModel;
  private dataModelUpdate: UsuarioModel;
  public _datosGlobales: DatosGlobales;

  constructor(
    private _usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this._datosGlobales = new DatosGlobales();
    this.titlePage = "DATOS DEL USUARIO";
    this.editDatos = false;
    this.dataModel = new UsuarioModel("", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/), Validators.maxLength(40)]]
    });

    this.validacionFormPassw = this.formBuilder.group({
      passwordOld: ['', [Validators.required, Validators.maxLength(15)]],
      passwordNew: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
    this._usuarioService.getDataUsuario().subscribe(
      response => {
        console.log(response);
        if (response.status == 'success') {

          this.dataModel = response.message;
          this.validacionForm.setValue(
            {
              nombre: this.dataModel.nombre,
              correo: this.dataModel.correo
            }
          );
        }
      },
      error => {

      }
    );
  }

  recogerAsignar() {
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.correo = this.validacionForm.value.correo;
    this.dataModel.tipo = "usuario";
  }

  /**
  * METODO DE ACTUALIZACION DE DATOS
  */
  onSubmitEdit() {
    this.recogerAsignar();
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._usuarioService.updateDataUsuario(this.dataModel).subscribe(
      response => {
        if (response.status == 'success') {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Usuario actualizado",
            "Datos actualizados correctamente",
            "success").then((value) => {
              window.location.href = window.location.href;
            });
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        console.log(error);
      }
    );
  }

  UpdatePassword() {
    let data = {
      passwordOld: this.validacionFormPassw.value.passwordOld,
      passwordNew: this.validacionFormPassw.value.passwordNew,
    }
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._usuarioService.updatePassword(data).subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Usuario actualizado",
            "Datos actualizados correctamente",
            "success").then((value) => {
              window.location.href = window.location.href;
            });
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

      }
    );

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

  mostrarPassword = {
    passwordOld: false,
    passwordNew: false,
  }

  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showPassword(nombreCampo, valor) {
    if (nombreCampo == "passwordOld") { this.mostrarPassword.passwordOld = valor; }
    if (nombreCampo == "passwordNew") { this.mostrarPassword.passwordNew = valor; }
  }

}
