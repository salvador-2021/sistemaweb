import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/mycompany/empresa.service';
import { EmpresaModel } from '../../models/empresa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';
import { AdminService } from '../../services/mycompany/admin.service';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.css'],
  providers: [EmpresaService, AdminService],
})
export class DatosEmpresaComponent implements OnInit {
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  public dataModel: EmpresaModel;
  public _datosGlobales: DatosGlobales;

  validacionForm: FormGroup;
  validacionFormPassw: FormGroup;
  private dataModelUpdate: EmpresaModel;
  public titlePage: String;
  private _idNegocio: string;

  selectedFiles: FileList;
  selecImage: boolean;
  img_negocio: any;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  isLogin: boolean = false; //PERMITE SABER SI EL USUARIO ESTA LOGUEADO O NO
  isEditing: boolean = false;


  constructor(
    private renderer: Renderer2,
    private _empresaService: EmpresaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _adminService: AdminService,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI

  ) {
    this._datosGlobales = new DatosGlobales();
    this.isEditing = false;
    this.titlePage = "DATOS DEL NEGOCIO";
    this.dataModel = new EmpresaModel("", "", "", "", "", "", "", "", "", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      municipio: ['TLAPA', Validators.required],
      localidad: ['TLAPA', Validators.required],
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      telefono: ['', [Validators.nullValidator, Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
      horario_ser: ['', [Validators.required, Validators.maxLength(100)]],
      facebook: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/), Validators.maxLength(40)]]
    });

    this.validacionFormPassw = this.formBuilder.group({
      passwordOld: ['', [Validators.required, Validators.maxLength(15)]],
      passwordNew: ['', [Validators.required, Validators.maxLength(15)]],
    });

  }

  ngOnInit(): void {
    this.datosEdit();
  }

  datosEdit() {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this.titlePage = "DATOS DEL NEGOCIO";

    this._empresaService.getDataNegocio().subscribe(
      response => {
        if (response.status == 'success') {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          //Recuperamos la lista de productos
          this.dataModelUpdate = response.message;
          this._idNegocio = this.dataModelUpdate._id;
          //recuperamos la  imagene
          this.img_negocio = this.dataModelUpdate.imagen_negocio;
          //recorremos la lista de nombre de las imagenes
          this.selecImage = true;
          console.log(this.img_negocio);
          if (this.img_negocio != null) {
            this.getImageName(this.img_negocio);
            this.selecImage = false;
          }

          this.validacionForm.setValue(
            {
              municipio: this.dataModelUpdate.municipio,
              localidad: this.dataModelUpdate.localidad,
              nombre: this.dataModelUpdate.nombre,
              direccion: this.dataModelUpdate.direccion,
              telefono: this.dataModelUpdate.telefono,
              celular: this.dataModelUpdate.celular,
              horario_ser: this.dataModelUpdate.horario_ser,
              facebook: this.dataModelUpdate.facebook,
              correo: this.dataModelUpdate.correo
            }
          );
        }
      },
      error => {

      }
    );
  }


  recogerAsignar() {
    this.dataModel.imagen_negocio = this.img_negocio;
    this.dataModel.estadoL = "Guerrero";
    this.dataModel.municipio = this.validacionForm.value.municipio;
    this.dataModel.localidad = this.validacionForm.value.localidad;
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.direccion = this.validacionForm.value.direccion;
    this.dataModel.telefono = this.validacionForm.value.telefono;
    this.dataModel.celular = this.validacionForm.value.celular;
    this.dataModel.facebook = this.validacionForm.value.facebook;
    this.dataModel.horario_ser = this.validacionForm.value.horario_ser;
    this.dataModel.correo = this.validacionForm.value.correo;
  }

  /**
 * METODO DE ACTUALIZACION DE DATOS
 */
  onSubmitEdit() {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this.recogerAsignar();
    this._empresaService.updateDataNegocio(this.dataModel).subscribe(
      response => {

        if (response.status == 'success') {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          Swal.fire("Negocio actualizado",
            "Datos actualizados correctamente",
            "success").then((value) => {
              window.location.href = window.location.href;
            });
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  crearVistasImg(rutaImg, nameImage) {

    var div = this.renderer.createElement("div"); //CREAMOS EL div
    var subdiv = this.renderer.createElement("div"); //CREAMOS EL div
    var btnEliminar = this.renderer.createElement("button"); //CREAMOS EL div
    var textEliminar = this.renderer.createText("Eliminar"); //CREAMOS UN TEXTO
    var img = this.renderer.createElement("img"); //CREAMOS LA IMG

    //SE AÑADE CLASES
    this.renderer.addClass(div, "div-img");
    //this.renderer.setAttribute(div,"#","divImg");
    this.renderer.addClass(subdiv, "div-btn");
    this.renderer.addClass(btnEliminar, "btnPerfil-negocio");
    this.renderer.addClass(btnEliminar, "btnEliminar");

    //EVENTO CLICK PARA LOS BOTONES ELIMINAR
    this.renderer.listen(btnEliminar, 'click', (event) => {
      this.deleteImage(nameImage);
    })

    this.renderer.setAttribute(img, "src", rutaImg);//AÑADIMOS VALOR AL ATRIBUTO SRC
    this.renderer.appendChild(btnEliminar, textEliminar); //AÑADIMOS UN TEXTO AL BOTON
    this.renderer.appendChild(div, img); //AGREGAMOS LA IMG AL CONTENEDOR DIV
    this.renderer.appendChild(subdiv, btnEliminar); //AGREGAMOS EL BOTON ELLIMINAR AL CONTENEDOR SUBDIV
    this.renderer.appendChild(div, subdiv); //AGREGAMOS EL div AL CONTENEDOR DIV principal
    this.renderer.appendChild(this.contenedorImg.nativeElement, div); //AGREGAMOS EL div AL CONTENEDOR DIV principal
  }

  tamanioImg: number;
  /*SELECCIONAMOS LA IMAGEN*/
  selectImage(event) {
    console.log(this.selectedFiles);
    this.tamanioImg = 400000;
    this.selectedFiles = event.target.files;
    if (this.selectedFiles[0].size > this.tamanioImg) {
      this.selectedFiles = undefined;
      Swal.fire("Tamaño de la imagen grande",
        "La imagen debe pesar menos de " + this.tamanioImg / 1000 + " KB",
        "info");
    }
  }

  /*SUBIR LA IMAGEN AL SERVIDOR NODEJS*/
  uploadImage() {

    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    this._empresaService.uploadImage(this.currentFileUpload).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          window.location.href = window.location.href;
          this.datosEdit();
        }
      });

    this.selectedFiles = undefined;

  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {
    this._empresaService.getImageFile(nameImage).subscribe(
      response => {
        this.createImageFromBlob(response, nameImage);
      },
      error => {
        console.log(error);
      }
    );
  }

  imageFile: File;
  imageResultBlob: any;
  //convierte el objecto Blob en un data leido por la etiqueta img
  createImageFromBlob(image: Blob, nameImage) {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {

      this.imageResultBlob = event.target.result;
      this.crearVistasImg(this.imageResultBlob, nameImage);
    }
  }

  /*ELIMINA LAS IMAGENES GUARDADAS EN EL BACKEND */
  deleteImage(nameImage) {
    this._empresaService.deleteImageNegocio(nameImage).subscribe(
      response => {
        if (response.status == 'success') {
          this.deleteImageMongodb();
        }
      }
    );
  }

  /*ELIMINA LAS RUTAS DE LAS IMAGENES GUARDADOS EN MONGODB */
  deleteImageMongodb() {
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.img_negocio = null;
    this.onSubmitEdit();
  }


  UpdatePassword() {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    let data = {
      passwordOld: this.validacionFormPassw.value.passwordOld,
      passwordNew: this.validacionFormPassw.value.passwordNew,
    }

    this._empresaService.updatePassword(data).subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Datos actualizados correctamente",
            "Contraseña actualizada",
            "success").then((value) => {
              window.location.href = window.location.href;
            });
        }
      },
      error => {

      }
    );

  }

  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    localidad: false,
    nombre: false,
    direccion: false,
    telefono: false,
    celular: false,
    facebook: false,
    horario_ser: false,
    correo: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "localidad") { this.listaDatosMostrar.localidad = valor; }
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "direccion") { this.listaDatosMostrar.direccion = valor; }
    if (nombreCampo == "telefono") { this.listaDatosMostrar.telefono = valor; }
    if (nombreCampo == "celular") { this.listaDatosMostrar.celular = valor; }
    if (nombreCampo == "facebook") { this.listaDatosMostrar.facebook = valor; }
    if (nombreCampo == "horario_ser") { this.listaDatosMostrar.horario_ser = valor; }
    if (nombreCampo == "correo") { this.listaDatosMostrar.correo = valor; }
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

  //==========================================================================
  /**
* ELIMINA LOS DATOS DEL REGISTRO EN MONGODB E IMAGENES DE NODEJS
* @param _id 
*/
  eliminarCuenta() {

    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción la cuenta se eliminará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete.isConfirmed) {
          //SE ELIMINA LA CARPETA DEL NEGOCIO GUARDADO EN EL BACKEND
          this.deleteFileNegocio(this._idNegocio);

        } else if (willDelete.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Acción cancelada",
            "Registro no eliminado",
            "info");
        }
      });
  }

  /**
    * ELIMINA LAS IMAGENES RELACIONADAS CON REGISTRO GUARDADAS EN NODEJS
    * @param _id 
    */
  deleteFileNegocio(_id) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._adminService.deleteFileProduc(_id).subscribe(
      response => {
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          //SE ELIMINA EL REGISTRO GUARDADO EN MONGODB
          this.deleteData(_id);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * ELIMINA EL REGISTRO GUARDADO EN MONGODB
   */
  deleteData(_id) {
    this._adminService.deleteDataNegocio(_id).subscribe(
      response => {

        if (response.status == "success") {
          Swal.fire("Acción completado",
            "Cuenta eliminado",
            "success").then((value) => {
              this._datosGlobales.deleteAuthorization();
              this._datosGlobales.deleteTipoUserAuthorization();
              this._router.navigate(['/home']);
            });

        }
      },
      error => {
        console.log(error);
      }
    );
  }
  //================================================
}