import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-tela',
  templateUrl: './detalle-tela.component.html',
  styleUrls: ['./detalle-tela.component.css']
})
export class DetalleTelaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
