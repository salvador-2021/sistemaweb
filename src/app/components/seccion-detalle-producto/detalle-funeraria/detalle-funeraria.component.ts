import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-funeraria',
  templateUrl: './detalle-funeraria.component.html',
  styleUrls: ['./detalle-funeraria.component.css']
})
export class DetalleFunerariaComponent implements OnInit {
  @Input()datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
