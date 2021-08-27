import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'app-tienda-ropa-article',
  templateUrl: './tienda-ropa-article.component.html',
  styleUrls: ['./tienda-ropa-article.component.css'],
  providers: [BusquedaGeneralProductoService]
})
export class TiendaRopaArticleComponent implements OnInit {

  //RECIBE LOS DATOS DEL PRODUCTO
  @Input() article: any;
  @Input() _idnegocio: string;
  @Input() _nameTableSearch: string;

  _imagen: any;

  /*COMENTARIOS*/
  rating = 0;
  ratingArr: boolean[] = [];//true solid star; false = empty star

  constructor(private _router: Router,
    private rutaActiva: ActivatedRoute, private _busquedaProductoService: BusquedaGeneralProductoService) {

    this.ratingArr = Array(5).fill(false);

  }

  ngOnInit(): void {
    this.calculoMediaEstrellas(this.article.comentarios);

    //RECUPERAMOS LA LISTA DE IMAGENES DEL PRODUCTO
    let imagen = [];
    imagen = this.article.imagen;
    if (imagen.length > 0) {
      //console.log(" Imagen " , imagen[0].ruta);
      //RECUPERADMOS LA PRIMERA IMAGEN
      this.getImageName(imagen[0].ruta);
    }
  }

  //REDIRECCION AL COMPONERNTE DETALLE DEL PRODUCTO CON EL IDNEGOCIO, IDPRODUCTO, NOMBRE TABLA MONGODB
  mostrarDetalleProducto() {
    //componente a ir ===>>>>> _idNegocio , _idproducto , nombre de la tabla MongoDB
    this._router.navigate(['/busqueda-detalle-producto', this._idnegocio, this.article._id, this._nameTableSearch]);
  }

  /*LLAMADA AL METODO DEL SERVICIO PARA RECUPERAR LA IMAGEN EN TIPO BLOB */
  getImageName(nameImage) {
    this._busquedaProductoService.getImageName(this._idnegocio, this._nameTableSearch, nameImage).subscribe(
      response => {
        this.createImageFromBlob(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  imageFile: File;
  imageResultBlob: any;
  //convierte el objecto Blob en un data leido por la etiqueta img
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {
      this.imageResultBlob = event.target.result;
      this._imagen = this.imageResultBlob;
    }
  }

  //CALCULO DE ESTRELLAS
  /**
   * Método para las estrellas
   * @param i 
   */
  returnStart(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  recorgarCadena(texto:string):string{
    return texto.substr(0,50);
  }

  calculoMediaEstrellas(listacomentarios: []) {
    if (listacomentarios.length == 0) {
      this.rating = 1;
      console.log("entrando a vacio")
    } else {

      let sumaEstrellas = 0;
      listacomentarios.forEach(comentario => {
        sumaEstrellas = sumaEstrellas + comentario['estrellas'];
      });

      let result = sumaEstrellas / 5;
      console.log("result", result);
      if (result >= 1 && result <= 1.4) {
        this.rating = 1;
      } else
        if (result >= 1.5 && result <= 2.4) {
          this.rating = 2;
        } else
          if (result >= 2.5 && result <= 3.4) {
            this.rating = 3;
          } else
            if (result >= 3.5 && result <= 4.4) {
              this.rating = 4;
            } else
              if (result >= 4.5) {
                this.rating = 5;
              }
    }

  }

}
