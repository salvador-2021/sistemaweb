import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tienda-ropa-article',
  templateUrl: './tienda-ropa-article.component.html',
  styleUrls: ['./tienda-ropa-article.component.css']
})
export class TiendaRopaArticleComponent implements OnInit {

  @Input() article:any;

  constructor() { }
  
  ngOnInit(): void {
   console.log(this.article.data.nombre);
  }
}
