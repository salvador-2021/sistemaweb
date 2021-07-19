import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-for-comentario-product',
  templateUrl: './dialog-for-comentario-product.component.html',
  styleUrls: ['./dialog-for-comentario-product.component.css']
})
export class DialogForComentarioProductComponent implements OnInit {

  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];//true solid star; false = empty star
  

  constructor(public dialog: MatDialogRef<DialogForComentarioProductComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
    ) {

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
}
