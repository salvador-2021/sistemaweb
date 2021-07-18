import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-computadora',
  templateUrl: './detalle-computadora.component.html',
  styleUrls: ['./detalle-computadora.component.css']
})
export class DetalleComputadoraComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
