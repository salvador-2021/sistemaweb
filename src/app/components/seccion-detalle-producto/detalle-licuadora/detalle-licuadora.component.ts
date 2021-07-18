import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-licuadora',
  templateUrl: './detalle-licuadora.component.html',
  styleUrls: ['./detalle-licuadora.component.css']
})
export class DetalleLicuadoraComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
