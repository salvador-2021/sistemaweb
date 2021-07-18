import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-fierro',
  templateUrl: './detalle-fierro.component.html',
  styleUrls: ['./detalle-fierro.component.css']
})
export class DetalleFierroComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
