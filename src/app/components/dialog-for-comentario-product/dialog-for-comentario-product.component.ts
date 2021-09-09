import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-for-comentario-product',
  templateUrl: './dialog-for-comentario-product.component.html',
  styleUrls: ['./dialog-for-comentario-product.component.css']
})
export class DialogForComentarioProductComponent implements OnInit {

  @ViewChild("txtcomentario_title") txtcomentario_title: ElementRef;
  @ViewChild("txtcomentario") txtcomentario: ElementRef;

  rating = 4;
  starCount = 5;
  ratingArr: boolean[] = [];//true solid star; false = empty star
  notaError:string = null;

  public validacionForm: FormGroup;

  constructor(
    public dialog: MatDialogRef<DialogForComentarioProductComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private formBuilder: FormBuilder,
  ) {
//VALIDACION DEL FORMULARIO
this.validacionForm = this.formBuilder.group({
  txtcomentario_title: ['', [Validators.required, Validators.maxLength(30)]],
  txtcomentario: ['', [Validators.required, Validators.maxLength(300)]]
});
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  returnStart(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
  }

  enviarComentario() {
    //SE RECUPERA LA INFORMACION DE LA VISTA
    let comentario = "";
    let comentarioTitle = "";
    comentario = this.txtcomentario.nativeElement.value;
    comentarioTitle = this.txtcomentario_title.nativeElement.value;

    if(this.rating == 0 || comentario.length<3 || comentario.length<3){
      this.notaError = "Nota: Califica el producto con las estrellas, introduce un título y comenta sobre el producto antes de enviar tu opinión";
    }
    if (this.rating != 0 && comentario.length>2 && comentarioTitle.length>2) {
      //SE GUARDA LA INFORMACIÓN EN JSON
      let datosComentario = {
        titulo_comentario: comentarioTitle,
        comentario: comentario,
        estrellas: this.rating
      }
      //SE ENVIA LA INFORMACIÓN DONDE SE ESTE USANDO EL DIALOG
      this.dialog.close(datosComentario);
    }
  }

  /*CONTROL SOBRE LA CANTIDAD DE CARACTERES DE LOS INPUT */

  listaDatosMostrar = {
    titlecomentarioP: false,
    comentarioP: false,
  }
  //METODO PAR MOSTRAR/OCULTAR CADA CAMPO
  showNumber(nombreCampo, valor) {
    if (nombreCampo == "titlecomentarioP") { this.listaDatosMostrar.titlecomentarioP = valor; }
    if (nombreCampo == "comentarioP") { this.listaDatosMostrar.comentarioP = valor; }

  }
}
