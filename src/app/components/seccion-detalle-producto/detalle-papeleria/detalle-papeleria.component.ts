import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-papeleria',
  templateUrl: './detalle-papeleria.component.html',
  styleUrls: ['./detalle-papeleria.component.css']
})
export class DetallePapeleriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
