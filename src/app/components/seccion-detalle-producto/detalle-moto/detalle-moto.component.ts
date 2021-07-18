import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-moto',
  templateUrl: './detalle-moto.component.html',
  styleUrls: ['./detalle-moto.component.css']
})
export class DetalleMotoComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
