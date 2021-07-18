import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-farmacia',
  templateUrl: './detalle-farmacia.component.html',
  styleUrls: ['./detalle-farmacia.component.css']
})
export class DetalleFarmaciaComponent implements OnInit {
  @Input()datos:any
  constructor() { }

  ngOnInit(): void {
  }

}
