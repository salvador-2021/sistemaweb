import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-fruteria',
  templateUrl: './detalle-fruteria.component.html',
  styleUrls: ['./detalle-fruteria.component.css']
})
export class DetalleFruteriaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
