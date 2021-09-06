import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { ComputadoraService } from '../../../services/computadora.service';
import { ComputadoraModel } from '../../../models/computadora';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR
import { DatosGlobales } from '../../../services/datosGlobales';

@Component({
  selector: 'app-add-computadora',
  templateUrl: './add-computadora.component.html',
  styleUrls: ['./add-computadora.component.css'],
  providers: [ComputadoraService]
})
export class AddComputadoraComponent implements OnInit {
  public _datosGlobales: DatosGlobales;
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: ComputadoraModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: ComputadoraModel;
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
    private _computadoraService: ComputadoraService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this._datosGlobales = new DatosGlobales();
    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";

    this.dataModel = new ComputadoraModel("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, 0, null, null, null, null);

    /* */
    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcionPantalla: ['', [Validators.required, Validators.maxLength(200)]],
      descripcionSO: ['', [Validators.required, Validators.maxLength(200)]],
      descripcionAlmacenamiento: ['', [Validators.required, Validators.maxLength(200)]],
      descripcionMemoriaRam: ['', [Validators.required, Validators.maxLength(200)]],
      MemoriaRamExpandible: ['', [Validators.required, Validators.maxLength(200)]],
      DescripcionGPU: ['', [Validators.required, Validators.maxLength(200)]],
      sistemaEnfriamiento: ['', [Validators.required, Validators.maxLength(200)]],
      tecnologiaDesbloqueo: ['', [Validators.required, Validators.maxLength(50)]],
      tecnologiaAudio: ['', [Validators.required, Validators.maxLength(50)]],
      color: ['', [Validators.required, Validators.maxLength(50)]],
      marca: ['', [Validators.required, Validators.maxLength(50)]],
      grosor: ['', [Validators.required, Validators.maxLength(50)]],
      peso: ['', [Validators.required, Validators.maxLength(50)]],
      cpu: ['', [Validators.required, Validators.maxLength(50)]],
      marcaCPU: ['', [Validators.required, Validators.maxLength(50)]],
      modeloCPU: ['', [Validators.required, Validators.maxLength(50)]],
      generacionCPU: ['', [Validators.required, Validators.maxLength(50)]],
      velocidadCPU: ['', [Validators.required, Validators.maxLength(50)]],
      almacenamientoEmmc: ['', [Validators.required, Validators.maxLength(50)]],
      tipoTeclado: ['', [Validators.required, Validators.maxLength(50)]],
      resolucion: ['', [Validators.required, Validators.maxLength(50)]],
      camaraWeb: ['', [Validators.required, Validators.maxLength(50)]],
      lectorDisco: ['', [Validators.required, Validators.maxLength(50)]],
      microfono: ['', [Validators.required, Validators.maxLength(50)]],
      cargador: ['', [Validators.required, Validators.maxLength(50)]],
      entradaHdmi: ['', [Validators.required, Validators.maxLength(50)]],
      puertosUsb: ['', [Validators.required, Validators.maxLength(50)]],
      puertoEthernet: ['', [Validators.required, Validators.maxLength(50)]],
      tarjetaEthernet: ['', [Validators.required, Validators.maxLength(50)]],
      bluetooth: ['', [Validators.required, Validators.maxLength(50)]],
      duracionBateria: ['', [Validators.required, Validators.maxLength(50)]],
      tipoBateria: ['', [Validators.required, Validators.maxLength(50)]],
      medidas: ['', [Validators.required, Validators.maxLength(50)]],
      unidadventa: ['Pieza', [Validators.required, Validators.maxLength(50)]],
      garantia: ['', [Validators.required, Validators.maxLength(100)]],
      otra_inf: ['', [Validators.required, Validators.maxLength(300)]],
      precio: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/), Validators.maxLength(10)]],
      precio_anterior: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/), Validators.maxLength(10)]],
      existencia: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(7)]]

    });

    //c 3
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

    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idProducto = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";

        this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

        this._computadoraService.getProductNegocio(_id).subscribe(

          response => {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

            if (response.status == 'success') {

              this.dataModelUpdate = response.message.computadora;
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
                  descripcionPantalla: this.dataModelUpdate[0].descripcionPantalla,
                  descripcionSO: this.dataModelUpdate[0].descripcionSO,
                  descripcionAlmacenamiento: this.dataModelUpdate[0].descripcionAlmacenamiento,
                  descripcionMemoriaRam: this.dataModelUpdate[0].descripcionMemoriaRam,
                  MemoriaRamExpandible: this.dataModelUpdate[0].MemoriaRamExpandible,
                  DescripcionGPU: this.dataModelUpdate[0].DescripcionGPU,
                  sistemaEnfriamiento: this.dataModelUpdate[0].sistemaEnfriamiento,
                  tecnologiaDesbloqueo: this.dataModelUpdate[0].tecnologiaDesbloqueo,
                  tecnologiaAudio: this.dataModelUpdate[0].tecnologiaAudio,
                  color: this.dataModelUpdate[0].color,
                  marca: this.dataModelUpdate[0].marca,
                  grosor: this.dataModelUpdate[0].grosor,
                  peso: this.dataModelUpdate[0].peso,
                  cpu: this.dataModelUpdate[0].cpu,
                  marcaCPU: this.dataModelUpdate[0].marcaCPU,
                  modeloCPU: this.dataModelUpdate[0].modeloCPU,
                  generacionCPU: this.dataModelUpdate[0].generacionCPU,
                  velocidadCPU: this.dataModelUpdate[0].velocidadCPU,
                  almacenamientoEmmc: this.dataModelUpdate[0].almacenamientoEmmc,
                  tipoTeclado: this.dataModelUpdate[0].tipoTeclado,
                  resolucion: this.dataModelUpdate[0].resolucion,
                  camaraWeb: this.dataModelUpdate[0].camaraWeb,
                  lectorDisco: this.dataModelUpdate[0].lectorDisco,
                  microfono: this.dataModelUpdate[0].microfono,
                  cargador: this.dataModelUpdate[0].cargador,
                  entradaHdmi: this.dataModelUpdate[0].entradaHdmi,
                  puertosUsb: this.dataModelUpdate[0].puertosUsb,
                  puertoEthernet: this.dataModelUpdate[0].puertoEthernet,
                  tarjetaEthernet: this.dataModelUpdate[0].tarjetaEthernet,
                  bluetooth: this.dataModelUpdate[0].bluetooth,
                  duracionBateria: this.dataModelUpdate[0].duracionBateria,
                  tipoBateria: this.dataModelUpdate[0].tipoBateria,
                  medidas: this.dataModelUpdate[0].medidas,
                  unidadventa: this.dataModelUpdate[0].unidadventa,
                  garantia: this.dataModelUpdate[0].garantia,
                  otra_inf: this.dataModelUpdate[0].otra_inf,
                  precio: this.dataModelUpdate[0].precio,
                  precio_anterior: this.dataModelUpdate[0].precio_anterior,
                  existencia: this.dataModelUpdate[0].existencia,

                });

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

      this._computadoraService.saveData(this.dataModel).subscribe(
        response => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          if (response.status == 'success') {

            Swal.fire("Producto creado",
              "Datos guardados correctamente",
              "success").then((value) => {

                this._idProducto = response.message;
                this._router.navigate(['/negocio/agregar-computadora', this._idProducto]);

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
    this.dataModel.descripcionPantalla = this.validacionForm.value.descripcionPantalla,
      this.dataModel.descripcionSO = this.validacionForm.value.descripcionSO,
      this.dataModel.descripcionAlmacenamiento = this.validacionForm.value.descripcionAlmacenamiento,
      this.dataModel.descripcionMemoriaRam = this.validacionForm.value.descripcionMemoriaRam,
      this.dataModel.MemoriaRamExpandible = this.validacionForm.value.MemoriaRamExpandible,
      this.dataModel.DescripcionGPU = this.validacionForm.value.DescripcionGPU,
      this.dataModel.sistemaEnfriamiento = this.validacionForm.value.sistemaEnfriamiento,
      this.dataModel.tecnologiaDesbloqueo = this.validacionForm.value.tecnologiaDesbloqueo,
      this.dataModel.tecnologiaAudio = this.validacionForm.value.tecnologiaAudio,
      this.dataModel.color = this.validacionForm.value.color,
      this.dataModel.marca = this.validacionForm.value.marca,
      this.dataModel.grosor = this.validacionForm.value.grosor,
      this.dataModel.peso = this.validacionForm.value.peso,
      this.dataModel.cpu = this.validacionForm.value.cpu,
      this.dataModel.marcaCPU = this.validacionForm.value.marcaCPU,
      this.dataModel.modeloCPU = this.validacionForm.value.modeloCPU,
      this.dataModel.generacionCPU = this.validacionForm.value.generacionCPU,
      this.dataModel.velocidadCPU = this.validacionForm.value.velocidadCPU,
      this.dataModel.almacenamientoEmmc = this.validacionForm.value.almacenamientoEmmc,
      this.dataModel.tipoTeclado = this.validacionForm.value.tipoTeclado,
      this.dataModel.resolucion = this.validacionForm.value.resolucion,
      this.dataModel.camaraWeb = this.validacionForm.value.camaraWeb,
      this.dataModel.lectorDisco = this.validacionForm.value.lectorDisco,
      this.dataModel.microfono = this.validacionForm.value.microfono,
      this.dataModel.cargador = this.validacionForm.value.cargador,
      this.dataModel.entradaHdmi = this.validacionForm.value.entradaHdmi,
      this.dataModel.puertosUsb = this.validacionForm.value.puertosUsb,
      this.dataModel.puertoEthernet = this.validacionForm.value.puertoEthernet,
      this.dataModel.tarjetaEthernet = this.validacionForm.value.tarjetaEthernet,
      this.dataModel.bluetooth = this.validacionForm.value.bluetooth,
      this.dataModel.duracionBateria = this.validacionForm.value.duracionBateria,
      this.dataModel.tipoBateria = this.validacionForm.value.tipoBateria,
      this.dataModel.medidas = this.validacionForm.value.medidas,
      this.dataModel.unidadventa = this.validacionForm.value.unidadventa,
      this.dataModel.garantia = this.validacionForm.value.garantia,
      this.dataModel.otra_inf = this.validacionForm.value.otra_inf,
      this.dataModel.existencia = this.validacionForm.value.existencia;
    this.dataModel.precio = this.validacionForm.value.precio;
    this.dataModel.precio_anterior = this.validacionForm.value.precio_anterior; //c 7
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

      this._computadoraService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
        response => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          if (response.status == 'success') {

            Swal.fire("Producto actualizado",
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
      this.listImagen = [];
    }

    if (this.listImagen.length < 3) {

      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      this._computadoraService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
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

    this._computadoraService.getImageName(nameImage).subscribe(
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
    this._computadoraService.deleteImageProduct(nameImage).subscribe(
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
    descripcionPantalla: false,
    descripcionSO: false,
    descripcionAlmacenamiento: false,
    descripcionMemoriaRam: false,
    MemoriaRamExpandible: false,
    DescripcionGPU: false,
    sistemaEnfriamiento: false,
    tecnologiaDesbloqueo: false,
    tecnologiaAudio: false,
    color: false,
    marca: false,
    grosor: false,
    peso: false,
    cpu: false,
    marcaCPU: false,
    modeloCPU: false,
    generacionCPU: false,
    velocidadCPU: false,
    almacenamientoEmmc: false,
    tipoTeclado: false,
    resolucion: false,
    camaraWeb: false,
    lectorDisco: false,
    microfono: false,
    cargador: false,
    entradaHdmi: false,
    puertosUsb: false,
    puertoEthernet: false,
    tarjetaEthernet: false,
    bluetooth: false,
    duracionBateria: false,
    tipoBateria: false,
    medidas: false,
    garantia: false,
    otra_inf: false,
    precio: false,
    precio_anterior: false,
    existencia: false
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "nombre") { this.listaDatosMostrar.nombre = valor; }
    if (nombreCampo == "descripcionPantalla") { this.listaDatosMostrar.descripcionPantalla = valor; }
    if (nombreCampo == "descripcionSO") { this.listaDatosMostrar.descripcionSO = valor; }
    if (nombreCampo == "descripcionAlmacenamiento") { this.listaDatosMostrar.descripcionAlmacenamiento = valor; }
    if (nombreCampo == "descripcionMemoriaRam") { this.listaDatosMostrar.descripcionMemoriaRam = valor; }
    if (nombreCampo == "MemoriaRamExpandible") { this.listaDatosMostrar.MemoriaRamExpandible = valor; }
    if (nombreCampo == "DescripcionGPU") { this.listaDatosMostrar.DescripcionGPU = valor; }
    if (nombreCampo == "sistemaEnfriamiento") { this.listaDatosMostrar.sistemaEnfriamiento = valor; }
    if (nombreCampo == "tecnologiaDesbloqueo") { this.listaDatosMostrar.tecnologiaDesbloqueo = valor; }
    if (nombreCampo == "tecnologiaAudio") { this.listaDatosMostrar.tecnologiaAudio = valor; }
    if (nombreCampo == "color") { this.listaDatosMostrar.color = valor; }
    if (nombreCampo == "marca") { this.listaDatosMostrar.marca = valor; }
    if (nombreCampo == "grosor") { this.listaDatosMostrar.grosor = valor; }
    if (nombreCampo == "peso") { this.listaDatosMostrar.peso = valor; }
    if (nombreCampo == "cpu") { this.listaDatosMostrar.cpu = valor; }
    if (nombreCampo == "marcaCPU") { this.listaDatosMostrar.marcaCPU = valor; }
    if (nombreCampo == "modeloCPU") { this.listaDatosMostrar.modeloCPU = valor; }
    if (nombreCampo == "generacionCPU") { this.listaDatosMostrar.modeloCPU = valor; }
    if (nombreCampo == "velocidadCPU") { this.listaDatosMostrar.velocidadCPU = valor; }
    if (nombreCampo == "almacenamientoEmmc") { this.listaDatosMostrar.almacenamientoEmmc = valor; }
    if (nombreCampo == "tipoTeclado") { this.listaDatosMostrar.tipoTeclado = valor; }
    if (nombreCampo == "resolucion") { this.listaDatosMostrar.resolucion = valor; }
    if (nombreCampo == "camaraWeb") { this.listaDatosMostrar.camaraWeb = valor; }
    if (nombreCampo == "lectorDisco") { this.listaDatosMostrar.lectorDisco = valor; }
    if (nombreCampo == "microfono") { this.listaDatosMostrar.microfono = valor; }
    if (nombreCampo == "cargador") { this.listaDatosMostrar.cargador = valor; }
    if (nombreCampo == "entradaHdmi") { this.listaDatosMostrar.entradaHdmi = valor; }
    if (nombreCampo == "puertosUsb") { this.listaDatosMostrar.puertosUsb = valor; }
    if (nombreCampo == "puertoEthernet") { this.listaDatosMostrar.puertoEthernet = valor; }
    if (nombreCampo == "tarjetaEthernet") { this.listaDatosMostrar.tarjetaEthernet = valor; }
    if (nombreCampo == "bluetooth") { this.listaDatosMostrar.bluetooth = valor; }
    if (nombreCampo == "duracionBateria") { this.listaDatosMostrar.duracionBateria = valor; }
    if (nombreCampo == "tipoBateria") { this.listaDatosMostrar.tipoBateria = valor; }
    if (nombreCampo == "medidas") { this.listaDatosMostrar.medidas = valor; }
    if (nombreCampo == "garantia") { this.listaDatosMostrar.garantia = valor; }
    if (nombreCampo == "otra_inf") { this.listaDatosMostrar.otra_inf = valor; }
    if (nombreCampo == "precio") { this.listaDatosMostrar.precio = valor; }
    if (nombreCampo == "precio_anterior") { this.listaDatosMostrar.precio_anterior = valor; }
    if (nombreCampo == "existencia") { this.listaDatosMostrar.existencia = valor; }
  }

}
