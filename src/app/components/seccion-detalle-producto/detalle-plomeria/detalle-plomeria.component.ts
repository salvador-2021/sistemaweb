import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-plomeria',
  templateUrl: './detalle-plomeria.component.html',
  styleUrls: ['./detalle-plomeria.component.css']
})
export class DetallePlomeriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
