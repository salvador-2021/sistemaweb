import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { AdminService } from '../../services/mycompany/admin.service';
import { UsuarioModel } from '../../models/usuario';

/*CODIGO PARA TABLA 1*/
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-tbl-usuario',
  templateUrl: './tbl-usuario.component.html',
  styleUrls: ['./tbl-usuario.component.css'],
  providers:[AdminService]
})
export class TblUsuarioComponent {

  public usuarios: UsuarioModel[];
  public title: string;

  /*CODIGO PARA TABLA 2*/
  //Variables para paginator
  page_size: number = 10; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [10]   //OPCIONES POR PÁGINA

  displayedColumns: string[] = ['nombre', 'correo', 'acciones'];
  dataSource: MatTableDataSource<UsuarioModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _adminService: AdminService,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {
    this.title = "LISTA DE USUARIOS";
    this.listaUsuarios(1);
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

  listaUsuarios(estado) {

    if (estado == 0) {
      this.title = "LISTA DE USUARIOS DADO DE BAJA";
    } else {
      this.title = "LISTA DE USUARIOS";
    }

  this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.getListUsuarios(estado).subscribe(
      response => {
        if (response.status == "success") {
          
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.usuarios = response.message;
          
          this.dataSource = new MatTableDataSource(this.usuarios);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        } else if (response.status == "vacio") {
          this.dataSource = null;
          this.usuarios = null;
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        console.log(error);
      }
    );
  }

  /**
  * ELIMINA LOS DATOS DEL REGISTRO EN MONGODB E IMAGENES DE NODEJS
  * @param _id 
  */
  delete_data(_id) {
  
    Swal.fire({
      title: "Estas seguro?",
      text: "Una vez que se completa la acción los datos del usuario se eliminará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete.isConfirmed) {
          //SE ELIMINA LA CARPETA DEL NEGOCIO GUARDADO EN EL BACKEND
          this.deleteData(_id);

        } else if (willDelete.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Acción cancelada",
            "Registro no eliminado",
            "info");
        }
      });
  }

  /**
   * ELIMINA EL REGISTRO GUARDADO EN MONGODB
   */
  deleteData(_id) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.deleteDataUsuario(_id).subscribe(
      response => {

        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          Swal.fire("Acción completado",
            "Registro eliminado",
            "success");
          this.listaUsuarios(1);
        }

      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        console.log(error);
      }
    );
  }

  updateUsuario(_id, estado) {

    let numberStatus = 0;
    let estadoEnviar = true;

    if (estado) {
      numberStatus = 1
      estadoEnviar = false;
    }
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.updateStatusUsuario(_id, estadoEnviar).subscribe(
      response => {
       
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          this.listaUsuarios(numberStatus);
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        console.log(error);
      }
    );
  }
}
