import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ImgLineaNegocioService } from '../../services/mycompany/img_linea_negocio.service';
import { ImgLineaNegocioModel } from '../../models/img_linea_negocio';

@Component({
  selector: 'app-tbl-config-linea-negocio',
  templateUrl: './tbl-config-linea-negocio.component.html',
  styleUrls: ['./tbl-config-linea-negocio.component.css'],
  providers: [ImgLineaNegocioService]
})
export class TblConfigLineaNegocioComponent implements OnInit {

  public products: ImgLineaNegocioModel[];
  public title: String;
  textoBuscarInput: string = null;

  constructor(
    private _imageLineNegocioService: ImgLineaNegocioService
  ) {
    this.title = "LISTA DE LINEA DE NEGOCIO";
  }

  ngOnInit(): void {
    this.listaProductosNegocio();
  }

  /**
   * ELIMINA LOS DATOS DEL REGISTRO EN MONGODB E IMAGENES DE NODEJS
   * @param _id
   */
  delete_data(_id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción el registro se eliminara permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete) {
          //SE ELIMINA LAS IMAGENES RELACIONADAS CON EL REGISTRO GUARDADAS EN EL BACKEND
          this.deleteListImageProduct(_id);
          //SE ELIMINA EL REGISTRO GUARDADO EN MONGODB
          this.deleteData(_id);

        } else {
          Swal.fire("Acción cancelada",
            "Registro no eliminado",
            "info");
        }
      });
  }

  /**
   * ELIMINA LAS IMAGENES RELACIONADAS CON REGISTRO GUARDADAS EN NODEJS
   * @param _id
   */
  deleteListImageProduct(_id) {
    this._imageLineNegocioService.getData(_id).subscribe(
      response => {

        if (response.status == 'success') {
          //recuperamos la lista de nombres de las imagenes
          let dataMongo = response.message;

          //recorremos la lista de nombre de las imagenes
          if (dataMongo != null) {

            if (dataMongo.ruta != null) {
              this._imageLineNegocioService.deleteImageProduct(dataMongo.ruta).subscribe(
                response => { 

                }
              );
            }
          }
        }
      },
      error => {
      }
    );
  }

  /**
   * ELIMINA LOS DATOS DEL PRODUCTO EN MONGODB
   */
  deleteData(_id) {
    this._imageLineNegocioService.deleteData(_id).subscribe(
      response => {

        if (response.status == "success") {
          Swal.fire("Acción completado",
            "Registro eliminado",
            "success");
          this.listaProductosNegocio();
        }

      },
      error => {
        
      }
    );
  }

  listaProductosNegocio() {

    this._imageLineNegocioService.getListNameImage().subscribe(
      response => {

        if (response.status == "success") {

          this.products = response.message;

        } else if (response.status == "vacio") {

          Swal.fire("LISTA VACIA",
            "",
            "info");

          this.products = null;
        }
      },
      error => {
       
      }
    );
  }

  buscarproducto() {
    if (this.textoBuscarInput == null || this.textoBuscarInput == "") {

      this.listaProductosNegocio();

    } else {

      this._imageLineNegocioService.searchProductName(this.textoBuscarInput).subscribe(
        response => {
          
          if (response.status == "success") {

            this.products = response.message;

          } else if (response.status == "vacio") {

            this.products = null;

            Swal.fire("El producto no existe",
              "",
              "info");
          }
        },
        error => {
          
        }
      );
    }
  }
}

