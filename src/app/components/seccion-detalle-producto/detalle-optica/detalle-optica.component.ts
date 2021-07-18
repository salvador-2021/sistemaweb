import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-optica',
  templateUrl: './detalle-optica.component.html',
  styleUrls: ['./detalle-optica.component.css']
})
export class DetalleOpticaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
