import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-dentista',
  templateUrl: './detalle-dentista.component.html',
  styleUrls: ['./detalle-dentista.component.css']
})
export class DetalleDentistaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
