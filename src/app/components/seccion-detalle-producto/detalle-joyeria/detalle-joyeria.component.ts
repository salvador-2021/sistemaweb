import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-joyeria',
  templateUrl: './detalle-joyeria.component.html',
  styleUrls: ['./detalle-joyeria.component.css']
})
export class DetalleJoyeriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
