import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-cerrajeria',
  templateUrl: './detalle-cerrajeria.component.html',
  styleUrls: ['./detalle-cerrajeria.component.css']
})
export class DetalleCerrajeriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
