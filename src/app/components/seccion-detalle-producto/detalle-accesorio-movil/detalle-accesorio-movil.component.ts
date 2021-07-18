import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-accesorio-movil',
  templateUrl: './detalle-accesorio-movil.component.html',
  styleUrls: ['./detalle-accesorio-movil.component.css']
})
export class DetalleAccesorioMovilComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
