import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-herreria',
  templateUrl: './detalle-herreria.component.html',
  styleUrls: ['./detalle-herreria.component.css']
})
export class DetalleHerreriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
