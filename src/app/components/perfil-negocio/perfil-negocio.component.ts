import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpresaService } from '../../services/mycompany/empresa.service';
import { BusquedaGeneralProductoService } from '../../services/busquedaPrincipalProducto.service'
import { RegistrarEmpresaService } from '../../services/mycompany/registrar_empresa.service'
@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css'],
  providers: [BusquedaGeneralProductoService, EmpresaService , RegistrarEmpresaService]
})
export class PerfilNegocioComponent implements OnInit {

  @ViewChild('nombreProductoBuscar') nombreProductoBuscar: ElementRef;
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
  listLineaJson:any;
  perfilEncargado: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _busquedaProductoService: BusquedaGeneralProductoService,
    private _empresaService: EmpresaService,
    private _registrarEmpresaService : RegistrarEmpresaService ) {

    //SE OBTIENDE EL ID DEL NEGOCIO QUE VIENE POR PARAMETRO DEL COMPONENTE
    this._activatedRoute.params.subscribe(
      (params: Params) => {

        this._idnegocio = params._idnegocio;
        //OBTENEMOS LOS DATOS DEL NEGOCIO
        _empresaService.getDataNegocioForPerfil(this._idnegocio).subscribe(
          response => {
            if (response.status == "success") {

              this.datosNegocio = response.message;

              if(this.datosNegocio.perfil){
                this.perfilEncargado = this.datosNegocio.perfil;
              }
              
              //==========================================================================================
              if (this.datosNegocio.imagen_negocio != null) {
                this._registrarEmpresaService.getImageFile(this._idnegocio , this.datosNegocio.imagen_negocio).subscribe(
                  response => {
                    this.createImageFromBlob(response);
                  },
                  error => { }
                );
              }
              let lista = [];
              lista = this.datosNegocio.lineaNegocio;

              //==========================================================================================
              //DESPUES DE QUE SE RECUPERE LOS DATOS DEL NEGOCIO, DESPUES SE RECUPERA LOS PRODUCTOS QUE OFRECE
              
              
              if (lista.length == 1) {
                this.listLineaJson = {
                  linea1: lista[0].linea,
                }
              } else if (lista.length == 2) {
                this.listLineaJson = {
                  linea1: lista[0].linea,
                  linea2: lista[1].linea
                }
              }

              //OBTENEMOS TODO LOS PRODUCTOS QUE LE PERNECEN A ESE NEGOCIO
              this._busquedaProductoService.getListAllProductoNegocioById(this._idnegocio, this.listLineaJson).subscribe(
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
    if (this.nombreProductoBuscar.nativeElement.value != null) {
      this._busquedaProductoService.getProductoNegocio(this._idnegocio ,this.nombreProductoBuscar.nativeElement.value ,this.listLineaJson).subscribe(
        response => {
          console.log(response);
          if (response.status == "success") {
            this.listProductsAll = response.message;
          } else if (response.status == "vacio") {
            this.listProductsAll = null;
          }
        },
        error => {

        }
      );
    }
  }
}
