import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-refrigerador',
  templateUrl: './detalle-refrigerador.component.html',
  styleUrls: ['./detalle-refrigerador.component.css']
})
export class DetalleRefrigeradorComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
