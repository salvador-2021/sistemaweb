import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/mycompany/empresa.service';

@Component({
  selector: 'app-lateral-admin',
  templateUrl: './lateral-admin-negocio.component.html',
  styleUrls: ['./lateral-admin-negocio.component.css'],
  providers: [EmpresaService]
})
export class LateralAdminNegocioComponent implements OnInit {

  listaLinea = [];

  constructor(private _empresaService: EmpresaService) { }

  //Contiene la lista de servicios que tendran perfil
  listaServicioPerfil: string[];
  tienePerfil: number = 0;

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

    this._empresaService.getLogoNegocio().subscribe(
      response =>{
        console.log( "logo" , response);
        this.createImageFromBlob(response);
      }, 
      error=>{

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

    console.log(this.tienePerfil);

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
