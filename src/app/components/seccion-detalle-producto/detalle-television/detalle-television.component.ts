import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-television',
  templateUrl: './detalle-television.component.html',
  styleUrls: ['./detalle-television.component.css']
})
export class DetalleTelevisionComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
