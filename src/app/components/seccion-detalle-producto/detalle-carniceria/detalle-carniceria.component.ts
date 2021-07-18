import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-carniceria',
  templateUrl: './detalle-carniceria.component.html',
  styleUrls: ['./detalle-carniceria.component.css']
})
export class DetalleCarniceriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
