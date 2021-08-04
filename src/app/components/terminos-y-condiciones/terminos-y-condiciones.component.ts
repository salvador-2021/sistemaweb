import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrls: ['./terminos-y-condiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {
  AvisoPrivacidad:boolean;
  CondicionesUso:boolean;

  constructor() { 
    this.CondicionesUso=true;
   
  }

  ngOnInit(): void {
  }


  //MOSTRAR TERMINOS Y CONDICIONES - AVISO DE PRIVACIDAD DEL SISTEMA WEB
  mostrar_CondicionesUso(){
    this.AvisoPrivacidad=false;
    this.CondicionesUso=true;
  }

  mostrarAvisoPrivacidad(){
    this.AvisoPrivacidad=true;
    this.CondicionesUso=false;
  }

  

}
