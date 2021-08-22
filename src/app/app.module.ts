import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

//IMPORTACIONES DE GUARD
import {VerificarTokenService} from './services/validarToken/tokenNegocio.service';
import {GuardNegocioGuard} from './components/guardias/guard-negocio.guard';
// Import the module from the SDK
// LIRERIA PARA PAGO EN LINEA CON STRIPE
import { NgxStripeModule } from 'ngx-stripe';


//import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
//import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
//import { GoogleLoginProvider } from "angularx-social-login";


//IMPORTACION PARA IMPLEMENTAR MENU DESPLEGABLE
import { MatMenuModule } from '@angular/material/menu';
//IMPOSTACIONES PARA IMPLEMENTAR LA TABLA
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator'; //PAGINADOR
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon"; // <----- Here
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
//AUTOCOMPLETADO
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { PaginatePipe } from './pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './pipes/paginator';

/*MOSTRAR IMAGEN */
/*CUSTOM HAMMER CONFIGURATION */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}

import { NgxGalleryModule } from 'ngx-gallery-9';
//Recortar imagen
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogModule } from '@angular/material/dialog';
//carucer productos similares
import { IvyCarouselModule } from 'angular-responsive-carousel';

//MODULO PARA INICIAR SESION CON GOOGLE Y FACEBOOK

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LateralAdminNegocioComponent } from './components/lateral-admin-negocio/lateral-admin-negocio.component';
import { AddAbarroteComponent } from './components/agregar-producto/add-abarrote/add-abarrote.component';
import { AddAccesorioCelComponent } from './components/agregar-producto/add-accesorio-cel/add-accesorio-cel.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DatosEmpresaComponent } from './components/datos-empresa/datos-empresa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AddZapateriaComponent } from './components/agregar-producto/add-zapateria/add-zapateria.component';
import { AddRopaComponent } from './components/agregar-producto/add-ropa/add-ropa.component';
import { AddFruteriaComponent } from './components/agregar-producto/add-fruteria/add-fruteria.component';
import { AddFarmaciaComponent } from './components/agregar-producto/add-farmacia/add-farmacia.component';
import { AddFerreteriaComponent } from './components/agregar-producto/add-ferreteria/add-ferreteria.component';
import { AddOpticaComponent } from './components/agregar-producto/add-optica/add-optica.component';
import { AddRelojeriaComponent } from './components/agregar-producto/add-relojeria/add-relojeria.component';
import { AddJoyeriaComponent } from './components/agregar-producto/add-joyeria/add-joyeria.component';
import { AddConstruccionComponent } from './components/agregar-producto/add-construccion/add-construccion.component';
import { AddMuebleriaComponent } from './components/agregar-producto/add-muebleria/add-muebleria.component';
import { AddAlimentosComponent } from './components/agregar-producto/add-alimentos/add-alimentos.component';
import { AddPlomeriaComponent } from './components/agregar-producto/add-plomeria/add-plomeria.component';
import { AddCerrajeriaComponent } from './components/agregar-producto/add-cerrajeria/add-cerrajeria.component';
import { AddCarniceriaComponent } from './components/agregar-producto/add-carniceria/add-carniceria.component';
import { AddTelaComponent } from './components/agregar-producto/add-tela/add-tela.component';
import { AddPapeleriaComponent } from './components/agregar-producto/add-papeleria/add-papeleria.component';
import { AddFotografiaComponent } from './components/agregar-producto/add-fotografia/add-fotografia.component';
import { AddCelularComponent } from './components/agregar-producto/add-celular/add-celular.component';
import { AddCamaComponent } from './components/agregar-producto/add-cama/add-cama.component';
import { AddBicicletaComponent } from './components/agregar-producto/add-bicicleta/add-bicicleta.component';
import { AddComputadoraComponent } from './components/agregar-producto/add-computadora/add-computadora.component';
import { AddMotoComponent } from './components/agregar-producto/add-moto/add-moto.component';
import { AddHerreriaComponent } from './components/agregar-producto/add-herreria/add-herreria.component';
import { AddCarpinteriaComponent } from './components/agregar-producto/add-carpinteria/add-carpinteria.component';
import { AddPinturaComponent } from './components/agregar-producto/add-pintura/add-pintura.component';
import { AddHivernaderoComponent } from './components/agregar-producto/add-hivernadero/add-hivernadero.component';
import { AddFierroComponent } from './components/agregar-producto/add-fierro/add-fierro.component';
import { AddVeladoraComponent } from './components/agregar-producto/add-veladora/add-veladora.component';
import { AddBodegaComponent } from './components/agregar-producto/add-bodega/add-bodega.component';
import { AddFunerariaComponent } from './components/agregar-producto/add-funeraria/add-funeraria.component';
import { AddFloreriaComponent } from './components/agregar-producto/add-floreria/add-floreria.component';

