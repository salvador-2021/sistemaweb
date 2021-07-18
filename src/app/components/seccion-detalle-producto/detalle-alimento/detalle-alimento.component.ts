import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-alimento',
  templateUrl: './detalle-alimento.component.html',
  styleUrls: ['./detalle-alimento.component.css']
})
export class DetalleAlimentoComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
