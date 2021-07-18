import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-floreria',
  templateUrl: './detalle-floreria.component.html',
  styleUrls: ['./detalle-floreria.component.css']
})
export class DetalleFloreriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
