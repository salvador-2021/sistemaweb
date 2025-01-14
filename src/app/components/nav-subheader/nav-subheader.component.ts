import { Component, OnInit, Input } from '@angular/core';
import { tblCountService } from '../../services/tblCount.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatosGlobales } from 'src/app/services/datosGlobales';
import { EmpresaService } from 'src/app/services/mycompany/empresa.service';


@Component({
  selector: 'app-nav-subheader',
  templateUrl: './nav-subheader.component.html',
  styleUrls: ['./nav-subheader.component.css'],
  providers: [tblCountService,EmpresaService],
  
})

export class NavSubheaderComponent implements OnInit {
  public _datosGlobales: DatosGlobales;
  
  listaLinea = [];
  logueado: boolean = false;
  isAdmin:boolean=false;
  
  @Input() mostrarLista: boolean; //Mostrar Lista
  @Input() mostrarNavSidebar: boolean; 
  @Input() ruta_link:string; //RUTELINK DEL COMPONENTE
  @Input() tblName:string; //NOMBDE DEL ARRAY EN MONGODB DONDE SE BUSCARA EL REGISTRO
  @Input() msjUser:string=null; //MENSAJE PARA EL USUARIO
  

  //Contiene la lista de servicios que tendran perfil
  listaServicioPerfil: string[];
  tienePerfil: number = 0;
  estadoPagoNegocio :boolean = false;
  fechaExperacion:string="";

  constructor(
    private _tblCountService: tblCountService,
    private _router: Router,
    private _empresaService: EmpresaService
  ) { 
    this.mostrarLista = true; //Mostrar el icono listar Producto
    this.mostrarNavSidebar = true;
  }

  ngOnInit(): void {
      
    //LISTA DE SERVICIOS QUE TENDRAN PERFIL DONDE PODRAN PONER SU CEDULA PROFESIONAL
    this.listaServicioPerfil = [
      "optica",
      "odontologia",
      "pediatria",
      "consultorio_medico",
      "ginecologo",
      "despacho_juridico"
    ];

    this._empresaService.getLineaNegocio().subscribe(
      response => {
        if (response.status == "success") {
          this.listaLinea = response.message.lineaNegocio;
          
          this.listaLinea.forEach(data => {
            this.servicioValido(data.linea);
          });
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

  goListProduct() {
    this._tblCountService.countProduct(this.tblName).subscribe(
      response => {

        if (response.status == 'success') {
          

          if (response.message == 0) {

            if(this.msjUser!=null){
              Swal.fire("Ningún registro",
              this.msjUser,
              "info");
            }else if(this.msjUser==null){
              Swal.fire("Ningún registro",
              "Registre un producto",
              "info");
            }
        
          } else {
            this._router.navigate([this.ruta_link]);
          }

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




}
