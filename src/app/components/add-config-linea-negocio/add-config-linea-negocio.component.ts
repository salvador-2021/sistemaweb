import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { ImgLineaNegocioService } from '../../services/mycompany/img_linea_negocio.service';
import { ImgLineaNegocioModel } from '../../models/img_linea_negocio';
import { DatosGlobales } from '../../services/datosGlobales';

@Component({
  selector: 'app-add-config-linea-negocio',
  templateUrl: './add-config-linea-negocio.component.html',
  styleUrls: ['./add-config-linea-negocio.component.css'],
  providers: [ImgLineaNegocioService]
})
export class AddConfigLineaNegocioComponent implements OnInit {
  public _datosGlobales: DatosGlobales;
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: ImgLineaNegocioModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: ImgLineaNegocioModel;
  public editDatos: Boolean;
  public titlePage: String;
  public _idDocument: string;

  selectedFiles: FileList;
  selecImage: boolean;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //Contiene los nombres de las imagenes
  listImagen: string;


  constructor(
    private renderer: Renderer2,
    private _imgLineaNegocioService: ImgLineaNegocioService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._datosGlobales = new DatosGlobales();
    this.listImagen = null;
    this.editDatos = false;
    this.titlePage = "AGREGAR LINEA DE NEGOCIO";
    this.dataModel = new ImgLineaNegocioModel("", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  /*INICIALIZA LOS VALORES DEL PRODUCTO EN CASO DE QUE SE QUIERAN EDITAR */
  ngOnInit(): void {
    this.datosEdit();
  }

  /*RECUPERADO LOS DATOS DEL PRODUCTO POR ID*/
  datosEdit() {
    this._idDocument = null;

    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idDocument = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";

        this._imgLineaNegocioService.getData(_id).subscribe(
          response => {
            if (response.status == 'success') {
              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message;
              //recuperamos la lista de nombres de las imagenes
              this.listImagen = this.dataModelUpdate.ruta;
              //recorremos la lista de nombre de las imagenes
              this.selecImage = true;

              if (this.listImagen != null) {
                this.getImageName(this.listImagen);
                this.selecImage = false;
              }

              this.validacionForm.setValue(
                {
                  title: this.dataModelUpdate.title,
                  description: this.dataModelUpdate.description,
                }
              );
            }
          },
          error => {}
        );
      }
    });
  }

  /**
  * METODO PARA GUARDAR DATOS DEL PRODUCTO
  */
  onSubmit() {
    this.recogerAsignar();
    
    this._imgLineaNegocioService.saveData(this.dataModel).subscribe(
      response => {
        if (response.status == 'success') {

          Swal.fire("Registro creado",
            "Datos guardados correctamente",
            "success").then((value) => {
              this._idDocument = response.message;
              this._router.navigate(['/add-config-linea-negocio', this._idDocument]);
            });
        }
      },
      error => {

      }
    );
  }

  recogerAsignar() {
    if (this._idDocument != null) {
      this.dataModel._id = this._idDocument;
    }
    this.dataModel.ruta = this.listImagen;
    this.dataModel.title = this.validacionForm.value.title;
    this.dataModel.description = this.validacionForm.value.description;
  }

  /**
   * METODO PARA VERIFICAR SI VA A GUARDAR O ACTUALIZAR
   */
  saveOrUpdate() {
    if (this.editDatos) {
      this.onSubmitEdit();
    } else {
      this.onSubmit();
    }
  }

  /**
   * METODO DE ACTUALIZACION DE DATOS
   */
  onSubmitEdit() {
    this.recogerAsignar();
    this._imgLineaNegocioService.updateData(this._idDocument, this.dataModel).subscribe(
      response => {

        if (response.status == 'success') {

          Swal.fire("Registro actualizado",
            "Datos actualizados correctamente",
            "success").then((value) => {
              window.location.href = window.location.href;
            });
        }
      },
      error => {

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
    this.tamanioImg = this._datosGlobales.tamanioImg;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles[0].size > this.tamanioImg) {
      this.selectedFiles = undefined;
      Swal.fire("Tamaño de la imagen grande",
        this._datosGlobales.msjTamanioImg,
        "info");
    }
  }

  /*SUBIR LA IMAGEN AL SERVIDOR NODEJS*/
  uploadImage() {
    if (this.listImagen == null) {
      this.listImagen = "";
    }

    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    this._imgLineaNegocioService.uploadImage(this.currentFileUpload, this._idDocument).subscribe(

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
    this._imgLineaNegocioService.getImageName(nameImage).subscribe(
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
    this._imgLineaNegocioService.deleteImageProduct(nameImage).subscribe(
      response => {
        if (response.status == 'success') {
          this.deleteImageMongodb();
        }
      }
    );
  }

  /*ELIMINA LAS RUTAS DE LAS IMAGENES GUARDADOS EN MONGODB */
  deleteImageMongodb() {
    this.listImagen = null;
    this.onSubmitEdit();
  }

}
