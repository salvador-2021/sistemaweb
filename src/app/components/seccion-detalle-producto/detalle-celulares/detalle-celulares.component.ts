import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-celulares',
  templateUrl: './detalle-celulares.component.html',
  styleUrls: ['./detalle-celulares.component.css']
})
export class DetalleCelularesComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
