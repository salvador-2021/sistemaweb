import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-cama',
  templateUrl: './detalle-cama.component.html',
  styleUrls: ['./detalle-cama.component.css']
})
export class DetalleCamaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
