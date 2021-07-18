import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-fotos',
  templateUrl: './detalle-fotos.component.html',
  styleUrls: ['./detalle-fotos.component.css']
})
export class DetalleFotosComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
