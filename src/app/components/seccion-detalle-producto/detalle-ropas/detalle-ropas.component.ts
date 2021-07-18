import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-ropas',
  templateUrl: './detalle-ropas.component.html',
  styleUrls: ['./detalle-ropas.component.css']
})
export class DetalleRopasComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
