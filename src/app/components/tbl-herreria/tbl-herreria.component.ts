import { Component, OnInit } from '@angular/core';
import SweetAlert from 'sweetalert';

import { HerreriaService } from '../../services/herreria.service';
import { HerreriaModel } from '../../models/herreria';

@Component({
  selector: 'app-tbl-herreria',
  templateUrl: './tbl-herreria.component.html',
  styleUrls: ['./tbl-herreria.component.css'],
  providers: [HerreriaService]
})
export class TblHerreriaComponent implements OnInit {
  public products: HerreriaModel[];
  public title: String;
  textoBuscarInput: string = null;

  constructor(
    private _herreriaService: HerreriaService
  ) {
    this.title = "LISTA DE PRODUCTOS";
  }

  ngOnInit(): void {
    this.listaProductosNegocio(1);
  }

  delete_data(_id) {

    SweetAlert({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción el registro se eliminara permanentemente",
      icon: "warning",
      buttons: ["Cancelar", true],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {

          //SE ELIMINA LAS IMAGENES RELACIONADAS CON EL REGISTRO GUARDADAS EN EL BACKEND
          this.deleteListImageProduct(_id);
          //SE ELIMINA EL REGISTRO GUARDADO EN MONGODB
          this.deleteData(_id);

        } else {
          SweetAlert("Acción cancelada",
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
    this._herreriaService.getProductNegocio(_id).subscribe(
      response => {

        if (response.status == 'success') {
          //recuperamos la lista de nombres de las imagenes
          let listImagen = response.message.herreria[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._herreriaService.deleteImageProduct(data.ruta).subscribe(
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
    this._herreriaService.deleteProductNegocio(_id).subscribe(
      response => {

        if (response.status == "success") {
          SweetAlert("Acción completado",
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
      this.title = "LISTA DE PRODUCTOS DADOS DE BAJA";
    } else {
      this.title = "LISTA DE PRODUCTOS";
    }

    this._herreriaService.getListProductNegocio(estado).subscribe(
      response => {
        console.log(response.message);
        if (response.status == "success") {

          this.products = response.message;

        } else if (response.status == "vacio") {
          SweetAlert("LISTA VACIA",
            "",
            "info");

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

    this._herreriaService.updateStatusProduct(_id, estadoEnviar).subscribe(
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

      this._herreriaService.searchProductName(this.textoBuscarInput).subscribe(
        response => {
          console.log(response);
          if (response.status == "success") {

            this.products = response.message;

          } else if (response.status == "vacio") {

            this.products = null;

            SweetAlert("El producto no existe",
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