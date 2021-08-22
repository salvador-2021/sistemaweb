import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { HerreriaService } from '../../../services/herreria.service';
import { HerreriaModel } from '../../../models/herreria';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-tbl-herreria',
  templateUrl: './tbl-herreria.component.html',
  styleUrls: ['./tbl-herreria.component.css'],
  providers: [HerreriaService]
})

export class TblHerreriaComponent {
  public products: HerreriaModel[];
  public title: String;

  /*CODIGO PARA TABLA 2*/
  //Variables para paginator
  page_size: number = 10; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [10]   //OPCIONES POR PÁGINA

  displayedColumns: string[] = ['nombre',  'medidas', 'color', 'unidadventa', 'precio_anterior', 'precio', 'existencia', 'fecha_promocion', 'acciones'];
  dataSource: MatTableDataSource<HerreriaModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _herreriaService: HerreriaService,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this.title = "LISTA DE PRODUCTOS";
    this.listaProductosNegocio(1);
  }

  /*CODIGO PARA TABLA 3*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*CODIGO PARA TABLA 4*/
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

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

        if (willDelete.isConfirmed) {

          //SE ELIMINA LAS IMAGENES RELACIONADAS CON EL REGISTRO GUARDADAS EN EL BACKEND
          this.deleteListImageProduct(_id);
          //SE ELIMINA EL REGISTRO GUARDADO EN MONGODB
          this.deleteData(_id);

        } else if (willDelete.dismiss === Swal.DismissReason.cancel) {
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
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._herreriaService.deleteProductNegocio(_id).subscribe(
      response => {

        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

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
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    if (estado == 0) {
      this.title = "LISTA DE PRODUCTOS DADOS DE BAJA";
    } else {
      this.title = "LISTA DE PRODUCTOS";
    }

    this._herreriaService.getListProductNegocio(estado).subscribe(
      response => {
        console.log(response.message);

        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.products = response.message;
          console.log(this.products);
          /*====================================================== */
          this.dataSource = new MatTableDataSource(this.products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          /*====================================================== */
        } else if (response.status == "vacio") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.products = null;
          this.dataSource = null;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  updateStatusProducto(_id, estado) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

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
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.listaProductosNegocio(numberStatus);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
