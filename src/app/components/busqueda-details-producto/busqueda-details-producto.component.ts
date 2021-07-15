import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service';

@Component({
  selector: 'app-busqueda-details-producto',
  templateUrl: './busqueda-details-producto.component.html',
  styleUrls: ['./busqueda-details-producto.component.css'],
  providers: [BusquedaGeneralProductoService]
})
export class BusquedaDetailsProductoComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _busquedaProductoService: BusquedaGeneralProductoService
  ) { }

  listaDescripcion: any

  _idnegocio:string;
  _idproducto:string
  _nameTable:string

  datosProducto:any;

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(
      (params: Params) => {

        this._idnegocio = params._idnegocio;
        this._idproducto =  params._idproducto;
        this._nameTable =  params.nameTable;

        this._busquedaProductoService.getDataByIdNegocioIdProducto(this._nameTable ,this._idproducto).subscribe(
          response => {
            if(response.status=="success"){
              //OBTENIENDO DATOS DEL PRODUCTO, SIN IMPORTAR QUE ATRIBUTOS TENGA ==> ABARROTE,ALIMINATO ETC.
              this.datosProducto = response.message[this._nameTable];
            }
          },
          error=>{
      
          }
         );

      }
    );

    this.listaDescripcion = [
      {
        title: "Detalle",
        name: "fjdkjvfkd",
      },
      {
        title: "Marca",
        name: "fjdkjvfkd",
      },
      {
        title: "Modelo",
        name: "fjdkjvfkd",
      },
      {
        title: "Linea",
        name: "fjdkjvfkd",
      },
      {
        title: "Otro",
        name: "fjdkjvfkd",
      }

    ];
  }

  private buscarProducto(_idnegocio, _idproducto) {

  }

}