import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-construccion',
  templateUrl: './detalle-construccion.component.html',
  styleUrls: ['./detalle-construccion.component.css']
})
export class DetalleConstruccionComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
