import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-ferreteria',
  templateUrl: './detalle-ferreteria.component.html',
  styleUrls: ['./detalle-ferreteria.component.css']
})
export class DetalleFerreteriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
