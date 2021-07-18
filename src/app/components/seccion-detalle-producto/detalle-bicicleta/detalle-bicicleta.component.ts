import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-bicicleta',
  templateUrl: './detalle-bicicleta.component.html',
  styleUrls: ['./detalle-bicicleta.component.css']
})
export class DetalleBicicletaComponent implements OnInit {

  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