import { AddMicroondaComponent } from './components/agregar-producto/electrodomesticos/add-microonda/add-microonda.component';
import { AddLicuadoraComponent } from './components/agregar-producto/electrodomesticos/add-licuadora/add-licuadora.component';
import { AddPlanchaComponent } from './components/agregar-producto/electrodomesticos/add-plancha/add-plancha.component';
import { AddTelevisionComponent } from './components/agregar-producto/electrodomesticos/add-television/add-television.component';
import { AddRefrigeradorComponent } from './components/agregar-producto/electrodomesticos/add-refrigerador/add-refrigerador.component';
import { AddVentiladorComponent } from './components/agregar-producto/electrodomesticos/add-ventilador/add-ventilador.component';

import { LoginNegocioComponent } from './components/login-negocio/login-negocio.component';
import { TblUsuarioComponent } from './components/tbl-usuario/tbl-usuario.component';
import { TblEmpresaComponent } from './components/tbl-empresa/tbl-empresa.component';

import { TblAbarroteComponent } from './components/lista-producto/tbl-abarrote/tbl-abarrote.component';
import { TblAccesorioCelComponent } from './components/lista-producto/tbl-accesorio-cel/tbl-accesorio-cel.component';
import { TblAlimentoComponent } from './components/lista-producto/tbl-alimento/tbl-alimento.component';
import { TblBicicletaComponent } from './components/lista-producto/tbl-bicicleta/tbl-bicicleta.component';
import { TblBodegaComponent } from './components/lista-producto/tbl-bodega/tbl-bodega.component';
import { TblCamaComponent } from './components/lista-producto/tbl-cama/tbl-cama.component';
import { TblCarniceriaComponent } from './components/lista-producto/tbl-carniceria/tbl-carniceria.component';
import { TblCarpinteriaComponent } from './components/lista-producto/tbl-carpinteria/tbl-carpinteria.component';
import { TblCelularComponent } from './components/lista-producto/tbl-celular/tbl-celular.component';
import { TblCerrajeriaComponent } from './components/lista-producto/tbl-cerrajeria/tbl-cerrajeria.component';
import { TblConstruccionComponent } from './components/lista-producto/tbl-construccion/tbl-construccion.component';
import { TblFarmaciaComponent } from './components/lista-producto/tbl-farmacia/tbl-farmacia.component';
import { TblFerreteriaComponent } from './components/lista-producto/tbl-ferreteria/tbl-ferreteria.component';
import { TblFierroComponent } from './components/lista-producto/tbl-fierro/tbl-fierro.component';
import { TblFloreriaComponent } from './components/lista-producto/tbl-floreria/tbl-floreria.component';
import { TblFotografiaComponent } from './components/lista-producto/tbl-fotografia/tbl-fotografia.component';
import { TblFruteriaComponent } from './components/lista-producto/tbl-fruteria/tbl-fruteria.component';
import { TblFunerariaComponent } from './components/lista-producto/tbl-funeraria/tbl-funeraria.component';
import { TblHerreriaComponent } from './components/lista-producto/tbl-herreria/tbl-herreria.component';
import { TblHivernaderoComponent } from './components/lista-producto/tbl-hivernadero/tbl-hivernadero.component';
import { TblJoyeriaComponent } from './components/lista-producto/tbl-joyeria/tbl-joyeria.component';
import { TblMotoComponent } from './components/lista-producto/tbl-moto/tbl-moto.component';
import { TblMuebleriaComponent } from './components/lista-producto/tbl-muebleria/tbl-muebleria.component';
import { TblOpticaComponent } from './components/lista-producto/tbl-optica/tbl-optica.component';
import { TblPapeleriaComponent } from './components/lista-producto/tbl-papeleria/tbl-papeleria.component';
import { TblPinturaComponent } from './components/lista-producto/tbl-pintura/tbl-pintura.component';
import { TblPlomeriaComponent } from './components/lista-producto/tbl-plomeria/tbl-plomeria.component';
import { TblRelojeriaComponent } from './components/lista-producto/tbl-relojeria/tbl-relojeria.component';
import { TblRopaComponent } from './components/lista-producto/tbl-ropa/tbl-ropa.component';
import { TblTelaComponent } from './components/lista-producto/tbl-tela/tbl-tela.component';
import { TblVeladoraComponent } from './components/lista-producto/tbl-veladora/tbl-veladora.component';
import { TblZapateriaComponent } from './components/lista-producto/tbl-zapateria/tbl-zapateria.component';

import { TblLicuadoraComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-licuadora/tbl-licuadora.component';
import { TblMicroondaComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-microonda/tbl-microonda.component';
import { TblPlanchaComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-plancha/tbl-plancha.component';
import { TblRefrigeradorComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-refrigerador/tbl-refrigerador.component';
import { TblTelevisionComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-television/tbl-television.component';
import { TblVentiladorComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-ventilador/tbl-ventilador.component';
import { TblComputadoraComponent } from './components/lista-producto/tbl-computadora/tbl-computadora.component';
import { TblServicioComponent } from './components/lista-producto/tbl-servicio/tbl-servicio.component';

import { NavSubheaderComponent } from './components/nav-subheader/nav-subheader.component';
import { AddServicioComponent } from './components/agregar-producto/add-servicio/add-servicio.component';
import { ConfigLineaNegocioComponent } from './components/config-linea-negocio/config-linea-negocio.component';
import { AddConfigLineaNegocioComponent } from './components/add-config-linea-negocio/add-config-linea-negocio.component';
import { TblConfigLineaNegocioComponent } from './components/tbl-config-linea-negocio/tbl-config-linea-negocio.component';
import { AddConfigMycomponyComponent } from './components/add-config-mycompony/add-config-mycompony.component';
import { TblConfigMycomponyComponent } from './components/tbl-config-mycompony/tbl-config-mycompony.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaDetailsProductoComponent } from './components/busqueda-details-producto/busqueda-details-producto.component';
import { BusquedaDepartamentosComponent } from './components/busqueda-departamentos/busqueda-departamentos.component';
import { BusquedaPrincipalProductoComponent } from './components/busqueda-principal-producto/busqueda-principal-producto.component';
import { TiendaRopaArticleComponent } from './components/busquedad-principal-article/tienda-ropa-article.component';
import { FRopaComponent } from './components/filtros-busqueda/f-ropa/f-ropa.component';
/*SECCION DE FILTROS DE BUSQUEDA DEL PRODUCTO */
import { FCalzadoComponent } from './components/filtros-busqueda/f-calzado/f-calzado.component';
import { FComputadoraComponent } from './components/filtros-busqueda/f-computadora/f-computadora.component';
import { FServicioComponent } from './components/filtros-busqueda/f-servicio/f-servicio.component';
import { FAbarroteComponent } from './components/filtros-busqueda/f-abarrote/f-abarrote.component';
/*SECCION DE DETALLES DEL PRODUCTO */
import { DetalleAbarroteComponent } from './components/seccion-detalle-producto/detalle-abarrote/detalle-abarrote.component';
import { DetalleAlimentoComponent } from './components/seccion-detalle-producto/detalle-alimento/detalle-alimento.component';
import { DetalleAccesorioMovilComponent } from './components/seccion-detalle-producto/detalle-accesorio-movil/detalle-accesorio-movil.component';
import { DetalleBicicletaComponent } from './components/seccion-detalle-producto/detalle-bicicleta/detalle-bicicleta.component';
import { DetalleBodegaComponent } from './components/seccion-detalle-producto/detalle-bodega/detalle-bodega.component';
import { DetalleComputadoraComponent } from './components/seccion-detalle-producto/detalle-computadora/detalle-computadora.component';
import { DetalleCelularesComponent } from './components/seccion-detalle-producto/detalle-celulares/detalle-celulares.component';
import { DetalleCerrajeriaComponent } from './components/seccion-detalle-producto/detalle-cerrajeria/detalle-cerrajeria.component';
import { DetalleCamaComponent } from './components/seccion-detalle-producto/detalle-cama/detalle-cama.component';
import { DetalleCarpinteriaComponent } from './components/seccion-detalle-producto/detalle-carpinteria/detalle-carpinteria.component';
import { DetalleCarniceriaComponent } from './components/seccion-detalle-producto/detalle-carniceria/detalle-carniceria.component';
import { DetalleConstruccionComponent } from './components/seccion-detalle-producto/detalle-construccion/detalle-construccion.component';
import { DetalleDentistaComponent } from './components/seccion-detalle-producto/detalle-dentista/detalle-dentista.component';
import { DetalleFruteriaComponent } from './components/seccion-detalle-producto/detalle-fruteria/detalle-fruteria.component';
import { DetalleFarmaciaComponent } from './components/seccion-detalle-producto/detalle-farmacia/detalle-farmacia.component';
import { DetalleFotosComponent } from './components/seccion-detalle-producto/detalle-fotos/detalle-fotos.component';
import { DetalleFerreteriaComponent } from './components/seccion-detalle-producto/detalle-ferreteria/detalle-ferreteria.component';
import { DetalleFierroComponent } from './components/seccion-detalle-producto/detalle-fierro/detalle-fierro.component';
import { DetalleFloreriaComponent } from './components/seccion-detalle-producto/detalle-floreria/detalle-floreria.component';
import { DetalleFunerariaComponent } from './components/seccion-detalle-producto/detalle-funeraria/detalle-funeraria.component';
import { DetalleHerreriaComponent } from './components/seccion-detalle-producto/detalle-herreria/detalle-herreria.component';
import { DetalleHivernaderoComponent } from './components/seccion-detalle-producto/detalle-hivernadero/detalle-hivernadero.component';
import { DetalleJoyeriaComponent } from './components/seccion-detalle-producto/detalle-joyeria/detalle-joyeria.component';
import { DetalleLicuadoraComponent } from './components/seccion-detalle-producto/detalle-licuadora/detalle-licuadora.component';
import { DetalleMuebleriaComponent } from './components/seccion-detalle-producto/detalle-muebleria/detalle-muebleria.component';
import { DetalleMicroondaComponent } from './components/seccion-detalle-producto/detalle-microonda/detalle-microonda.component';
import { DetalleMotoComponent } from './components/seccion-detalle-producto/detalle-moto/detalle-moto.component';
import { DetalleOpticaComponent } from './components/seccion-detalle-producto/detalle-optica/detalle-optica.component';
import { DetallePlomeriaComponent } from './components/seccion-detalle-producto/detalle-plomeria/detalle-plomeria.component';
import { DetallePapeleriaComponent } from './components/seccion-detalle-producto/detalle-papeleria/detalle-papeleria.component';
import { DetallePinturaComponent } from './components/seccion-detalle-producto/detalle-pintura/detalle-pintura.component';
import { DetallePlanchaComponent } from './components/seccion-detalle-producto/detalle-plancha/detalle-plancha.component';
import { DetalleRelojeriaComponent } from './components/seccion-detalle-producto/detalle-relojeria/detalle-relojeria.component';
import { DetalleRopasComponent } from './components/seccion-detalle-producto/detalle-ropas/detalle-ropas.component';
import { DetalleRefrigeradorComponent } from './components/seccion-detalle-producto/detalle-refrigerador/detalle-refrigerador.component';
import { DetalleServiciosComponent } from './components/seccion-detalle-producto/detalle-servicios/detalle-servicios.component';
import { DetalleTelaComponent } from './components/seccion-detalle-producto/detalle-tela/detalle-tela.component';
import { DetalleTelevisionComponent } from './components/seccion-detalle-producto/detalle-television/detalle-television.component';
import { DetalleVeladoraComponent } from './components/seccion-detalle-producto/detalle-veladora/detalle-veladora.component';
import { DetalleZapatosComponent } from './components/seccion-detalle-producto/detalle-zapatos/detalle-zapatos.component';
import { ComentarioProductoComponent } from './components/comentario-producto/comentario-producto.component';
import { DialogForComentarioProductComponent } from './components/dialog-for-comentario-product/dialog-for-comentario-product.component';
import { ProductoSimilarComponent } from './components/producto-similar/producto-similar.component';
import { PerfilNegocioComponent } from './components/perfil-negocio/perfil-negocio.component';
import { HomeComponent } from './components/home/home.component';
import { AdminNegocioComponent } from './components/admin-negocio/admin-negocio.component';
import { RegistrarNegocioComponent } from './components/registrar-negocio/registrar-negocio.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { BuscarNegocioComponent } from './components/filtros-busqueda/buscar-negocio/buscar-negocio.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LateralAdministradorComponent } from './components/lateral-administrador/lateral-administrador.component';
import { DatosAdministradorComponent } from './components/datos-administrador/datos-administrador.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { PagoNegocioComponent } from './components/pago-negocio/pago-negocio.component';

//EFECTOD DE CARGA
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#F5B041",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#F5B041",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#F5B041",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};


@NgModule({
  declarations: [
    
    AppComponent,
    PaginatePipe,
    FooterComponent,
    HeaderComponent,
    LateralAdminNegocioComponent,
    AddAbarroteComponent,
    AddAccesorioCelComponent,
    NotFoundPageComponent,
    DatosEmpresaComponent,
    PerfilComponent,
    AddZapateriaComponent,
    AddRopaComponent,
    AddFruteriaComponent,
    AddFarmaciaComponent,
    AddFerreteriaComponent,
    AddOpticaComponent,
    AddRelojeriaComponent,
    AddJoyeriaComponent,
    AddConstruccionComponent,
    AddMuebleriaComponent,
    AddAlimentosComponent,
    AddPlomeriaComponent,
    AddCerrajeriaComponent,
    AddCarniceriaComponent,
    AddTelaComponent,
    AddPapeleriaComponent,
    AddFotografiaComponent,
    AddCelularComponent,
    AddCamaComponent,
    AddBicicletaComponent,
    AddComputadoraComponent,
    AddMotoComponent,
    AddHerreriaComponent,
    AddCarpinteriaComponent,
    AddPinturaComponent,
    AddHivernaderoComponent,
    AddFierroComponent,
    AddVeladoraComponent,
    AddBodegaComponent,
    AddFunerariaComponent,
    AddFloreriaComponent,
    AddMicroondaComponent,
    AddLicuadoraComponent,
    AddPlanchaComponent,
    AddTelevisionComponent,
    AddRefrigeradorComponent,
    AddVentiladorComponent,
    LoginNegocioComponent,
    TblAbarroteComponent,
    TblAccesorioCelComponent,
    TblAlimentoComponent,
    TblBicicletaComponent,
    TblBodegaComponent,
    TblCamaComponent,
    TblCarniceriaComponent,
    TblCarpinteriaComponent,
    TblCelularComponent,
    TblCerrajeriaComponent,
    TblConstruccionComponent,
    TblFarmaciaComponent,
    TblFerreteriaComponent,
    TblFierroComponent,
    TblFloreriaComponent,
    TblFotografiaComponent,
    TblFruteriaComponent,
    TblFunerariaComponent,
    TblHerreriaComponent,
    TblHivernaderoComponent,
    TblJoyeriaComponent,
    TblMotoComponent,
    TblMuebleriaComponent,
    TblOpticaComponent,
    TblPapeleriaComponent,
    TblPinturaComponent,
    TblPlomeriaComponent,
    TblRelojeriaComponent,
    TblRopaComponent,
    TblTelaComponent,
    TblVeladoraComponent,
    TblZapateriaComponent,
    TblUsuarioComponent,
    TblEmpresaComponent,
    TblLicuadoraComponent,
    TblMicroondaComponent,
    TblPlanchaComponent,
    TblRefrigeradorComponent,
    TblTelevisionComponent,
    TblVentiladorComponent,
    TblComputadoraComponent,
    NavSubheaderComponent,
    AddServicioComponent,
    TblServicioComponent,
    ConfigLineaNegocioComponent,
    AddConfigLineaNegocioComponent,
    TblConfigLineaNegocioComponent,
    AddConfigMycomponyComponent,
    TblConfigMycomponyComponent,
    BusquedaDetailsProductoComponent,
    BusquedaDepartamentosComponent,
    BusquedaPrincipalProductoComponent,
    TiendaRopaArticleComponent,
    FRopaComponent,
    FCalzadoComponent,
    FComputadoraComponent,
    FServicioComponent,
    FAbarroteComponent,
    DetalleAbarroteComponent,
    DetalleAlimentoComponent,
    DetalleAccesorioMovilComponent,
    DetalleBicicletaComponent,
    DetalleBodegaComponent,
    DetalleComputadoraComponent,
    DetalleCelularesComponent,
    DetalleCerrajeriaComponent,
    DetalleCamaComponent,
    DetalleCarpinteriaComponent,
    DetalleCarniceriaComponent,
    DetalleConstruccionComponent,
    DetalleDentistaComponent,
    DetalleFruteriaComponent,
    DetalleFarmaciaComponent,
    DetalleFotosComponent,
    DetalleFerreteriaComponent,
    DetalleFierroComponent,
    DetalleFloreriaComponent,
    DetalleFunerariaComponent,
    DetalleHerreriaComponent,
    DetalleHivernaderoComponent,
    DetalleJoyeriaComponent,
    DetalleLicuadoraComponent,
    DetalleMuebleriaComponent,
    DetalleMicroondaComponent,
    DetalleMotoComponent,
    DetalleOpticaComponent,
    DetallePlomeriaComponent,
    DetallePapeleriaComponent,
    DetallePinturaComponent,
    DetallePlanchaComponent,
    DetalleRelojeriaComponent,
    DetalleRopasComponent,
    DetalleRefrigeradorComponent,
    DetalleServiciosComponent,
    DetalleTelaComponent,
    DetalleTelevisionComponent,
    DetalleVeladoraComponent,
    DetalleZapatosComponent,
    ComentarioProductoComponent,
    DialogForComentarioProductComponent,
    ProductoSimilarComponent,
    PerfilNegocioComponent,
    HomeComponent,
    AdminNegocioComponent,
    RegistrarNegocioComponent,
    RegistrarUsuarioComponent,
    DatosUsuarioComponent,
    TerminosYCondicionesComponent,
    BuscarNegocioComponent,
    NegocioComponent,
    AdministradorComponent,
    LateralAdministradorComponent,
    DatosAdministradorComponent,
    HomeAdministradorComponent,  

    PagoNegocioComponent,

      
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    FormsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    NgxGalleryModule,
    ImageCropperModule,
    MatDialogModule,
    IvyCarouselModule,
    AutocompleteLibModule,
    NgxStripeModule.forRoot('pk_test_51J7MsxEt2hEwGuA9ycEe5ZcMy2itbguYOTMbRJeV4DRvI0hJv1tBPdHgaMHEFB5QvgE4ArnWnozhFECi9QHNYaum00RXfzuRhD'),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    //SocialLoginModule
  ],
  entryComponents: [DialogForComentarioProductComponent],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    appRoutingProviders,
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },

    VerificarTokenService,
    GuardNegocioGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//tu secreto del cliente : nfncOBjte7OOUxrjeY6LzyyG
/*providers: [
    appRoutingProviders,
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}

  ], */


  //import quitados
      // Import the module into the application, with configuration
    //AuthModule.forRoot({
      //domain: 'jesus-vg.us.auth0.com',
      //clientId: 'wMmxaPaVMywB79Yzingp6fs47IzI5sem'
    //}),

