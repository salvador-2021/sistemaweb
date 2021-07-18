import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-microonda',
  templateUrl: './detalle-microonda.component.html',
  styleUrls: ['./detalle-microonda.component.css']
})
export class DetalleMicroondaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
