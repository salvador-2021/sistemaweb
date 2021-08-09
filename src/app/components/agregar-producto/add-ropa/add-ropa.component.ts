import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { RopaService } from '../../../services/ropas.services';
import { RopaModel } from '../../../models/ropa';

@Component({
  selector: 'app-add-ropa',
  templateUrl: './add-ropa.component.html',
  styleUrls: ['./add-ropa.component.css'],
  providers: [RopaService]
})
export class AddRopaComponent implements OnInit {
  messageForEmptyColor: string;
  messageForEmptyTalla: string;

  @ViewChild("contenedorImg") contenedorImg: ElementRef;
  @ViewChild("txtTalla") txtTalla: ElementRef;
  @ViewChild("txtColor") txtColor: ElementRef;

  listaTallas: any[];
  listaColores: any[];

  private dataModel: RopaModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: RopaModel;
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
    private _ropaService: RopaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.listaTallas = [];
    this.listaColores = [];
    this.listImagen = [];

    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";
    this.dataModel = new RopaModel("", "", "", "", "", "", "", null, null, "", 0, 0, null, null, 0, null, null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      tipo_ropa: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.nullValidator, Validators.maxLength(300)]],
      detalle: ['', [Validators.nullValidator, Validators.maxLength(200)]],
      marca: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      unidadventa: ['Pieza', Validators.required],
      genero: ['', Validators.required],
      talla: ['', [Validators.nullValidator, Validators.maxLength(15)]],
      color: ['', [Validators.nullValidator, Validators.maxLength(50)]],
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

        this._ropaService.getProductNegocio(_id).subscribe(
          response => {
            if (response.status == 'success') {
              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message.ropas;

              this.listaColores = this.dataModelUpdate[0].colores;
              this.listaTallas = this.dataModelUpdate[0].tallas;

              //recuperamos la lista de nombres de las imagenes
              this.listImagen = this.dataModelUpdate[0].imagen;
              //recorremos la lista de nombre de las imagenes
              this.selecImage = true;
              if (this.listImagen != null) {
                this.listImagen.forEach(data => {
                  this.getImageName(data.ruta);
                });

                //CAMBIO <==================================

                if (this.listImagen.length == 5) {
                  this.selecImage = false;
                }
              }

              this.validacionForm.setValue(
                {
                  nombre: this.dataModelUpdate[0].nombre,
                  tipo_ropa: this.dataModelUpdate[0].tipo_ropa,
                  descripcion: this.dataModelUpdate[0].descripcion,
                  detalle: this.dataModelUpdate[0].detalle,
                  marca: this.dataModelUpdate[0].marca,
                  unidadventa: this.dataModelUpdate[0].unidadventa,
                  genero: this.dataModelUpdate[0].genero,
                  talla: "",
                  color: "",
                  precio: this.dataModelUpdate[0].precio,
                  precio_anterior: this.dataModelUpdate[0].precio_anterior,
                  existencia: this.dataModelUpdate[0].existencia
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

          }
        );
      }
    });
  }

  onSubmit() {
    if (this.listaTallas == null || this.listaTallas.length == 0) {
      this.messageForEmptyTalla = "Debes de guardar al menos 1 talla, máximo 8 tallas";
    }
    if (this.listaColores == null || this.listaColores.length == 0) {
      this.messageForEmptyColor = "Debes de guardar al menos 1 color, máximo 8 colores";
    }

    if (this.listaColores != null && this.listaColores.length > 0) {
      if (this.listaTallas != null && this.listaTallas.length > 0) {

        this.recogerAsignar();
        if (this.campaignOne.value.start == null || this.campaignOne.value.end == null) {
          Swal.fire('Datos incorrectos',
            'Corrige la fecha de promoción',
            'error');
        } else {
          this._ropaService.saveData(this.dataModel).subscribe(
            response => {
              if (response.status == 'success') {
                Swal.fire("Producto creado",
                  "Datos guardados correctamente",
                  "success").then((value) => {
                    this._idProducto = response.message;
                    this._router.navigate(['/negocio/agregar-ropa', this._idProducto]);
                  });
              }
            },
            error => { }
          );

        }
      }
    }
  }

  /**
  * SE AGREGAR LAS TALLAS EN UN ARRAY Y EN UN DIV PARA LA VISTA DEL USUARIO
  */
  addTall() {
    var tallaIntroducido = this.txtTalla.nativeElement.value;

    if (tallaIntroducido) {

      if (this.listaTallas == null) {
        this.listaTallas = [];
      }

      if (this.listaTallas.length < 8) {

        this.listaTallas.push({
          talla: tallaIntroducido
        });

      } else {
        Swal.fire("Cantidad máximo",
          "Solo se le permite introducir 8 tallas diferentes",
          "info");
      }
    } else {
      Swal.fire("Campo vacio",
        "Introduzca un color",
        "info");
    }
  }

  /* createBtnTalla(text) {
     var btn = this.renderer.createElement("button"); //CREAMOS EL BOTON
     var colorIntroducidad = this.renderer.createText(text); //CREAMOS UN TEXTO
     this.renderer.appendChild(btn, colorIntroducidad); //AÑADIMOS UN TEXTO AL BOTON

     this.renderer.addClass(btn, "btn-tallas"); //AÑADIMOS UNA CLASE AL BOTON
     this.renderer.appendChild(this.contenedorTallas.nativeElement, btn); //AGREGAMOS EL BOTON AL CONTENEDOR DIV
     //EVENTO CLICK PARA LOS BOTONES
     this.renderer.listen(btn, 'click', (event) => {
       //this.deleteImage(nameImage);
       this.deleteTallaMongodb(text);
     });
   }
   */

  addColor() {
    var colorIntroducido = this.txtColor.nativeElement.value;

    if (colorIntroducido) {

      if (this.listaColores == null) {
        this.listaColores = [];
      }

      if (this.listaColores.length < 8) {

        this.listaColores.push({
          color: colorIntroducido
        });

      } else {
        Swal.fire("Cantidad máximo",
          "Solo se le permite introducir 8 colores diferentes",
          "info");
      }
    } else {
      Swal.fire("Campo vacio",
        "Introduzca un color",
        "info");
    }
  }
  /**
   * CREAMOS BOTONES DE LOS COLORES INTRODUCIDOS
   * @param text COLOR INTRODUCIDO
   */
  /*createBtnColor(text) {
    var btn = this.renderer.createElement("button"); //CREAMOS EL BOTON
    var colorIntroducidad = this.renderer.createText(text); //CREAMOS UN TEXTO
    this.renderer.appendChild(btn, colorIntroducidad); //AÑADIMOS UN TEXTO AL BOTON

    this.renderer.addClass(btn, "btn-tallas"); //AÑADIMOS UNA CLASE AL BOTON
    this.renderer.appendChild(this.contenedorColores.nativeElement, btn); //AGREGAMOS EL BOTON AL CONTENEDOR DIV
    //EVENTO CLICK PARA LOS BOTONES
    this.renderer.listen(btn, 'click', (event) => {
      //this.deleteImage(nameImage);
      this.deleteColorMongodb(text);
    });
  }*/

  recogerAsignar() {
    if (this._idProducto != null) {
      this.dataModel._id = this._idProducto;
    }

    this.dataModel.tallas = this.listaTallas;
    this.dataModel.colores = this.listaColores;
    this.dataModel.imagen = this.listImagen;
    this.dataModel.nombre = this.validacionForm.value.nombre;
    this.dataModel.tipo_ropa = this.validacionForm.value.tipo_ropa;
    this.dataModel.descripcion = this.validacionForm.value.descripcion;
    this.dataModel.detalle = this.validacionForm.value.detalle;
    this.dataModel.marca = this.validacionForm.value.marca;
    this.dataModel.unidadventa = this.validacionForm.value.unidadventa;
    this.dataModel.genero = this.validacionForm.value.genero;
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
    if (this.listaTallas == null || this.listaTallas.length == 0) {
      this.messageForEmptyTalla = "Debes de guardar al menos 1 talla, máximo 8 tallas";
    }
    if (this.listaColores == null || this.listaColores.length == 0) {
      this.messageForEmptyColor = "Debes de guardar al menos 1 color, máximo 8 colores";
    }

    if (this.listaColores != null && this.listaColores.length > 0) {
      if (this.listaTallas != null && this.listaTallas.length > 0) {

        this.recogerAsignar();
        if (this.campaignOne.value.start == null || this.campaignOne.value.end == null) {
          Swal.fire('Datos incorrectos',
            'Corrige la fecha de promoción',
            'error');
        } else {
          this._ropaService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
            response => {

              if (response.status == 'success') {
                console.log(response);
                Swal.fire("Producto actualizado",
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
      }
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
    if (this.listImagen == null) {
      this.listImagen = [];
    }

    if (this.listImagen.length < 5) {

      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      this._ropaService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
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
        "Solo puedes guardar 5 imagenes, gracias",
        "info");
    }
  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {
    this._ropaService.getImageName(nameImage).subscribe(
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
    this._ropaService.deleteImageProduct(nameImage).subscribe(
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

  /*ELIMINA LOS DATOS GUARDADOS EN MONGODB */
  deleteTallaMongodb(objectE) {

    let tallaE = objectE.talla;
    var index = this.listaTallas.findIndex(function (item, i) {
      return item.talla === tallaE
    });
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.listaTallas.splice(index, 1);

  }

  /*ELIMINA LOS DATOS GUARDADOS EN MONGODB */
  deleteColorMongodb(objectE) {

    let colorE = objectE.color;
    var index = this.listaColores.findIndex(function (item, i) {
      return item.color === colorE
    });
    //primer parametro =>posicion
    //segundo parametro =>cantida de datos a eliminar comenzando desde la posicion indicada
    this.listaColores.splice(index, 1);

  }
  //================MOSTRAR Y OCULTAR CONTADOR DE LETRAS EN LOS INPUT================================

  //OBJETO JSON DONDE ESTAS TODO LOS ATRIBUTOS DEL PRODUCTO
  listaDatosMostrar = {
    nombre: false,
    descripcion: false,
    detalle: false,
    marca: false,
    tipo_ropa: false, 
    talla: false,
    color: false,
    precio: false,
    precio_anterior: false,
    existencia: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "descripcion") { this.listaDatosMostrar.descripcion = valor; }
    if (nombreCampo == "detalle") { this.listaDatosMostrar.detalle = valor; }
    if (nombreCampo == "marca") { this.listaDatosMostrar.marca = valor; }
    if (nombreCampo == "tipo_ropa") { this.listaDatosMostrar.tipo_ropa = valor; }
    if (nombreCampo == "talla") { this.listaDatosMostrar.talla = valor; }
    if (nombreCampo == "color") { this.listaDatosMostrar.color = valor; }
    if (nombreCampo == "precio") { this.listaDatosMostrar.precio = valor; }
    if (nombreCampo == "precio_anterior") { this.listaDatosMostrar.precio_anterior = valor; }
    if (nombreCampo == "existencia") { this.listaDatosMostrar.existencia = valor; }
  }

}