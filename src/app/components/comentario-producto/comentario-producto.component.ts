import { Component, OnInit, ViewChild, ElementRef, Input, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DialogForComentarioProductComponent } from '../dialog-for-comentario-product/dialog-for-comentario-product.component';
import { ComentarioService } from '../../services/comentario.service';
import { UsuarioService } from '../../services/mycompany/usuario.services'
import { DatosGlobales } from '../../services/datosGlobales';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-comentario-producto',
  templateUrl: './comentario-producto.component.html',
  styleUrls: ['./comentario-producto.component.css'],
  providers: [ComentarioService, UsuarioService]
})
export class ComentarioProductoComponent implements OnInit {

  @Input() _idnegocio: string;
  @Input() _nameTable: string;
  @Input() _idproducto: string;
  @Input() listaComentarios: [];
  @Input() isServicio:boolean=false;//TRUE=>ES UN SERVICIO , FALSE=>NO ES UN SERVICIO
  listaComentariosNombreUsuario:any [];

  cantidadComentario: number = 0;
  porcentaje_estrella1: number = 0;
  porcentaje_estrella2: number = 0;
  porcentaje_estrella3: number = 0;
  porcentaje_estrella4: number = 0;
  porcentaje_estrella5: number = 0;

  suma_estrella1: number = 0;
  suma_estrella2: number = 0;
  suma_estrella3: number = 0;
  suma_estrella4: number = 0;
  suma_estrella5: number = 0;

  rating = 0;
  ratingArr: boolean[] = [];//true solid star; false = empty star

  public _datosGlobales: DatosGlobales;

  constructor(private _comentarioService: ComentarioService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog,
    private _router: Router,
    private ngxLoaderService: NgxUiLoaderService //EFECTO DE CARGA AQUI
    ) {

    this.ratingArr = Array(5).fill(false);
    //this.rating = 4;
    this._datosGlobales = new DatosGlobales();
  }

  ngOnInit(): void {

    if (this.listaComentarios.length > 0) {
      this.nombreUsuarioComentario();
    }

    
    this.cantidadComentario = this.listaComentarios.length;
    //if( this.cantidadComentario>0){
      this.calculoMediaEstrellas(this.listaComentarios);
   // }

    if (this.cantidadComentario > 0) {
      this.listaComentarios.forEach(data => {

        if (data["estrellas"] == 1) {
          this.suma_estrella1 = this.suma_estrella1 + 1
        } else if (data["estrellas"] == 2) {
          this.suma_estrella2 = this.suma_estrella2 + 1
        } else if (data["estrellas"] == 3) {
          this.suma_estrella3 = this.suma_estrella3 + 1
        } else if (data["estrellas"] == 4) {
          this.suma_estrella4 = this.suma_estrella4 + 1
        } else if (data["estrellas"] == 5) {
          this.suma_estrella5 = this.suma_estrella5 + 1
        }
      });

      this.porcentaje_estrella1 = Math.round( this.suma_estrella1 * 100 / this.cantidadComentario);
      this.porcentaje_estrella2 = Math.round( this.suma_estrella2 * 100 / this.cantidadComentario);
      this.porcentaje_estrella3 = Math.round( this.suma_estrella3 * 100 / this.cantidadComentario);
      this.porcentaje_estrella4 = Math.round( this.suma_estrella4 * 100 / this.cantidadComentario);
      this.porcentaje_estrella5 = Math.round( this.suma_estrella5 * 100 / this.cantidadComentario);
    
    }
  }


  /***
   * ABRE UN CUADRO DE DIALOGO PARA COLOCAR LOS DATOS DEL COMENTARIO DESPUES LOS DEVUELVE PARA GUARDARLOS EN MONGODB
   */
  openDialog(): void {
     

    if (this._datosGlobales.loggedIn == true) {

      //console.log(this._datosGlobales.getTipoUserAuthorization);
      if (this._datosGlobales.getTipoUserAuthorization == "usuario") {

        const dialogRef = this.dialog.open(DialogForComentarioProductComponent);
        dialogRef.afterClosed().subscribe(result => {

          if (result != undefined || result != null) {

            let datos = {
              nameTbl: this._nameTable,
              titulo_comentario: result.titulo_comentario,
              comentario: result.comentario,
              estrellas: result.estrellas
            };
            this.guardarComentario(datos);
          }
        });
      } else {
        this._router.navigate(['/login']);
      }

    } else {
      this._router.navigate(['/login']);
    }
  }

  /**
   * GUARDA LOS DATOS EN MONGODB
   * @param dataModel DATOS A GUARDAR , TITULO DEL COMENTARIO , COMENTARIO , ESTRELLAS  
   */
  guardarComentario(dataModel) {
    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._comentarioService.saveData(this._idnegocio, this._idproducto, dataModel).subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        Swal.fire('Gracias por su opinión',
          'Su opinión se publicará en un momento',
          'success').then((value)=>{
            window.location.href = window.location.href;
          });

      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

      });
  }


  //CALCULO DE ESTRELLAS
  /**
   * Método para las estrellas
   * @param i 
   */
  returnStart(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  calculoMediaEstrellas(listacomentarios: []) {
    if (listacomentarios.length == 0) {
      this.rating = 1;
    } else {

      let sumaEstrellas = 0;
      listacomentarios.forEach(comentario => {
        sumaEstrellas = sumaEstrellas + comentario['estrellas'];
      });

      console.log("result comentario sumaEstrellas", sumaEstrellas);
      let result = sumaEstrellas / 5;
      console.log("result comentario", result);
      if (result >= 1 && result <= 1.4) {
        this.rating = 1;
      } else
        if (result >= 1.5 && result <= 2.4) {
          this.rating = 2;
        } else
          if (result >= 2.5 && result <= 3.4) {
            this.rating = 3;
          } else
            if (result >= 3.5 && result <= 4.4) {
              this.rating = 4;
            } else
              if (result >= 4.5) {
                this.rating = 5;
              }
    }
  }

  nombreUsuarioComentario() {
    this.listaComentariosNombreUsuario = [];
    
    this.listaComentarios.forEach(data => {
  
      this._usuarioService.getNameUser(data["_idusuario"]).subscribe(
        response => {
          
          if (response.status = "succes") {
            this.listaComentariosNombreUsuario.push(
              {
                comentario: data["comentario"],
                estrellas: data["estrellas"],
                fecha: data["fecha"],
                titulo_comentario: data["titulo_comentario"],
                nombre_usuario: response.message.nombre,
              }
            );

          }          
        },
        error => {

        }
      );
    });

   
  }

  /*
  escribirComentario(){
   this.comentario();
  }

async comentario (){
  const { value: formValues } = await Swal.fire({
    title: 'Comparte ru opinión',
    html:
      '<input id="swal-input1" placeholder="Escribe el titulo de opinión" class="swal2-input">' +
      '<input id="swal-input2" placeholder="Escribe tu opinión" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        //this.txtcomentario.nativeElement.value,
        //this.title_comentario.nativeElement.value
        //console.log(document.getElementById('swal-input1')),
        //document.getElementById('swal-input2')
        (<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value
      ]
    }
  });
  
  if (formValues) {
    console.log(formValues[0]);
    console.log(formValues[1]);
    return Swal.fire(JSON.stringify(formValues))
  }

}*/

}
