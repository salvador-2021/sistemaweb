import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import {DialogForComentarioProductComponent } from '../dialog-for-comentario-product/dialog-for-comentario-product.component'

@Component({
  selector: 'app-comentario-producto',
  templateUrl: './comentario-producto.component.html',
  styleUrls: ['./comentario-producto.component.css']
})
export class ComentarioProductoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openDialog():void{
    const dialogRef = this.dialog.open(DialogForComentarioProductComponent); 
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
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
