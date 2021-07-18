import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-hivernadero',
  templateUrl: './detalle-hivernadero.component.html',
  styleUrls: ['./detalle-hivernadero.component.css']
})
export class DetalleHivernaderoComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
