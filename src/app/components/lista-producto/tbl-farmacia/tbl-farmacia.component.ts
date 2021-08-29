import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FarmaciaService } from '../../../services/farmacia.service';
import { FarmaciaModel } from '../../../models/farmacia';

/*CODIGO PARA TABLA 1*/
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-tbl-farmacia',
  templateUrl: './tbl-farmacia.component.html',
  styleUrls: ['./tbl-farmacia.component.css'],
  providers: [FarmaciaService]
})
export class TblFarmaciaComponent {

  public products: FarmaciaModel[];
  public title: string;

  /*CODIGO PARA TABLA 2*/
  //Variables para paginator
  page_size: number = 10; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [10]   //OPCIONES POR PÁGINA

  displayedColumns: string[] = ['nombre', 'descripcion', 'unidadventa', 'categoria', 'precio_anterior', 'precio', 'existencia', 'fecha_promocion', 'acciones'];
  dataSource: MatTableDataSource<FarmaciaModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _farmaciaService: FarmaciaService,
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
    this._farmaciaService.getProductNegocio(_id).subscribe(

      response => {

        if (response.status == 'success') {

          let listImagen = response.message.farmacia[0].imagen;
          //recorremos la lista de nombre de las imagenes
          if (listImagen != null) {
            listImagen.forEach(data => {
              this._farmaciaService.deleteImageProduct(data.ruta).subscribe(
                response => { 

                 }
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

    this._farmaciaService.deleteProductNegocio(_id).subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        if (response.status == "success") {

          Swal.fire("Acción completado",
            "Registro eliminado",
            "success");
          this.listaProductosNegocio(1);
        }

      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
      
      }
    );
  }

  listaProductosNegocio(estado) {
    
    if (estado == 0) {
      this.title = "LISTA DE PRODUCTOS DADO DE BAJA";
    } else {
      this.title = "LISTA DE PRODUCTOS";
    }
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._farmaciaService.getListProductNegocio(estado).subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        if (response.status == "success") {

          this.products = response.message;

          this.dataSource = new MatTableDataSource(this.products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        } else if (response.status == "vacio") {
          this.dataSource = null;
          this.products = null;

        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        
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
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    
    this._farmaciaService.updateStatusProduct(_id, estadoEnviar).subscribe(
      response => {
       
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        if (response.status == "success") {
          
          this.listaProductosNegocio(numberStatus);
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
      
      }
    );
  }

  /**
   * ELIMINA LA LISTA DE PRODUCTO
   */
  deleteAllProduct(){
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._farmaciaService.deleteAllImageProduct().subscribe(
      response=>{
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

        if(response.status =="success"){
          this.listaProductosNegocio(1);
        }
      },
      error=>{
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        

      }
    );
  }

  /**
   * PREGUNTA AL USUARIO SU DESEA ELIMINAR LA LISTA DE PRODUCTOS
   */
  deleteListProduct(){
    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción la lista se eliminará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete.isConfirmed) {
          this.deleteAllProduct();

        } else if(willDelete.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Acción cancelada",
            "Lista no eliminado",
            "info");
        }
      });
  }


}
