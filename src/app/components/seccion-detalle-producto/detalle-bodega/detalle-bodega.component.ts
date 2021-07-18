import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-bodega',
  templateUrl: './detalle-bodega.component.html',
  styleUrls: ['./detalle-bodega.component.css']
})
export class DetalleBodegaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
