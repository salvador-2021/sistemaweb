import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-plancha',
  templateUrl: './detalle-plancha.component.html',
  styleUrls: ['./detalle-plancha.component.css']
})
export class DetallePlanchaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
