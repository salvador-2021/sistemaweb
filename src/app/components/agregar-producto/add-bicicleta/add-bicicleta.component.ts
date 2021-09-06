import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import Swal from 'sweetalert2';

import { BicicletaService } from '../../../services/bicicleta.service';
import { BicicletaModel } from '../../../models/bicicleta';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR
import { DatosGlobales } from '../../../services/datosGlobales';

@Component({
  selector: 'app-add-bicicleta',
  templateUrl: './add-bicicleta.component.html',
  styleUrls: ['./add-bicicleta.component.css'],
  providers: [BicicletaService]

})
export class AddBicicletaComponent implements OnInit {
  public _datosGlobales: DatosGlobales;
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: BicicletaModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: BicicletaModel;
  public editDatos: Boolean;
  public titlePage: String;
  public _idProducto: string;

  selecImage: boolean;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //Contiene los nombres de las imagenes
  listImagen: any[];

  campaignOne: FormGroup;

  constructor(
    private renderer: Renderer2,
    private _bicicletaService: BicicletaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this._datosGlobales = new DatosGlobales();
    //O SE EJECUTA EL CONSTRUCTOR');
    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";
    this.dataModel = new BicicletaModel(" ", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, null, null, 0, null, null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.nullValidator, Validators.maxLength(300)]],
      medidas: ['', [Validators.required, Validators.maxLength(50)]],
      velocidades: ['', [Validators.required, Validators.maxLength(50)]],
      marca: ['', [Validators.required, Validators.maxLength(50)]],
      material: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      frenos: ['', [Validators.required, Validators.maxLength(50)]],
      pedales: ['', [Validators.nullValidator, Validators.maxLength(50)]],
      pesoProducto: ['', [Validators.required, Validators.maxLength(30)]],
      pesoSoportado: ['', [Validators.nullValidator, Validators.maxLength(30)]],
      genero: ['', [Validators.nullValidator, Validators.maxLength(30)]],
      color: ['', [Validators.nullValidator, Validators.maxLength(50)]],
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

  /*INICIALIZA LOS VALORES DEL PRODUCTO EN CASO DE QUE SE QUIERAN EDITAR */
  ngOnInit(): void {
    //this.getImageName();
    
    this.datosEdit();

  }

  datosEdit() {
    
    this._idProducto = null
    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        
        this._idProducto = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";
        
        this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
        this._bicicletaService.getProductNegocio(_id).subscribe(

          response => {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

            if (response.status == 'success') {

              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message.bicicleta;
              //recuperamos la lista de nombres de las imagenes
              this.listImagen = response.message.bicicleta[0].imagen;
              //recorremos la lista de nombre de las imagenes
              //Falta condicion si es null
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
                  medidas: this.dataModelUpdate[0].medidas,
                  velocidades: this.dataModelUpdate[0].velocidades,
                  marca: this.dataModelUpdate[0].marca,
                  material: this.dataModelUpdate[0].material,
                  frenos: this.dataModelUpdate[0].frenos,
                  pedales: this.dataModelUpdate[0].pedales,
                  pesoProducto: this.dataModelUpdate[0].pesoProducto,
                  pesoSoportado: this.dataModelUpdate[0].pesoSoportado,
                  genero: this.dataModelUpdate[0].genero,
                  color: this.dataModelUpdate[0].color,
                  otra_inf: this.dataModelUpdate[0].otra_inf,
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
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA           

          }
        );
      }
    });
  }


  /**
  * METODO PARA GUARDAR DATOS DEL PRODUCTO
  */
  onSubmit() {
    this.recogerAsignar();
    
    if (this.campaignOne.value.start == null || this.campaignOne.value.end == null) {
      Swal.fire('Datos incorrectos',
      'Corrige la fecha de promoción',
      'error');
    } else {
      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      
      this._bicicletaService.saveData(this.dataModel).subscribe(
        response => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          if (response.status == 'success') {

            Swal.fire("Producto creado",
              "Datos guardados correctamente",
              "success").then((value) => {

                this._idProducto = response.message;
                this._router.navigate(['/negocio/agregar-bicicleta', this._idProducto]);

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
    this.dataModel.medidas = this.validacionForm.value.medidas;
    this.dataModel.velocidades = this.validacionForm.value.velocidades;
    this.dataModel.marca = this.validacionForm.value.marca;
    this.dataModel.material = this.validacionForm.value.material;
    this.dataModel.frenos = this.validacionForm.value.frenos;
    this.dataModel.pedales = this.validacionForm.value.pedales;
    this.dataModel.pesoProducto = this.validacionForm.value.pesoProducto;
    this.dataModel.pesoSoportado = this.validacionForm.value.pesoSoportado;
    this.dataModel.genero = this.validacionForm.value.genero;
    this.dataModel.color = this.validacionForm.value.color;
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
      
      this._bicicletaService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
        response => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          if (response.status == 'success') {

            Swal.fire("Producto Actualizado",
              "Datos actualizado correctamente",
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
    //Cambio
    if (this.listImagen == null) {
      this.listImagen = [];
    }

    if (this.listImagen.length < 3) {

      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      this._bicicletaService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
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

    this._bicicletaService.getImageName(nameImage).subscribe(
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
    this._bicicletaService.deleteImageProduct(nameImage).subscribe(
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
    medidas: false,
    velocidades: false,
    marca: false,
    material: false,
    frenos: false,
    pedales: false,
    pesoProducto: false,
    pesoSoportado: false,
    color: false,
    otra_inf: false,
    precio: false,
    precio_anterior: false,
    existencia: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "descripcion") { this.listaDatosMostrar.descripcion = valor; }
    if (nombreCampo == "medidas") { this.listaDatosMostrar.medidas = valor; }
    if (nombreCampo == "velocidades") { this.listaDatosMostrar.velocidades = valor; }
    if (nombreCampo == "marca") { this.listaDatosMostrar.marca = valor; }
    if (nombreCampo == "material") { this.listaDatosMostrar.material = valor; }
    if (nombreCampo == "frenos") { this.listaDatosMostrar.frenos = valor; }
    if (nombreCampo == "pedales") { this.listaDatosMostrar.pedales = valor; }
    if (nombreCampo == "pesoProducto") { this.listaDatosMostrar.pesoProducto = valor; }
    if (nombreCampo == "pesoSoportado") { this.listaDatosMostrar.pesoSoportado = valor; }
    if (nombreCampo == "color") { this.listaDatosMostrar.color = valor; }
    if (nombreCampo == "otra_inf") { this.listaDatosMostrar.otra_inf = valor; }
    if (nombreCampo == "precio") { this.listaDatosMostrar.precio = valor; }
    if (nombreCampo == "precio_anterior") { this.listaDatosMostrar.precio_anterior = valor; }
    if (nombreCampo == "existencia") { this.listaDatosMostrar.existencia = valor; }
  }

}
