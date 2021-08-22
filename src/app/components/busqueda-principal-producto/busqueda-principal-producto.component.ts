import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RopaModel } from '../../models/ropa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-tienda-ropa',
  templateUrl: './busqueda-principal-producto.component.html',
  styleUrls: ['./busqueda-principal-producto.component.css'],
  providers: [BusquedaGeneralProductoService]
})
export class BusquedaPrincipalProductoComponent implements OnInit {

  //Variables para paginator
  page_size: number = 20; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [20]   //Productos por Pagina
  listProductsAll: [];
  nombreProductoBuscando: String;
  lineaProducto: string = null;
  busquedaNegocio: boolean = false;

  constructor(private _busquedaProductoService: BusquedaGeneralProductoService, private _activatedRoute: ActivatedRoute, private renderer: Renderer2, private ngxLoaderService: NgxUiLoaderService) {
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(
      (params: Params) => {

        if (params.linea == "ropas" && params.talla && params.marca && params.color && params.nombreProducto) { //BUSQUEDA CON FILTRO PARA ROPAS
          //BUSCANDO CON FILTRO DE ROPA
          this.lineaProducto = params.linea;
          this.busquedaFiltroRopa(params);

        } else if (params.linea == "zapatos" && params.talla && params.marca && params.color && params.nombreProducto) { //BUSQUEDA CON FILTRO PARA ZAPATOS
          //BUSCANDO CON FILTRO DE ZAPATOS
          this.lineaProducto = params.linea;
          this.busquedaFiltroCalzado(params);

        } else if (params.negocio == "busqueda_negocio") {
          //BUSCAR NEGOCIO
          this.lineaProducto = "busqueda_negocio"
          this.busquedaNegocio = true;

        } else { //BUSQUEDA SIN FILTRO

          if (params.linea == "ropas") {
            this.lineaProducto = params.linea;
          } else if (params.linea == "zapatos") {
            this.lineaProducto = params.linea;
          } else {
            this.lineaProducto = null;
          }

          //console.log("linea", params.linea);

          this.nombreProductoBuscando = params.nombreProducto;
          this.busquedaProducto(this.nombreProductoBuscando);
        }
        //OBTENES EL LINEA DE NEGOCIO , PARA PONER EL FILTRO DE BUSQUEDA SEGÚN SEA EL CASO

      }
    );
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  //BUSQUEDA GENERAL 
  busquedaProducto(nombreProductoBuscar) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._busquedaProductoService.getListProductoAll(nombreProductoBuscar).subscribe(
      response => {

        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.listProductsAll = response.message;
        } else if (response.status == "vacio") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
          this.listProductsAll = null;
        }
      },
      error => {

      }
    );
  }
  busquedaFiltroRopa(data) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._busquedaProductoService.busquedaFiltroRopa(data).subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.listProductsAll = response.message;
        } else if (response.status == "vacio") {
          
          this.listProductsAll = null;
        }
      },
      error => {

      }
    );
  }
  busquedaFiltroCalzado(data) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._busquedaProductoService.busquedaFiltroCalzado(data).subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          this.listProductsAll = response.message;
        } else if (response.status == "vacio") {
          this.listProductsAll = null;
        }
      },
      error => { }
    );
  }

 
}







