import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SweetAlert from 'sweetalert';
import { EmpresaService } from '../../services/empresa.service';
import { EmpresaModel } from '../../models/empresa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';

@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.css'],
  providers: [EmpresaService],
})
export class DatosEmpresaComponent implements OnInit {
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  public dataModel: EmpresaModel;
  public _datosGlobales: DatosGlobales;

  validacionForm: FormGroup;
  private dataModelUpdate: EmpresaModel;
  public editDatos: Boolean;
  public titlePage: String;
  public _idNegocio: string;

  selectedFiles: FileList;
  selecImage: boolean;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  listImagen: any[];

  constructor(
    private renderer: Renderer2,
    private _empresaService: EmpresaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._datosGlobales = new DatosGlobales();
    this.editDatos = false;
    this.titlePage = "AGREGAR PRODUCTO";
    this.dataModel = new EmpresaModel("", "", "", "", "", "", "", "", "", "", "", "", "");

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      municipio: ['TLAPA', Validators.required],
      localidad: ['TLAPA', Validators.required],
      nombre: ['', [Validators.required, Validators.maxLength(60)]],
      direccion: ['', [Validators.required, Validators.maxLength(200)]],
      telefono: ['', [Validators.nullValidator, Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.maxLength(10)]],
      horario_ser: ['', [Validators.required, Validators.maxLength(90)]],
      facebook: ['', [Validators.nullValidator, Validators.maxLength(40)]],
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/), Validators.maxLength(40)]],
      password: ['', [Validators.nullValidator, Validators.maxLength(9)]]
    });
  }

  ngOnInit(): void {
    this.datosEdit();
  }

  datosEdit() {

    this._idNegocio = null;
    this._activatedRoute.params.subscribe(params => {
      let _id = params['_id'];
      //SI SE MANDA UN ID POR PARAMETRO, SE BUSCA LOS DATOS DEL PRODUCTO
      if (_id) {
        this._idNegocio = _id;
        this.editDatos = true;
        this.titlePage = "ACTUALIZAR DATOS";

        this._empresaService.getDataNegocio(this._idNegocio).subscribe(
          response => {
            if (response.status == 'success') {

              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message;
              //recuperamos la  imagene
              this.listImagen = this.dataModelUpdate.imagen_negocio;
              //recorremos la lista de nombre de las imagenes
              this.selecImage = true;

              if (this.listImagen != null) {
                this.getImageName(this.listImagen);
                if (this.listImagen.length == 1) {
                  this.selecImage = false;
                }
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
                  correo: this.dataModelUpdate.correo,
                  password: ""
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

    if (typeof this.dataModel.password == null || this.dataModel.password.length == 0) {

      SweetAlert("Requerido",
        "Introduce una contraseña, gracias",
        "info");

    } else {

      this._empresaService.saveData(this.dataModel).subscribe(
        response => {
          if (response.status == 'success') {

            SweetAlert("Negocio creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                this._idNegocio = response.message;
                this._router.navigate(['/datos-empresa', this._idNegocio]);
              });

          } else if (response.status == 'error') {

          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  recogerAsignar() {
    if (this._idNegocio != null) {
      this.dataModel._id = this._idNegocio;
    }
    this.dataModel.imagen_negocio = this.listImagen;
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
    this.dataModel.password = this.validacionForm.value.password;
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
    console.log(this.dataModel);
    this._empresaService.updateDataNegocio(this.dataModel).subscribe(
      response => {

        if (response.status == 'success') {
          SweetAlert("Negocio actualizado",
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
    this.tamanioImg = 400000;
    this.selectedFiles = event.target.files;
    if (this.selectedFiles[0].size > this.tamanioImg) {
      this.selectedFiles = undefined;
      SweetAlert("Tamaño de la imagen grande",
        "La imagen debe pesar menos de " + this.tamanioImg / 1000 + " KB",
        "info");
    }
  }

  /*SUBIR LA IMAGEN AL SERVIDOR NODEJS*/
  uploadImage() {
    if (this.listImagen == null) {
      this.listImagen = [];
    }

    if (this.listImagen.length < 1) {

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
    } else {
      SweetAlert("Archivo máximo",
        "Solo puedes guardar 1 imagen, gracias",
        "info");
    }
  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {
    this._empresaService.getImageName(nameImage).subscribe(
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
    this._empresaService.deleteImageProduct(nameImage).subscribe(
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
    this.listImagen = null;
    this.onSubmitEdit();
  }
}
