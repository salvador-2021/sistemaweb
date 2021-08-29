import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { PerfilService } from '../../services/perfil.service';
import { PerfilModel } from '../../models/perfil';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [PerfilService]
})

export class PerfilComponent implements OnInit {
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: PerfilModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: PerfilModel;
  public editDatos: Boolean;
  public titlePage: String;
  //public _idProducto: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //Foto de perfil
  profilePicture: any;

  constructor(
    private renderer: Renderer2,
    private _perfilService: PerfilService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";

    this.dataModel = new PerfilModel("", "", "", "", "", "");

    this.validacionForm = this.formBuilder.group({
      nombre_responsable: ['', [Validators.required, Validators.maxLength(50)]],
      cedula_profesional: ['', [Validators.required, Validators.maxLength(50)]],
      especializacion: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    this.datosEdit();
  }

  datosEdit() {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._perfilService.getData().subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
                
        if (response.status == 'success') {

          if (response.message.perfil != null) {
            this.editDatos = true;
            //Recuperamos la lista de productos
            this.dataModelUpdate = response.message.perfil;

            //recuperamos la lista de nombres de las imagenes
            this.profilePicture = this.dataModelUpdate.imagen;
           
            if (this.profilePicture != null) {
              this.getImageName(this.profilePicture);
            }

            this.validacionForm.setValue(
              {
                nombre_responsable: this.dataModelUpdate.nombre_responsable,
                cedula_profesional: this.dataModelUpdate.cedula_profesional,
                especializacion: this.dataModelUpdate.especializacion,
              }
            );
          }

        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

      }
    );
  }
  onSubmit() {

    this.recogerAsignar();
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    
    this._perfilService.saveUpdateData(this.dataModel).subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        if (response.status == 'success') {
         
          if (this.datosEdit) {
            Swal.fire("Perfil actualizado",
              "Datos actualizados correctamente",
              "success").then((value) => {
                window.location.href = window.location.href;
              });
          } else {
            Swal.fire("Perfil creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                window.location.href = window.location.href;
              });
          }

        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
      }
    );
  }

  recogerAsignar() {
    this.dataModel.imagen = this.profilePicture;
    this.dataModel.nombre_responsable = this.validacionForm.value.nombre_responsable;
    this.dataModel.cedula_profesional = this.validacionForm.value.cedula_profesional;
    this.dataModel.especializacion = this.validacionForm.value.especializacion;
  }

  deletePerfil() {

    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez que se completa la acción los datos se eliminarán permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete) {

          if (this.profilePicture != null) {
            this.deleteImage(this.profilePicture);
          }

          this._perfilService.deleteData().subscribe(
            response => {
              
              if (response.status == "success") {

                Swal.fire("Acción completado",
                  "Perfil eliminado",
                  "success").then((value) => {
                    window.location.href = window.location.href;
                  });
              }
            }
          );

        } else {
          Swal.fire("Acción cancelada",
            "Perfil no eliminado",
            "info");
        }
      });


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
    });

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
    this.profilePicture =  this.currentFileUpload;
    this._perfilService.uploadImage(this.currentFileUpload).subscribe(
      event => {

        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.onSubmit();
          window.location.href = window.location.href;
        }

      });
    this.selectedFiles = undefined;
  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {

    this._perfilService.getImageName(nameImage).subscribe(
      response => {
        this.createImageFromBlob(response, nameImage);
      },
      error => {
        
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
    this._perfilService.deleteImage(nameImage).subscribe(
      response => {
        
        if (response.status == 'success') {
          /*ELIMINA LOS DATOS GUARDADOS EN MONGODB */
          this.profilePicture = null;
          this.onSubmit();
        }
      }
    );
  }

  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    nombre_responsable: false,
    cedula_profesional: false,
    especializacion: false,
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre_responsable") { this.listaDatosMostrar.nombre_responsable = valor; }
    if (nombreCampo == "cedula_profesional") { this.listaDatosMostrar.cedula_profesional = valor; }
    if (nombreCampo == "especializacion") { this.listaDatosMostrar.especializacion = valor; }
  }
}
