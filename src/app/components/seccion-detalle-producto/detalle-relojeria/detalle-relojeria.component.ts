import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-relojeria',
  templateUrl: './detalle-relojeria.component.html',
  styleUrls: ['./detalle-relojeria.component.css']
})
export class DetalleRelojeriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
