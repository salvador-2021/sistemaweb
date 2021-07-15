import { Component, OnInit,Renderer2, ViewChild, ElementRef  } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RopaModel } from '../../models/ropa';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';

@Component({
  selector: 'app-tienda-ropa',
  templateUrl: './busqueda-principal-producto.component.html',
  styleUrls: ['./busqueda-principal-producto.component.css'],
  providers:[BusquedaGeneralProductoService]
})
export class BusquedaPrincipalProductoComponent implements OnInit {

  //Variables para paginator
  page_size: number = 20; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [20]   //Productos por Pagina
  listProductsAll: [];

  @ViewChild("nombreProductoBuscar") nombreProductoBuscar: ElementRef;
  constructor( private _busquedaProductoService: BusquedaGeneralProductoService,) {

  }

  ngOnInit(): void {
    
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  buscarcaProducto(){
    this._busquedaProductoService.getListProductoAll(this.nombreProductoBuscar.nativeElement.value).subscribe(
    response => {
      this.listProductsAll = response.message;
      console.log(this.listProductsAll);
    },
    error=>{

    }
   );
  }
}







