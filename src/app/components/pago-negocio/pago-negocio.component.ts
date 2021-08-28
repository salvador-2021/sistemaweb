import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { PagoService } from '../../services/pagos/pago_negocio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import Swal from 'sweetalert2';
import {EmpresaService} from '../../services/mycompany/empresa.service'
import { Router } from '@angular/router';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

import { NgxUiLoaderService } from "ngx-ui-loader"; // IMPORTACION DE EFECTO DE CARGA, COLOCARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-pago-negocio',
  templateUrl: './pago-negocio.component.html',
  styleUrls: ['./pago-negocio.component.css'],
  providers: [PagoService, EmpresaService]
})
export class PagoNegocioComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  montoMensual: number = 0;
  errorStripe:string = null;
  guardandoPago: boolean = false;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  formGroupValidated: FormGroup;

  constructor(private fb: FormBuilder, 
    private stripeService: StripeService, 
    private pagoService: PagoService , 
    private _empresaService: EmpresaService, 
    private _router: Router,
    private ngxLoaderService: NgxUiLoaderService) { } //EFECTO DE CARGA AQUI

  ngOnInit(): void {
    this.formGroupValidated = this.fb.group({
      name: ['', [Validators.required]],
      monto: [this.montoMensual, [Validators.required]],
      description: ['', [Validators.required]]
    });

    this.formGroupValidated.get('monto').disable();

    this._empresaService.getDataNegocio().subscribe(
      response=>{
        console.log(response);
        if(response.status =="success"){
          this.montoMensual = response.message.monto_mensual;
          this.formGroupValidated.setValue(
            {  
              name: "",
              monto:this.montoMensual,
              description:""
            }
          );
        }
      },
      error=>{

      }
    );

  }

  createToken(): void {
    const nombreCliente = this.formGroupValidated.get('name').value;
    const monto = this.formGroupValidated.get('monto').value;
    const description = this.formGroupValidated.get('description').value;

    this.stripeService
      .createToken(this.card.element, {name:nombreCliente})
      .subscribe((result) => {
        if (result.token) {

          this.enviarTokenStripe( result.token.id, monto , description , nombreCliente);
          
        } else if (result.error) {
          this.errorStripe = result.error.message
        }
      });
  }

  enviarTokenStripe(tokenGenerado, monto , description , nombreCliente) {
    this.guardandoPago = true;
    this.formGroupValidated.disable();

    this.ngxLoaderService.start(); // INICIA EL EFECTO DE CARGA
    
    this.pagoService.guardarPago(tokenGenerado, monto, description , nombreCliente).subscribe(
      
      response=>{
        
        if(response.status=="success"){

          this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

          Swal.fire("Pago realizado",
          "El pago se realizo correctamente tus productos son visibles para tus clientes",
          "success").then((values) =>{
            this._router.navigate(['/negocio']);
          });
        }
      },
      error=>{
        this.ngxLoaderService.stop(); // FINALIZA EL EFECTO DE CARGA

      }
    );
  }
}