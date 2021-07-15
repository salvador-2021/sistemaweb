import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';


@Component({
  selector: 'app-tienda-ropa-article',
  templateUrl: './tienda-ropa-article.component.html',
  styleUrls: ['./tienda-ropa-article.component.css']
})
export class TiendaRopaArticleComponent implements OnInit {

  @Input() article: any;

  constructor(private _router: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Datos", this.article);
    //console.log("IdNegocio", this.article._id);
  }

  mostrarDetalleProducto(_id, data, nameTable) {
    //componente a ir ===>>>>> _idNegocio , _idproducto
    this._router.navigate(['/busqueda-detalle-producto', _id, data._id , nameTable]);
  }
}
