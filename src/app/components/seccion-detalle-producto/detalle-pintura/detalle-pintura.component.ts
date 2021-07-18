import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pintura',
  templateUrl: './detalle-pintura.component.html',
  styleUrls: ['./detalle-pintura.component.css']
})
export class DetallePinturaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
