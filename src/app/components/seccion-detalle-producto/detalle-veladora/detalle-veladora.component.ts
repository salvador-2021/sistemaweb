import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-veladora',
  templateUrl: './detalle-veladora.component.html',
  styleUrls: ['./detalle-veladora.component.css']
})
export class DetalleVeladoraComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
