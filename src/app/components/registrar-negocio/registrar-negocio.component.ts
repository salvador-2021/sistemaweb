import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistrarEmpresaService } from '../../services/mycompany/registrar_empresa.service';
import { EmpresaModel } from '../../models/empresa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosGlobales } from '../../services/datosGlobales';
import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-registrar-negocio',
  templateUrl: './registrar-negocio.component.html',
  styleUrls: ['./registrar-negocio.component.css'],
  providers: [RegistrarEmpresaService]
})
export class RegistrarNegocioComponent implements OnInit {
  public _datosGlobales: DatosGlobales;
  @ViewChild("contenedorImg") contenedorImg: ElementRef;

  public dataModel: EmpresaModel;

  validacionForm: FormGroup;
  private dataModelUpdate: EmpresaModel;
  public titlePage: String;
  public _idNegocio: string;

  selectedFiles: FileList;
  selecImage: boolean;
  img_negocio: any;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  //isLogin: boolean = false; //PERMITE SABER SI EL USUARIO ESTA LOGUEADO O NO
  isEditing: boolean = false;
  hide = true; //password

  constructor(
    private renderer: Renderer2,
    private _empresaService: RegistrarEmpresaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this._datosGlobales = new DatosGlobales();
    this.isEditing = false;
    this.titlePage = "CREAR UNA CUENTA DE NEGOCIO";
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
      correo: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/), Validators.maxLength(40)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/), Validators.maxLength(15)]],
      terminosYCondicion:[true, Validators.requiredTrue]
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
        this.isEditing = true;
        this.titlePage = "DATOS DEL NEGOCIO";

        this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
        this._empresaService.getDataNegocio(this._idNegocio).subscribe(
          response => {
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
            if (response.status == 'success') {
              //Recuperamos la lista de productos
              this.dataModelUpdate = response.message;
              //recuperamos la  imagene
              this.img_negocio = this.dataModelUpdate.imagen_negocio;
              //recorremos la lista de nombre de las imagenes
              this.selecImage = true;

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
                  correo: this.dataModelUpdate.correo,
                  password: "",
                  terminosYCondicion:false
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

      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      this._empresaService.saveData(this.dataModel).subscribe(
        response => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          if (response.status == 'success') {
            Swal.fire("Negocio creado",
              "Datos guardados correctamente",
              "success").then((value) => {
                this._idNegocio = response.message;
                this._router.navigate(['/registrar-negocio', this._idNegocio]);
              });

          } else if (response.status == 'error') {

          }
        },
        error => {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          Swal.fire("Datos incorrectos",
          "Revisa que los datos introducidos no se encuentren duplicado con otra información de negocio",
          "error");
        }
      );
    
  }

  recogerAsignar() {
    if (this._idNegocio != null) {
      this.dataModel._id = this._idNegocio;
    }
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
    this.dataModel.password = this.validacionForm.value.password;
    
  }

  /**
 * METODO DE ACTUALIZACION DE DATOS
 */
  onSubmitEdit() {
    this.recogerAsignar();
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._empresaService.updateDataAnyNegocio(this._idNegocio , this.dataModel).subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        if (response.status == 'success') {

          Swal.fire("Negocio actualizado",
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
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);

    this._empresaService.subidadImg(this._idNegocio, this.currentFileUpload).subscribe(
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
    this._empresaService.getImageFile(this._idNegocio, nameImage).subscribe(
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
    this._empresaService.deleteImageAnyNegocio(this._idNegocio, nameImage).subscribe(
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
}