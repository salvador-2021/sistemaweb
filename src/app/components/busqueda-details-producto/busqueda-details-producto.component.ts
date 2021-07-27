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
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _busquedaProductoService: BusquedaGeneralProductoService
  ) {
    this.listProductsRelacionadosImage = [];
  }

  _idnegocio: string;
  _idproducto: string
  _nameTable: string;

  datosProducto: any;
  listaImagenMongo: [];

  ngOnInit(): void {
    this.datosPorParametroDelComponente();
  }

  /**
   *RECOGE EL ID DEL NEGOCIO, ID DEL PRODUCTO, NOMBRE DE LA TABLA
   BUSCA LOS DATOS DE UN PRODUCTO EN ESPECIFICO POR ID
   */
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
                //BUSCA LOS PRODUCTO RELACIONADOS
                this.listaProductoRelacionado();
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

    this.galleryImages = [];
    this.listaImagenMongo.forEach(data => {
      this.getImageName(data['ruta']);
    });
  }


  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN DE TIPO BLOB */
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

  listProductsRelacionados: [];
  listProductsRelacionadosImage = Array();
  /*BUSCA LOS PRODUCTO RELACIONADOS */
  listaProductoRelacionado() {

    this.listProductsRelacionadosImage =  Array(); 
    this._busquedaProductoService.getListProductByNameTable(this.datosProducto.nombre, this._nameTable).subscribe(
      response => {
        if (response.status == "success") {
          this.listProductsRelacionados = response.message;

          this.listProductsRelacionados.forEach(data => {

            let list = [];
            list = data;
            list.forEach(producto => {

              if (producto.data.imagen[0] != undefined) {

                this.imagenProductoSimilar(this._nameTable, producto.data, producto.data.imagen[0].ruta);

              } else {
                this.listProductsRelacionadosImage.push({
                  image: "../../../assets/images/sin-imagen.png",
                  _id: this._idnegocio,
                  nameTable: this._nameTable,
                  data: producto.data
                }
                );
              }
            });
          });
        }
      },
      error => {
        console.log("error", error);
      }
    );
  }
  productoSimilarSeleccionado(_idnegocio: string, _idproducto: string, _nameTable: string) {
    //componente a ir ===>>>>> _idNegocio , _idproducto , nombre de la tabla MongoDB
    this._router.navigate(['/busqueda-detalle-producto', _idnegocio, _idproducto, _nameTable]);
  }

  imagenProductoSimilar(_nameTable, data, nameImage: string) {

    this._busquedaProductoService.getImageName(this._idnegocio, this._nameTable, nameImage).subscribe(
      response => {

        let image = response;

        let reader = new FileReader();
        this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
        reader.readAsDataURL(this.imageFile);
        reader.onload = (event: any) => {
          this.imageResultBlob = event.target.result;

          this.listProductsRelacionadosImage.push({
            imagen: this.imageResultBlob,
            _id: this._idnegocio,
            nameTable: _nameTable,
            data: data
          }
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * Metodo 
   */
  irPerfilNegocio(){
    this._router.navigate(['/perfil-negocio', this._idnegocio]);
  }
  

}