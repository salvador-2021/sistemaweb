import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detalle-muebleria',
  templateUrl: './detalle-muebleria.component.html',
  styleUrls: ['./detalle-muebleria.component.css']
})
export class DetalleMuebleriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
