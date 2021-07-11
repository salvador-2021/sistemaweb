import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { RefrigeradorService } from '../../../services/electrodomesticos/refrigerador.service';
import { RefrigeradorModel } from '../../../models/electrodomesticos/refrigerador';

@Component({
  selector: 'app-add-refrigerador',
  templateUrl: './add-refrigerador.component.html',
  styleUrls: ['./add-refrigerador.component.css'],
  providers: [RefrigeradorService]
})
export class AddRefrigeradorComponent implements OnInit {

  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  private dataModel: RefrigeradorModel;
  public validacionForm: FormGroup;

  private dataModelUpdate: RefrigeradorModel;
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
    private _refrigeradorService: RefrigeradorService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {

    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";
    this.dataModel = new RefrigeradorModel("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 0, null, null, 0, null, null);

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.nullValidator, Validators.maxLength(100)]],
      marca: ['', [Validators.required, Validators.maxLength(20)]],
      color: ['', [Validators.required, Validators.maxLength(20)]],
      ancho: ['', [Validators.required, Validators.maxLength(20)]],
      alto: ['', [Validators.required, Validators.maxLength(20)]],
      profundidad: ['', [Validators.required, Validators.maxLength(20)]],
      filtro_agua: ['', [Validators.required, Validators.maxLength(10)]],
      peso: ['', [Validators.required, Validators.maxLength(15)]],
      acabado: ['', [Validators.required, Validators.maxLength(30)]],
      material: ['', [Validators.required, Validators.maxLength(40)]],
      luz_interior: ['', [Validators.required, Validators.maxLength(15)]],
      voltaje: ['', [Validators.required, Validators.maxLength(10)]],
      control_humedad: ['', [Validators.required, Validators.maxLength(15)]],
      no_puertas: ['', [Validators.required, Validators.maxLength(15)]],
      despachador_agua: ['', [Validators.required, Validators.maxLength(15)]],
      compartimientos: ['', [Validators.required, Validators.maxLength(15)]],
      unidadventa: ['Pieza', Validators.required],
      garantia: ['', [Validators.required, Validators.maxLength(50)]],
      otra_inf: ['', [Validators.nullValidator, Validators.maxLength(100)]],
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
    this.datosEdit();
  }

  /*RECUPERADO LOS DATOS DEL PRODUCTO POR ID*/
  datosEdit() {
    this._idProducto = null;
    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idProducto = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";

        this._refrigeradorService.getProductNegocio(_id).subscribe(

          response => {

            if (response.status == 'success') {
              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message.refrigerador;
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
                  marca: this.dataModelUpdate[0].marca,
                  color: this.dataModelUpdate[0].color,
                  ancho: this.dataModelUpdate[0].ancho,
                  alto: this.dataModelUpdate[0].alto,
                  profundidad: this.dataModelUpdate[0].profundidad,
                  filtro_agua: this.dataModelUpdate[0].filtro_agua,
                  peso: this.dataModelUpdate[0].peso,
                  acabado: this.dataModelUpdate[0].acabado,
                  material: this.dataModelUpdate[0].material,
                  luz_interior: this.dataModelUpdate[0].luz_interior,
                  voltaje: this.dataModelUpdate[0].voltaje,
                  control_humedad: this.dataModelUpdate[0].control_humedad,
                  no_puertas: this.dataModelUpdate[0].no_puertas,
                  despachador_agua: this.dataModelUpdate[0].despachador_agua,
                  compartimientos: this.dataModelUpdate[0].compartimientos,
                  unidadventa: this.dataModelUpdate[0].unidadventa,
                  garantia: this.dataModelUpdate[0].garantia,
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
      this._refrigeradorService.saveData(this.dataModel).subscribe(
        response => {
          console.log(response);

          if (response.status == 'success') {

            Swal.fire("Producto creado",
              "Datos guardados correctamente",
              "success").then((value) => {

                this._idProducto = response.message;
                this._router.navigate(['/add-refrigerador', this._idProducto]);

              });
          }
        },
        error => {
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
    this.dataModel.marca = this.validacionForm.value.marca;
    this.dataModel.color = this.validacionForm.value.color;
    this.dataModel.ancho = this.validacionForm.value.ancho;
    this.dataModel.alto = this.validacionForm.value.alto;
    this.dataModel.profundidad = this.validacionForm.value.profundidad;
    this.dataModel.filtro_agua = this.validacionForm.value.filtro_agua;
    this.dataModel.peso = this.validacionForm.value.peso;
    this.dataModel.acabado = this.validacionForm.value.acabado;
    this.dataModel.material = this.validacionForm.value.material;
    this.dataModel.luz_interior = this.validacionForm.value.luz_interior;
    this.dataModel.voltaje = this.validacionForm.value.voltaje;
    this.dataModel.control_humedad = this.validacionForm.value.control_humedad;
    this.dataModel.no_puertas = this.validacionForm.value.no_puertas;
    this.dataModel.despachador_agua = this.validacionForm.value.despachador_agua;
    this.dataModel.compartimientos = this.validacionForm.value.compartimientos;
    this.dataModel.unidadventa = this.validacionForm.value.unidadventa;
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

    this._refrigeradorService.updateProductNegocio(this._idProducto, this.dataModel).subscribe(
      response => {

        if (response.status == 'success') {

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

    if (this.listImagen.length < 3) {

      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);

      this._refrigeradorService.uploadImage(this.currentFileUpload, this._idProducto).subscribe(
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

    this._refrigeradorService.getImageName(nameImage).subscribe(
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
    this._refrigeradorService.deleteImageProduct(nameImage).subscribe(
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
}
