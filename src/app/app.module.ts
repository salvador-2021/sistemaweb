import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

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
import {MatDialogModule} from '@angular/material/dialog';
//carucer productos similares
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LateralAdminComponent } from './components/lateral-admin/lateral-admin.component';
import { AddAbarroteComponent } from './components/add-abarrote/add-abarrote.component';
import { AddAccesorioCelComponent } from './components/add-accesorio-cel/add-accesorio-cel.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DatosEmpresaComponent } from './components/datos-empresa/datos-empresa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AddZapateriaComponent } from './components/add-zapateria/add-zapateria.component';
import { AddRopaComponent } from './components/add-ropa/add-ropa.component';
import { AddFruteriaComponent } from './components/add-fruteria/add-fruteria.component';
import { AddFarmaciaComponent } from './components/add-farmacia/add-farmacia.component';
import { AddFerreteriaComponent } from './components/add-ferreteria/add-ferreteria.component';
import { AddOpticaComponent } from './components/add-optica/add-optica.component';
import { AddRelojeriaComponent } from './components/add-relojeria/add-relojeria.component';
import { AddJoyeriaComponent } from './components/add-joyeria/add-joyeria.component';
import { AddConstruccionComponent } from './components/add-construccion/add-construccion.component';
import { AddMuebleriaComponent } from './components/add-muebleria/add-muebleria.component';
import { AddAlimentosComponent } from './components/add-alimentos/add-alimentos.component';
import { AddPlomeriaComponent } from './components/add-plomeria/add-plomeria.component';
import { AddCerrajeriaComponent } from './components/add-cerrajeria/add-cerrajeria.component';
import { AddCarniceriaComponent } from './components/add-carniceria/add-carniceria.component';
import { AddTelaComponent } from './components/add-tela/add-tela.component';
import { AddPapeleriaComponent } from './components/add-papeleria/add-papeleria.component';
import { AddFotografiaComponent } from './components/add-fotografia/add-fotografia.component';
import { AddCelularComponent } from './components/add-celular/add-celular.component';
import { AddCamaComponent } from './components/add-cama/add-cama.component';
import { AddBicicletaComponent } from './components/add-bicicleta/add-bicicleta.component';
import { AddComputadoraComponent } from './components/add-computadora/add-computadora.component';
import { AddMotoComponent } from './components/add-moto/add-moto.component';
import { AddHerreriaComponent } from './components/add-herreria/add-herreria.component';
import { AddCarpinteriaComponent } from './components/add-carpinteria/add-carpinteria.component';
import { AddPinturaComponent } from './components/add-pintura/add-pintura.component';
import { AddHivernaderoComponent } from './components/add-hivernadero/add-hivernadero.component';
import { AddFierroComponent } from './components/add-fierro/add-fierro.component';
import { AddVeladoraComponent } from './components/add-veladora/add-veladora.component';
import { AddBodegaComponent } from './components/add-bodega/add-bodega.component';
import { AddFunerariaComponent } from './components/add-funeraria/add-funeraria.component';
import { AddFloreriaComponent } from './components/add-floreria/add-floreria.component';

import { AddMicroondaComponent } from './components/electrodomesticos/add-microonda/add-microonda.component';
import { AddLicuadoraComponent } from './components/electrodomesticos/add-licuadora/add-licuadora.component';
import { AddPlanchaComponent } from './components/electrodomesticos/add-plancha/add-plancha.component';
import { AddTelevisionComponent } from './components/electrodomesticos/add-television/add-television.component';
import { AddRefrigeradorComponent } from './components/electrodomesticos/add-refrigerador/add-refrigerador.component';
import { AddVentiladorComponent } from './components/electrodomesticos/add-ventilador/add-ventilador.component';

