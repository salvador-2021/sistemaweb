import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css'],
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

  constructor(
  ) { 
    
  }

  ngOnInit(): void {
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  

}
