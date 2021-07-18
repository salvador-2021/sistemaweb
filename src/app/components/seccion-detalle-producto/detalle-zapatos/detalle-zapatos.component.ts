import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-zapatos',
  templateUrl: './detalle-zapatos.component.html',
  styleUrls: ['./detalle-zapatos.component.css']
})
export class DetalleZapatosComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