import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LoginNegocioComponent } from './components/login-negocio/login-negocio.component';
import { TblAbarroteComponent } from './components/tbl-abarrote/tbl-abarrote.component';
import { TblAccesorioCelComponent } from './components/tbl-accesorio-cel/tbl-accesorio-cel.component';
import { TblAlimentoComponent } from './components/tbl-alimento/tbl-alimento.component';
import { TblBicicletaComponent } from './components/tbl-bicicleta/tbl-bicicleta.component';
import { TblBodegaComponent } from './components/tbl-bodega/tbl-bodega.component';
import { TblCamaComponent } from './components/tbl-cama/tbl-cama.component';
import { TblCarniceriaComponent } from './components/tbl-carniceria/tbl-carniceria.component';
import { TblCarpinteriaComponent } from './components/tbl-carpinteria/tbl-carpinteria.component';
import { TblCelularComponent } from './components/tbl-celular/tbl-celular.component';
import { TblCerrajeriaComponent } from './components/tbl-cerrajeria/tbl-cerrajeria.component';
import { TblConstruccionComponent } from './components/tbl-construccion/tbl-construccion.component';
import { TblFarmaciaComponent } from './components/tbl-farmacia/tbl-farmacia.component';
import { TblFerreteriaComponent } from './components/tbl-ferreteria/tbl-ferreteria.component';
import { TblFierroComponent } from './components/tbl-fierro/tbl-fierro.component';

import { TblFloreriaComponent } from './components/tbl-floreria/tbl-floreria.component';
import { TblFotografiaComponent } from './components/tbl-fotografia/tbl-fotografia.component';
import { TblFruteriaComponent } from './components/tbl-fruteria/tbl-fruteria.component';
import { TblFunerariaComponent } from './components/tbl-funeraria/tbl-funeraria.component';
import { TblHerreriaComponent } from './components/tbl-herreria/tbl-herreria.component';
import { TblHivernaderoComponent } from './components/tbl-hivernadero/tbl-hivernadero.component';
import { TblJoyeriaComponent } from './components/tbl-joyeria/tbl-joyeria.component';
import { TblMotoComponent } from './components/tbl-moto/tbl-moto.component';
import { TblMuebleriaComponent } from './components/tbl-muebleria/tbl-muebleria.component';
import { TblOpticaComponent } from './components/tbl-optica/tbl-optica.component';
import { TblPapeleriaComponent } from './components/tbl-papeleria/tbl-papeleria.component';
import { TblPinturaComponent } from './components/tbl-pintura/tbl-pintura.component';
import { TblPlomeriaComponent } from './components/tbl-plomeria/tbl-plomeria.component';
import { TblRelojeriaComponent } from './components/tbl-relojeria/tbl-relojeria.component';
import { TblRopaComponent } from './components/tbl-ropa/tbl-ropa.component';
import { TblTelaComponent } from './components/tbl-tela/tbl-tela.component';
import { TblVeladoraComponent } from './components/tbl-veladora/tbl-veladora.component';
import { TblZapateriaComponent } from './components/tbl-zapateria/tbl-zapateria.component';
import { TblUsuarioComponent } from './components/tbl-usuario/tbl-usuario.component';
import { TblEmpresaComponent } from './components/tbl-empresa/tbl-empresa.component';
import { TblLicuadoraComponent } from './components/tbl_electrodomesticos/tbl-licuadora/tbl-licuadora.component';
import { TblMicroondaComponent } from './components/tbl_electrodomesticos/tbl-microonda/tbl-microonda.component';
import { TblPlanchaComponent } from './components/tbl_electrodomesticos/tbl-plancha/tbl-plancha.component';
import { TblRefrigeradorComponent } from './components/tbl_electrodomesticos/tbl-refrigerador/tbl-refrigerador.component';
import { TblTelevisionComponent } from './components/tbl_electrodomesticos/tbl-television/tbl-television.component';
import { TblVentiladorComponent } from './components/tbl_electrodomesticos/tbl-ventilador/tbl-ventilador.component';
import { TblComputadoraComponent } from './components/tbl-computadora/tbl-computadora.component';
import { TblServicioComponent } from './components/tbl-servicio/tbl-servicio.component';
import { NavSubheaderComponent } from './components/nav-subheader/nav-subheader.component';
import { AddServicioComponent } from './components/add-servicio/add-servicio.component';
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


@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,
    FooterComponent,
    HeaderComponent,
    LateralAdminComponent,
    AddAbarroteComponent,
    AddAccesorioCelComponent,
    NotFoundPageComponent,
    DatosEmpresaComponent,
    PerfilComponent,
    ServicioComponent,
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
    AddUsuarioComponent,
    LoginComponent,
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
    NgxGalleryModule ,
    ImageCropperModule,
    MatDialogModule,
    IvyCarouselModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'jesus-vg.us.auth0.com',
      clientId: 'wMmxaPaVMywB79Yzingp6fs47IzI5sem'
    }),
  ],
  entryComponents:[DialogForComentarioProductComponent],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    appRoutingProviders,
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*providers: [
    appRoutingProviders,
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}

  ], */
