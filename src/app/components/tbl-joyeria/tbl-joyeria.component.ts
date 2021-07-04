import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SweetAlert from 'sweetalert';

import { JoyeriaService } from '../../services/joyeria.service';
import { JoyeriaModel } from '../../models/joyeria';

@Component({
  selector: 'app-tbl-joyeria',
  templateUrl: './tbl-joyeria.component.html',
  styleUrls: ['./tbl-joyeria.component.css'],
  providers:[JoyeriaService]
})
export class TblJoyeriaComponent implements OnInit {

  public products : JoyeriaModel[];
  public title : String;
  textoBuscarInput: string = null;

  constructor(
    private _joyeriaService: JoyeriaService 
  ) { 
    this.title = "LISTA DE PRODUCTOS";
  }

  ngOnInit(): void {
    this.listaProductosNegocio(1);
  }
  
  delete_data(_id){
    
    SweetAlert({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción el registro se eliminara permanentemente",
      icon: "warning",
      buttons:["Cancelar",true],
      dangerMode: true,
    })
    .then((willDelete) => {

      if (willDelete) {

        this._joyeriaService.deleteProductNegocio(_id).subscribe(
          response=>{
                
           if(response.status=="success"){
            SweetAlert("Acción completado",
            "Registro eliminado",
            "success");
             this.listaProductosNegocio(1);
           }
    
          },
          error=>{
            console.log(error);
          }
        );

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
    this._joyeriaService.getProductNegocio(_id).subscribe(
      response => {

        if (response.status == 'success') {
          //recuperamos la lista de nombres de las imagenes
          let listImagen = response.message.joyeria[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._joyeriaService.deleteImageProduct(data.ruta).subscribe(
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
    this._joyeriaService.deleteProductNegocio(_id).subscribe(
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

    this._joyeriaService.getListProductNegocio(1).subscribe(
      response=>{
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
      error=>{
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

    this._joyeriaService.updateStatusProduct(_id, estadoEnviar).subscribe(
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

      this._joyeriaService.searchProductName(this.textoBuscarInput).subscribe(
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