import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/mycompany/empresa.service';
import { DatosGlobales } from '../../services/datosGlobales';
import { Router } from '@angular/router';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR


@Component({
  selector: 'app-lateral-admin',
  templateUrl: './lateral-admin-negocio.component.html',
  styleUrls: ['./lateral-admin-negocio.component.css'],
  providers: [EmpresaService]
})
export class LateralAdminNegocioComponent implements OnInit {

  listaLinea = [];
  public _datosGlobales: DatosGlobales;

  constructor(private _router: Router, private _empresaService: EmpresaService, private ngxLoaderService: NgxUiLoaderService) {
    this._datosGlobales = new DatosGlobales();
  }

  //Contiene la lista de servicios que tendran perfil
  listaServicioPerfil: string[];
  tienePerfil: number = 0;
  estadoPagoNegocio: boolean = false;
  fechaExperacion:string="";
  sumaProductosRegistrados:number=0;


  ngOnInit(): void {
    
    //LISTA DE SERVICIOS QUE TENDRAN PERFIL DONDE PODRAN PONER SU CEDULA PROFESIONAL
    this.listaServicioPerfil = [
      "Óptica",
      "Odontologíav",
      "Pediatría",
      "Consultorio médico",
      "Ginecólogo",
      "Despacho jurídico"
    ];

    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA

    this._empresaService.getLineaNegocio().subscribe(
      response => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
        
        if (response.status == "success") {

          this.listaLinea = response.message.lineaNegocio;
          
          this.listaLinea.forEach(data => {
            this.servicioValido(data.titulo_linea);
            
            //console.log("Linea",data.linea);
            /*this._empresaService.getCantidadProductosRegistrado(data.linea).subscribe(
              response =>{
                console.log("Cantidad de productos registrados",response);
                this.sumaProductosRegistrados = this.sumaProductosRegistrados + response.message;
                console.log("cantida total de producto",this.sumaProductosRegistrados);
              },
              error=>{

              }
            ); */
          });
        }
      },
      error => {
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA
      }
    );

    this._empresaService.getLogoNegocio().subscribe(
      response => {
        
        if (response != null) {
          this.createImageFromBlob(response);
        }
      },
      error => {
      }
    );

    //CHECAMOS SI EL NEGOCIO YA PAGO
    //TRUE  ==> YA PAGO
    //FALSE ==> NO HA PAGADO
    this._empresaService.getDataNegocio().subscribe(
      response => {
        this.estadoPagoNegocio = response.message.estado_pag;
        if(this.estadoPagoNegocio==true){
          this.fechaExperacion =  response.message.fecha_pago
        }
      },
      error => {

      }
    );
  }

  /**
   * BUSCA EN LA LISTA DE SERVICIOS PARA COMPROBAR SI EL USUARIO TIENE EL SERVICIO DE SALUD 
   * @param servicio 
   */
  servicioValido(servicio) {
    var index = this.listaServicioPerfil.find(function (item, i) {
      return item == servicio
    });

    if (index) {
      this.tienePerfil = this.tienePerfil + 1;
    }

  }

  logoNegocio: string;
  imageFile: File;
  imageResultBlob: any;
  //convierte el objecto Blob en un data leido por la etiqueta img
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    this.imageFile = new File([image], "foto.png", { type: 'image/jpeg' });
    reader.readAsDataURL(this.imageFile);
    reader.onload = (event: any) => {
      this.imageResultBlob = event.target.result;
      this.logoNegocio = this.imageResultBlob;
    }
  }

  /**
  * CERRAMOS SESIÓN DE LA CUENTA 
  */
 cerrarSesion() {
  this._datosGlobales.deleteAuthorization();
  this._datosGlobales.deleteTipoUserAuthorization();
  this._router.navigate(['/home']);
  window.location.href = window.location.href;
}

  agregarServicio(routerLink, tituloLinea) {
    this._router.navigate(
      //['/busqueda-principal-producto', lineaSelect, nombreProducto]
      [routerLink, { tipoServicio: tituloLinea }]
    );
  }
}
