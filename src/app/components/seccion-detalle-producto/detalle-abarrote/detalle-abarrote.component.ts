import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-abarrote',
  templateUrl: './detalle-abarrote.component.html',
  styleUrls: ['./detalle-abarrote.component.css']
})
export class DetalleAbarroteComponent implements OnInit {
  
  @Input()datos:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
