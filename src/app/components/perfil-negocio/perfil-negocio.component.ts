<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';
=======
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
>>>>>>> 231e45acd6c4f5ec53e91b279aeb3b7dadbed29d

@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css'],
<<<<<<< HEAD
  providers:[BusquedaGeneralProductoService]
=======
>>>>>>> 231e45acd6c4f5ec53e91b279aeb3b7dadbed29d
})
export class PerfilNegocioComponent implements OnInit {
  @Input() _idnegocio: string;
  @Input() _nameTable: string;

  
  panelOpenState = false; //--mat-accordion  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Variables para paginator
  page_size: number = 20; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [20]   //Productos por Pagina
<<<<<<< HEAD
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

=======

  constructor(
  ) { 
    
>>>>>>> 231e45acd6c4f5ec53e91b279aeb3b7dadbed29d
  }

  ngOnInit(): void {
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  

}
