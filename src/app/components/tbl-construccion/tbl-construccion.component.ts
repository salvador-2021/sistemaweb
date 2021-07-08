import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ConstruccionService } from '../../services/construccion.service';
import { ConstruccionModel } from '../../models/construccion';

@Component({
  selector: 'app-tbl-construccion',
  templateUrl: './tbl-construccion.component.html',
  styleUrls: ['./tbl-construccion.component.css'],
  providers: [ConstruccionService]
})
export class TblConstruccionComponent implements OnInit {

  public products: ConstruccionModel[];
  public title: string;
  textoBuscarInput: string = null;

  constructor(
    private _construccionService: ConstruccionService
  ) {
    this.title = "LISTA DE PRODUCTOS";
  }
  ngOnInit(): void {
    this.listaProductosNegocio(1);
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
    this._construccionService.getProductNegocio(_id).subscribe(

      response => {

        if (response.status == 'success') {

          let listImagen = response.message.construccion[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._construccionService.deleteImageProduct(data.ruta).subscribe(
                response => { /*console.log(response);*/ }
              );
            });
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
    this._construccionService.deleteProductNegocio(_id).subscribe(
      response => {

        if (response.status == "success") {
          Swal.fire("Acción completado",
            "Registro eliminado",
            "success");
          this.listaProductosNegocio(1);
        }

      },
      error => {
        console.log(error);
      }
    );
  }

  listaProductosNegocio(estado) {

    if (estado == 0) {
      this.title = "LISTA DE PRODUCTOS DADO DE BAJA";
    } else {
      this.title = "LISTA DE PRODUCTOS";
    }

    this._construccionService.getListProductNegocio(estado).subscribe(
      response => {

        if (response.status == "success") {

          this.products = response.message;

        } else if (response.status == "vacio") {

          Swal.fire("LISTA VACIA",
            "",
            "info").then((value) => {

            });

          this.products = null;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  updateStatusProducto(_id, estado) {

    let numberStatus = 0;
    let estadoEnviar = true;

    if (estado) {
      numberStatus = 1
      estadoEnviar = false;
    }

    this._construccionService.updateStatusProduct(_id, estadoEnviar).subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.listaProductosNegocio(numberStatus);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  buscarproducto() {
    if (this.textoBuscarInput == null || this.textoBuscarInput == "") {

      this.listaProductosNegocio(1);

    } else {
      this._construccionService.searchProductName(this.textoBuscarInput).subscribe(
        response => {
          console.log(response);
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
          console.log(error);
        }
      );
    }
  }
}
