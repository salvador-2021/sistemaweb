import { Component, OnInit } from '@angular/core';
import SweetAlert from 'sweetalert';

import { CalzadoService } from '../../services/calzado.service';
import { CalzadoModel } from '../../models/calzado';

@Component({
  selector: 'app-tbl-zapateria',
  templateUrl: './tbl-zapateria.component.html',
  styleUrls: ['./tbl-zapateria.component.css'],
  providers: [CalzadoService]
})
export class TblZapateriaComponent implements OnInit {
  public products: CalzadoModel[];
  public title: String;
  textoBuscarInput: string = null;
  listaColores: [];
  listaTallas: [];

  constructor(
    private _calzadoService: CalzadoService
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
    this._calzadoService.getProductNegocio(_id).subscribe(
      response => {

        if (response.status == 'success') {
          //recuperamos la lista de nombres de las imagenes
          let listImagen = response.message.zapatos[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._calzadoService.deleteImageProduct(data.ruta).subscribe(
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
    this._calzadoService.deleteProductNegocio(_id).subscribe(
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
    this._calzadoService.getListProductNegocio(estado).subscribe(
      response => {

        if (response.status == "success") {
          //DATOS DEL PRODUCTO
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

    this._calzadoService.updateStatusProduct(_id, estadoEnviar).subscribe(
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

      this._calzadoService.searchProductName(this.textoBuscarInput).subscribe(
        response => {
          
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