import { Component, OnInit, Input } from '@angular/core';
import { tblCountService } from '../../services/tblCount.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-subheader',
  templateUrl: './nav-subheader.component.html',
  styleUrls: ['./nav-subheader.component.css'],
  providers: [tblCountService]
})

export class NavSubheaderComponent implements OnInit {

  @Input() ruta_link:string;
  @Input() tblName:string;

  constructor(
    private _tblCountService: tblCountService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goListProduct() {
    this._tblCountService.countProduct(this.tblName).subscribe(
      response => {

        if (response.status == 'success') {
          console.log(response);

          if (response.message == 0) {

            Swal.fire("Aún no se ha registrado ningún producto",
              "Registre un producto",
              "info");

          } else {
            this._router.navigate([this.ruta_link]);
          }

        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
