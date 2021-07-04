import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders } from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

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
import { NavSubheaderComponent } from './components/nav-subheader/nav-subheader.component';
import { AddServicioComponent } from './components/add-servicio/add-servicio.component';
import { TblServicioComponent } from './components/tbl-servicio/tbl-servicio.component';
import { ConfigLineaNegocioComponent } from './components/config-linea-negocio/config-linea-negocio.component';
import { AddConfigLineaNegocioComponent } from './components/add-config-linea-negocio/add-config-linea-negocio.component';
import { TblConfigLineaNegocioComponent } from './components/tbl-config-linea-negocio/tbl-config-linea-negocio.component';
import { AddConfigMycomponyComponent } from './components/add-config-mycompony/add-config-mycompony.component';
import { TblConfigMycomponyComponent } from './components/tbl-config-mycompony/tbl-config-mycompony.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
