import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction } from 'ngx-gallery-9';

@Component({
  selector: 'app-busqueda-details-producto',
  templateUrl: './busqueda-details-producto.component.html',
  styleUrls: ['./busqueda-details-producto.component.css'],
  providers: [BusquedaGeneralProductoService]
})
export class BusquedaDetailsProductoComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _busquedaProductoService: BusquedaGeneralProductoService
  ) { }

  _idnegocio: string;
  _idproducto: string
  _nameTable: string

  datosProducto: any;
  listaImagenMongo: [];

  ngOnInit(): void {
    this.datosPorParametroDelComponente();
  }

  datosPorParametroDelComponente() {
    this._activatedRoute.params.subscribe(
      (params: Params) => {

        this._idnegocio = params._idnegocio;
        this._idproducto = params._idproducto;
        this._nameTable = params.nameTable;

        if (this._idnegocio != null && this._idproducto != null && this._nameTable != null) {

          this._busquedaProductoService.getDataByIdNegocioIdProducto(this._nameTable, this._idproducto).subscribe(
            response => {
              if (response.status == "success") {
                //OBTENIENDO DATOS DEL PRODUCTO, SIN IMPORTAR QUE ATRIBUTOS TENGA ==> ABARROTE,ALIMINATO ETC.
                this.datosProducto = response.message[this._nameTable][0];
                this.listaImagenMongo = this.datosProducto.imagen;
                this.showImgGalery();
              }
            },
            error => {

            }
          );
        }
      }
    );
  }

  showImgGalery() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageAutoPlay: false,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true, //navegacion entre la imagen con teclas de fecha
        previewArrowsAutoHide: true, //habilita o deshabilita la ocultación automática de flechas
        previewArrows: true, //habilita o deshabilita flechas
        arrowPrevIcon: '',
        arrowNextIcon: 'fa fa-arrow-circle-right',
        closeIcon: 'fa fa-times-circle',
        fullscreenIcon: 'fa fa-arrows-alt',
        previewZoomStep: 0.1,
        previewZoomMax: 2,
        thumbnailsAutoHide: true, //oculta las miniaturas si solo hay una imagen
        previewAnimation: true,
        previewZoom: true
        //previewForceFullscreen:true //pantalla completa forsoso

      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        arrowNextIcon: 'fa fa-arrow-circle-left',
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true,
        arrowPrevIcon: 'fa fa-arrow-circle-left'
      }
    ];

    /* this.galleryImages = [
       {
         small: '../../../assets/images/playera_small.jpg',
         medium: '../../../assets/images/playera_medium.jpg',
         big: '../../../assets/images/playera_big.jpg'
       },
       {
         small: '../../../assets/images/abarrotes.jpg',
         medium: '../../../assets/images/abarrotes.jpg',
         big: '../../../assets/images/abarrotes.jpg'
       },
       {
         small: '../../../assets/images/fruteria.jpg',
         medium: '../../../assets/images/fruteria.jpg',
         big: '../../../assets/images/fruteria.jpg'
       }
     ];*/
    this.galleryImages = [];
    this.listaImagenMongo.forEach(data => {
      this.getImageName(data['ruta']);
    });
  }


  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage): any {
    this._busquedaProductoService.getImageName(this._idnegocio, this._nameTable, nameImage).subscribe(
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
  createImageFromBlob(image: Blob, nameImage): any {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {
      this.imageResultBlob = event.target.result;

      this.galleryImages.push(
        {
          small: this.imageResultBlob,
          medium: this.imageResultBlob,
          big: this.imageResultBlob,
        }
      );
    }
  }

}