import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RopaModel } from '../../models/ropa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';

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
  
  constructor(private _busquedaProductoService: BusquedaGeneralProductoService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(
      (params: Params) => {
        //OBTENEMOS EL NOMBRE DEL PRODUCTO A BUSCAR
        if (params.nombreProductoBuscar) {
          this.nombreProductoBuscando = params.nombreProductoBuscar;
          this.buscarProducto(this.nombreProductoBuscando);
        }
        //OBTENES EL LINEA DE NEGOCIO , PARA PONER EL FILTRO DE BUSQUEDA
        if (params.linea) {
          this.lineaProducto = params.linea;
        }
      }
    );
   
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  buscarProducto(nombreProductoBuscar) {
    this._busquedaProductoService.getListProductoAll(nombreProductoBuscar).subscribe(
      response => {

        if (response.status == "success") {
          this.listProductsAll = response.message;
        } else if (response.status == "vacio") {
          this.listProductsAll = null;
        }
      },
      error => {

      }
    );
  }

}







