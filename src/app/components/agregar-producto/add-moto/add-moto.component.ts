import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { MotoService } from '../../../services/moto.service';
import { MotoModel } from '../../../models/moto';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styleUrls: ['./add-moto.component.css'],
  providers: [MotoService]
})
export class AddMotoComponent implements OnInit {

  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: MotoModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: MotoModel;
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
    private _motoService: MotoService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {

    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";
    this.dataModel = new MotoModel("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, null, null, 0, null, null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descrip_motor: ['', [Validators.required, Validators.maxLength(300)]],
      marca: ['', [Validators.required, Validators.maxLength(50)]],
      transmision: ['', [Validators.required, Validators.maxLength(50)]],
      potencia_max: ['', [Validators.required, Validators.maxLength(50)]],
      torque_max: ['', [Validators.required, Validators.maxLength(50)]],
      peso_maxCarga: ['', [Validators.required, Validators.maxLength(50)]],
      peso_moto: ['', [Validators.required, Validators.maxLength(50)]],
      refrigeracion: ['', [Validators.required, Validators.maxLength(50)]],
      bateria: ['', [Validators.required, Validators.maxLength(50)]],
      suspen_Trasera: ['', [Validators.required, Validators.maxLength(50)]],
      suspen_delantera: ['', [Validators.required, Validators.maxLength(50)]],
      llanta_trasera: ['', [Validators.required, Validators.maxLength(50)]],
      llanta_delantera: ['', [Validators.required, Validators.maxLength(50)]],
      ancho: ['', [Validators.required, Validators.maxLength(50)]],
      altura: ['', [Validators.required, Validators.maxLength(50)]],
      anio_modelo: ['', [Validators.required, Validators.maxLength(50)]],
      capacidad_tanque: ['', [Validators.required, Validators.maxLength(50)]],
      cilindraje: ['', [Validators.required, Validators.maxLength(50)]],
      color: ['', [Validators.required, Validators.maxLength(50)]],
      garantia: ['', [Validators.required, Validators.maxLength(100)]],
      otra_inf: ['', [Validators.nullValidator, Validators.maxLength(300)]],
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

        this._motoService.getProductNegocio(_id).subscribe(

          response => {

            if (response.status == 'success') {
              this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message.moto;
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
                  descrip_motor: this.dataModelUpdate[0].descrip_motor,
                  marca: this.dataModelUpdate[0].marca,
                  transmision: this.dataModelUpdate[0].transmision,
                  potencia_max: this.dataModelUpdate[0].potencia_max,
                  torque_max: this.dataModelUpdate[0].torque_max,
                  peso_maxCarga: this.dataModelUpdate[0].peso_maxCarga,
                  peso_moto: this.dataModelUpdate[0].peso_moto,
                  refrigeracion: this.dataModelUpdate[0].refrigeracion,
                  bateria: this.dataModelUpdate[0].bateria,
                  suspen_Trasera: this.dataModelUpdate[0].suspen_Trasera,
                  suspen_delantera: this.dataModelUpdate[0].suspen_delantera,
                  llanta_trasera: this.dataModelUpdate[0].llanta_trasera,
                  llanta_delantera: this.dataModelUpdate[0].llanta_delantera,
                  ancho: this.dataModelUpdate[0].ancho,
                  altura: this.dataModelUpdate[0].altura,
                  anio_modelo: this.dataModelUpdate[0].anio_modelo,
                  capacidad_tanque: this.dataModelUpdate[0].capacidad_tanque,
                  cilindraje: this.dataModelUpdate[0].cilindraje,
                  color: this.dataModelUpdate[0].color,
                  garantia: this.dataModelUpdate[0].garantia,
                  otra_inf: this.dataModelUpdate[0].otra_inf,
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

      this._motoService.saveData(this.dataModel).subscribe(
        response => {
          if (response.status == 'success') {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

            Swal.fire("Producto creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                this._idProducto = response.message;
                this._router.navigate(['/negocio/agregar-moto', this._idProducto]);
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
    this.dataModel.descrip_motor = this.validacionForm.value.descrip_motor;
    this.dataModel.marca = this.validacionForm.value.marca;
    this.dataModel.transmision = this.validacionForm.value.transmision;
    this.dataModel.potencia_max = this.validacionForm.value.potencia_max;
    this.dataModel.torque_max = this.validacionForm.value.torque_max;
    this.dataModel.peso_maxCarga = this.validacionForm.value.peso_maxCarga;
    this.dataModel.peso_moto = this.validacionForm.value.peso_moto;
    this.dataModel.refrigeracion = this.validacionForm.value.refrigeracion;
    this.dataModel.bateria = this.validacionForm.value.bateria;
    this.dataModel.suspen_Trasera = this.validacionForm.value.suspen_Trasera;
    this.dataModel.suspen_delantera = this.validacionForm.value.suspen_delantera;
    this.dataModel.llanta_trasera = this.validacionForm.value.llanta_trasera;
    this.dataModel.llanta_delantera = this.validacionForm.value.llanta_delantera;
    this.dataModel.ancho = this.validacionForm.value.ancho;
    this.dataModel.altura = this.validacionForm.value.altura;
    this.dataModel.anio_modelo = this.validacionForm.value.anio_modelo;
    this.dataModel.capacidad_tanque = this.validacionForm.value.capacidad_tanque;
    this.dataModel.cilindraje = this.validacionForm.value.cilindraje;
    this.dataModel.color = this.validacionForm.value.color;
    this.dataModel.garantia = this.validacionForm.value.garantia;
    this.dataModel.otra_inf = this.validacionForm.value.otra_inf;
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

      this._motoService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
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

      this._motoService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
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

    this._motoService.getImageName(nameImage).subscribe(
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
    this._motoService.deleteImageProduct(nameImage).subscribe(
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
    descrip_motor: false,
    marca: false,
    transmision: false,
    potencia_max: false,
    torque_max: false,
    peso_maxCarga: false,
    peso_moto: false,
    refrigeracion: false,
    bateria: false,
    suspen_Trasera: false,
    suspen_delantera: false,
    llanta_trasera: false,
    llanta_delantera: false,
    ancho: false,
    altura: false,
    anio_modelo: false,
    capacidad_tanque: false,
    cilindraje: false,
    color: false,
    garantia: false,
    otra_inf: false,
    precio: false,
    precio_anterior: false,
    existencia: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "descrip_motor") { this.listaDatosMostrar.descrip_motor = valor; }
    if (nombreCampo == "marca") { this.listaDatosMostrar.marca = valor; }
    if (nombreCampo == "transmision") { this.listaDatosMostrar.transmision = valor; }
    if (nombreCampo == "potencia_max") { this.listaDatosMostrar.potencia_max = valor; }
    if (nombreCampo == "torque_max") { this.listaDatosMostrar.torque_max = valor; }
    if (nombreCampo == "peso_maxCarga") { this.listaDatosMostrar.peso_maxCarga = valor; }
    if (nombreCampo == "peso_moto") { this.listaDatosMostrar.peso_moto = valor; }
    if (nombreCampo == "refrigeracion") { this.listaDatosMostrar.refrigeracion = valor; }
    if (nombreCampo == "bateria") { this.listaDatosMostrar.bateria = valor; }
    if (nombreCampo == "suspen_Trasera") { this.listaDatosMostrar.suspen_Trasera = valor; }
    if (nombreCampo == "suspen_delantera") { this.listaDatosMostrar.suspen_delantera = valor; }
    if (nombreCampo == "llanta_trasera") { this.listaDatosMostrar.llanta_trasera = valor; }
    if (nombreCampo == "llanta_delantera") { this.listaDatosMostrar.llanta_delantera = valor; }
    if (nombreCampo == "anio_modelo") { this.listaDatosMostrar.anio_modelo = valor; }
    if (nombreCampo == "altura") { this.listaDatosMostrar.altura = valor; }
    if (nombreCampo == "capacidad_tanque") { this.listaDatosMostrar.capacidad_tanque = valor; }
    if (nombreCampo == "cilindraje") { this.listaDatosMostrar.cilindraje = valor; }
    if (nombreCampo == "color") { this.listaDatosMostrar.color = valor; }
    if (nombreCampo == "garantia") { this.listaDatosMostrar.garantia = valor; }
    if (nombreCampo == "otra_inf") { this.listaDatosMostrar.otra_inf = valor; }
    if (nombreCampo == "precio") { this.listaDatosMostrar.precio = valor; }
    if (nombreCampo == "precio_anterior") { this.listaDatosMostrar.precio_anterior = valor; }
    if (nombreCampo == "existencia") { this.listaDatosMostrar.existencia = valor; }
  }

}
