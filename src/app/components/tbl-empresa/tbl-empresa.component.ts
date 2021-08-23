import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/mycompany/admin.service';
import { EmpresaModel } from '../../models/Empresa';

/*CODIGO PARA TABLA 1*/
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-tbl-empresa',
  templateUrl: './tbl-empresa.component.html',
  styleUrls: ['./tbl-empresa.component.css'],
  providers: [AdminService]
})

export class TblEmpresaComponent {

  public negocios: EmpresaModel[];
  public title: string;
  public validacionForm: FormGroup;

  /*CODIGO PARA TABLA 2*/
  //Variables para paginator
  page_size: number = 10; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [10]   //OPCIONES POR PÁGINA

  displayedColumns: string[] = ['nombre', 'correo', 'monto_mensual', 'estado_pag', 'fecha_pago', 'linea_negocio', 'acciones'];
  dataSource: MatTableDataSource<EmpresaModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _adminService: AdminService,
    private formBuilder: FormBuilder,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
  ) {

    //VALIDACION DEL FORMULARIO
    this.validacionForm = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.pattern(/^[+]?[0-9]{1,9}(?:.[0-9]{1,2})?$/), Validators.maxLength(10)]]
    });

    this.title = "LISTA DE NEGOCIOS";
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

  listaProductosNegocio(estado) {

    if (estado == 0) {
      this.title = "LISTA DE NEGOCIOS DADO DE BAJA";
    } else {
      this.title = "LISTA DE NEGOCIOS";
    }

    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.getListNegocio(estado).subscribe(
      response => {

        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.negocios = response.message;
          this.dataSource = new MatTableDataSource(this.negocios);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        } else if (response.status == "vacio") {
          this.dataSource = null;
          this.negocios = null;
        }
      },
      error => {
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
      text: "Una vez que se completa la acción el registro se eliminará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: '¡No, cancelar!',
    })
      .then((willDelete) => {

        if (willDelete.isConfirmed) {
          //SE ELIMINA LA CARPETA DEL NEGOCIO GUARDADO EN EL BACKEND
          this.deleteFileNegocio(_id);

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
  deleteFileNegocio(_id) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.deleteFileProduc(_id).subscribe(
      response => {
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          //SE ELIMINA EL REGISTRO GUARDADO EN MONGODB
          this.deleteData(_id);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * ELIMINA EL REGISTRO GUARDADO EN MONGODB
   */
  deleteData(_id) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.deleteDataNegocio(_id).subscribe(
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

  updateStatusProducto(_id, estado) {

    let numberStatus = 0;
    let estadoEnviar = true;

    if (estado) {
      numberStatus = 1
      estadoEnviar = false;
    }

    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    this._adminService.updateStatusNegocio(_id, estadoEnviar).subscribe(
      response => {
        
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

  actualizarMontoPagoNegocios() {
    let monto = this.validacionForm.get('monto').value;
    if (monto > 0) {
      this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
      this._adminService.updatePagoMesNegocio(monto).subscribe(
        response => {
          if(response.status =="success"){
            this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
            
            Swal.fire("Acción completado correctamente",
              "Monto Aplicado a todo los negocios",
              "success").then((value) => {

                window.location.href = window.location.href;

              });
          }
        },
        error => {

        }
      );
    } else {
      Swal.fire("Acción inválida",
        "Introduce un monto mayor a 0",
        "info");
    }
  }
}
