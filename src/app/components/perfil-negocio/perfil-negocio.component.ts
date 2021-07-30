import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpresaService } from '../../services/empresa.service';
<<<<<<< HEAD
import {BusquedaGeneralProductoService} from '../../services/busquedaPrincipalProducto.service'
=======
import { BusquedaGeneralProductoService } from 'src/app/services/busquedaPrincipalProducto.service';
>>>>>>> 5319890889f4cbc5502b5758b362a9d8c4471df8
@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css'],
  providers: [BusquedaGeneralProductoService, EmpresaService]
})
export class PerfilNegocioComponent implements OnInit {

  @Input() _idnegocio: string;
  @Input() _nameTable: string;

  panelOpenState = false; //--mat-accordion  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Variables para paginator
  page_size: number = 20; //Productos por Pagina
  page_number: number = 1; //Número de paginas
  pageSizeOptions = [20]   //Productos por Pagina
  listProductsAll: [];
  datosNegocio: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _busquedaProductoService: BusquedaGeneralProductoService,
    private _empresaService: EmpresaService, ) {

    //SE OBTIENDE EL ID DEL NEGOCIO QUE VIENE POR PARAMETRO DEL COMPONENTE
    this._activatedRoute.params.subscribe(
      (params: Params) => {

        this._idnegocio = params._idnegocio;
        //OBTENEMOS LOS DATOS DEL NEGOCIO
        _empresaService.getDataNegocioForPerfil(this._idnegocio).subscribe(
          response => {
            if (response.status == "success") {

              this.datosNegocio = response.message;

              //==========================================================================================
              if (this.datosNegocio.imagen_negocio != null) {
                _empresaService.getImageName(this.datosNegocio.imagen_negocio).subscribe(
                  response => {
                    this.createImageFromBlob(response);
                  },
                  error => { }
                );
              }
              let lista = [];
              lista = this.datosNegocio.lineaNegocio;

              //==========================================================================================
              //DESPUES DE UE RECUPERE LOS DATOS DEL NEGOCIO, DESPUES SE RECUPERA LOS PRODUCTOS QUE OFRECE
              //OBTENEMOS TODO LOS PRODUCTOS QUE LE PERNECEN A ESE NEGOCIO
              let dataJson;
              if (lista.length == 1) {
                dataJson = {
                  linea1: lista[0].linea,
                }
              } else if (lista.length == 2) {
                dataJson = {
                  linea1: lista[0].linea,
                  linea2: lista[1].linea
                }
              }

              this._busquedaProductoService.getListAllProductoNegocioById(this._idnegocio, dataJson ).subscribe(
                response => {
                  this.listProductsAll = response.message;
                },
                error => {
                }
              );
              //==================================================================================================
            }
          },
          error => {

          }
        );
      }
    );
  }


  ngOnInit(): void {
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  imagenNegocio: string;
  imageFile: File;
  imageResultBlob: any;
  //convierte el objecto Blob en un data leido por la etiqueta img
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {
      this.imageResultBlob = event.target.result;
      this.imagenNegocio = this.imageResultBlob;
    }
  }

  buscarProductoNegocio() {
    this._empresaService.getDataAllNegocio("").subscribe(
      response => {

      },
      error => {

      }
    );
  }
}
