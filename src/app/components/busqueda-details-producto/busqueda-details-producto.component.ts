import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-details-producto',
  templateUrl: './busqueda-details-producto.component.html',
  styleUrls: ['./busqueda-details-producto.component.css']
})
export class BusquedaDetailsProductoComponent implements OnInit {

  constructor() { }

  listaDescripcion:any

  ngOnInit(): void {
    this.listaDescripcion = [
      {
        title:"Detalle",
        name:"fjdkjvfkd",
      },
      {
        title:"Marca",
        name:"fjdkjvfkd",
      },
      {
        title:"Modelo",
        name:"fjdkjvfkd",
      },
      {
        title:"Linea",
        name:"fjdkjvfkd",
      },
      {
        title:"Otro",
        name:"fjdkjvfkd",
      }
    ];
  }

}