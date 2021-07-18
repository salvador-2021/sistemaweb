import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
