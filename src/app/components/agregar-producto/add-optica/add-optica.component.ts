import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { OpticaService } from '../../../services/optica.service';
import { OpticaModel } from '../../../models/optica';
import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR


@Component({
  selector: 'app-add-optica',
  templateUrl: './add-optica.component.html',
  styleUrls: ['./add-optica.component.css'],
  providers: [OpticaService]
})
export class AddOpticaComponent implements OnInit {

  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: OpticaModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: OpticaModel;
  public editDatos: Boolean;
  public titlePage: String;
  public _idProducto: string;

  selectedFiles: FileList;
  selecImage: boolean;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //Contiene los nombres de las imagenes
  listImagen: any[];

  campaignOne: FormGroup;

  constructor(
    private renderer: Renderer2,
    private _opticaService: OpticaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";

    this.dataModel = new OpticaModel("", "", "", "", "", "", "", 0, 0, null, null, 0, null, null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.nullValidator, Validators.maxLength(300)]],
      incluye: ['', [Validators.nullValidator, Validators.maxLength(200)]],
      unidadventa: ['Pieza', Validators.required],
      marca: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      numero: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      precio: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/), Validators.maxLength(10)]],
      precio_anterior: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/), Validators.maxLength(10)]],
      existencia: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(7)]]
    });

    //=================CODIGO PARA FECHAS==============================
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month)),
      end: new FormControl(new Date(year, month))
    });
    //==================================================
  }

  ngOnInit(): void {
    this.datosEdit();
  }

  datosEdit() {
        
    this._idProducto = null;
    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idProducto = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";
        
        this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

        this._opticaService.getProductNegocio(_id).subscribe(
          
          response => {

            if (response.status == 'success') {
              this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
              
              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message.optica;
              //recuperamos la lista de nombres de las imagenes
              this.listImagen = this.dataModelUpdate[0].imagen;
              //recorremos la lista de nombre de las imagenes
              this.selecImage = true;
              if (this.listImagen != null) {
                this.listImagen.forEach(data => {
                  this.getImageName(data.ruta);
                });

                if (this.listImagen.length == 3) {
                  this.selecImage = false;
                }
              }

              this.validacionForm.setValue(
                {
                  nombre: this.dataModelUpdate[0].nombre,
                  descripcion: this.dataModelUpdate[0].descripcion,
                  incluye: this.dataModelUpdate[0].incluye,
                  unidadventa: this.dataModelUpdate[0].unidadventa,
                  marca: this.dataModelUpdate[0].marca,
                  numero: this.dataModelUpdate[0].numero,
                  existencia: this.dataModelUpdate[0].existencia,
                  precio: this.dataModelUpdate[0].precio,
                  precio_anterior: this.dataModelUpdate[0].precio_anterior,
                }
              );

              this.campaignOne.setValue(
                {
                  start: this.dataModelUpdate[0].fecha_inicio,
                  end: this.dataModelUpdate[0].fecha_fin
                }
              );

            }
          },
          error => {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          }
        );
      }
    });
  }

  onSubmit() {
    
    this.recogerAsignar();
    
    if (this.campaignOne.value.start == null || this.campaignOne.value.end == null) {
      Swal.fire('Datos incorrectos',
      'Corrige la fecha de promoción',
      'error');
    } else {
      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      
      this._opticaService.saveData(this.dataModel).subscribe(
        response => {
          if (response.status == 'success') {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

            Swal.fire("Producto creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                this._idProducto = response.message;
                this._router.navigate(['/negocio/agregar-optica', this._idProducto]);
              });
          }
        },
        error => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        }
      );
    }
  }

  recogerAsignar() {
    if (this._idProducto != null) {
      this.dataModel._id = this._idProducto;
    }
    this.dataModel.imagen = this.listImagen;
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.descripcion = this.validacionForm.value.descripcion;
    this.dataModel.incluye = this.validacionForm.value.incluye;
    this.dataModel.unidadventa = this.validacionForm.value.unidadventa;
    this.dataModel.marca = this.validacionForm.value.marca;
    this.dataModel.numero = this.validacionForm.value.numero;
    this.dataModel.existencia = this.validacionForm.value.existencia;
    this.dataModel.precio = this.validacionForm.value.precio;
    this.dataModel.precio_anterior = this.validacionForm.value.precio_anterior;
    this.dataModel.fecha_inicio = this.campaignOne.value.start;
    this.dataModel.fecha_fin = this.campaignOne.value.end;
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
    
    if (this.campaignOne.value.start == null || this.campaignOne.value.end == null) {
      Swal.fire('Datos incorrectos',
      'Corrige la fecha de promoción',
      'error');
    } else {
      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

      this._opticaService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
        response => {

          if (response.status == 'success') {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

            Swal.fire("Producto actualizado",
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
    //CAMBIO<============================= ya no hay cambios
    if (this.listImagen == null) {
      this.listImagen = [];
    }

    if (this.listImagen.length < 3) {

      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      this._opticaService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
        event => {

          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            window.location.href = window.location.href;
            this.datosEdit();
          }

        });

      this.selectedFiles = undefined;
    } else {
      Swal.fire("Archivo máximo",
        "Solo puedes guardar 3 imagenes, gracias",
        "info");
    }
  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {

    this._opticaService.getImageName(nameImage).subscribe(
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
    this._opticaService.deleteImageProduct(nameImage).subscribe(
      response => {

        if (response.status == 'success') {
          this.deleteImageMongodb(nameImage);
        }
      }
    );
  }

  /*ELIMINA LOS DATOS GUARDADOS EN MONGODB */
  deleteImageMongodb(nameImage) {
    var index = this.listImagen.findIndex(function (item, i) {
      return item.ruta === nameImage
    });
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.listImagen.splice(index, 1);
    this.onSubmitEdit();
  }

  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    nombre: false,
    descripcion: false,
    incluye: false,
    marca: false,
    numero: false,
    precio: false,
    precio_anterior: false,
    existencia: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "descripcion") { this.listaDatosMostrar.descripcion = valor; }
    if (nombreCampo == "incluye") { this.listaDatosMostrar.incluye = valor; }
    if (nombreCampo == "marca") { this.listaDatosMostrar.marca = valor; }
    if (nombreCampo == "numero") { this.listaDatosMostrar.numero = valor; }
    if (nombreCampo == "precio") { this.listaDatosMostrar.precio = valor; }
    if (nombreCampo == "precio_anterior") { this.listaDatosMostrar.precio_anterior = valor; }
    if (nombreCampo == "existencia") { this.listaDatosMostrar.existencia = valor; }
  }

}
