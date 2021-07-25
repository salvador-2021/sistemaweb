import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';

@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css'],
  providers:[BusquedaGeneralProductoService]
})
export class PerfilNegocioComponent implements OnInit {
  panelOpenState = false; //--mat-accordion

  //Variables para paginator
  page_size: number = 20; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [20]   //Productos por Pagina
  _idnegocio: string;
  constructor(private _activatedRoute: ActivatedRoute, private _busquedaProductoService: BusquedaGeneralProductoService) {

    this._activatedRoute.params.subscribe(
      (params: Params) => {

        this._idnegocio = params._idnegocio;

        console.log("Recogiendo _id:", this._idnegocio);
        this._busquedaProductoService.getListAllProductoNegocioById(this._idnegocio).subscribe(
          response => {
            console.log( response.message ) ;
            //console.log(this.listProductsAll);
          },
          error => {

          }
        );
      }
    );

  }

  ngOnInit(): void {
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
