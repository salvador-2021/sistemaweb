import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

import { CerrajeriaService } from '../../services/cerrajeria.service';
import { CerrajeriaModel } from '../../models/cerrajeria';

@Component({
  selector: 'app-tbl-cerrajeria',
  templateUrl: './tbl-cerrajeria.component.html',
  styleUrls: ['./tbl-cerrajeria.component.css'],
  providers: [CerrajeriaService]
})
export class TblCerrajeriaComponent implements OnInit {

  public products: CerrajeriaModel[];
  public title:string;
  textoBuscarInput:string=null;
  constructor(
    private _cerrajeriaService: CerrajeriaService
  ) { 
    this.title="LISTA DE PRODUCTOS";
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
    this._cerrajeriaService.getProductNegocio(_id).subscribe(

      response => {

        if (response.status == 'success') {
          
          let listImagen = response.message.cerrajeria[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._cerrajeriaService.deleteImageProduct(data.ruta).subscribe(
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
    this._cerrajeriaService.deleteProductNegocio(_id).subscribe(
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

    this._cerrajeriaService.getListProductNegocio(estado).subscribe(
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

    this._cerrajeriaService.updateStatusProduct(_id, estadoEnviar).subscribe(
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
      this._cerrajeriaService.searchProductName(this.textoBuscarInput).subscribe(
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
