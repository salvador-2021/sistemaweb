import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-carpinteria',
  templateUrl: './detalle-carpinteria.component.html',
  styleUrls: ['./detalle-carpinteria.component.css']
})
export class DetalleCarpinteriaComponent implements OnInit {
  @Input()datos:any
  constructor() { }

  ngOnInit(): void {
  }

}
