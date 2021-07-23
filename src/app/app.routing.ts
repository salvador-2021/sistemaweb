// Importar los módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una página exclusiva

import { AddAbarroteComponent } from './components/add-abarrote/add-abarrote.component';
import { DatosEmpresaComponent } from './components/datos-empresa/datos-empresa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AddZapateriaComponent } from './components/add-zapateria/add-zapateria.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { AddRopaComponent } from './components/add-ropa/add-ropa.component';
import { AddFarmaciaComponent } from './components/add-farmacia/add-farmacia.component';
import { AddFruteriaComponent } from './components/add-fruteria/add-fruteria.component';
import { AddAlimentosComponent } from './components/add-alimentos/add-alimentos.component';
import { AddConstruccionComponent } from './components/add-construccion/add-construccion.component';
import { AddOpticaComponent } from './components/add-optica/add-optica.component';
import { AddFerreteriaComponent } from './components/add-ferreteria/add-ferreteria.component';
import { AddJoyeriaComponent } from './components/add-joyeria/add-joyeria.component';
import { AddMuebleriaComponent } from './components/add-muebleria/add-muebleria.component';
import { AddRelojeriaComponent } from './components/add-relojeria/add-relojeria.component';
import { AddCarniceriaComponent } from './components/add-carniceria/add-carniceria.component';
import { AddCerrajeriaComponent } from './components/add-cerrajeria/add-cerrajeria.component';
import { AddPlomeriaComponent } from './components/add-plomeria/add-plomeria.component';
import { AddTelaComponent } from './components/add-tela/add-tela.component';
import { AddPapeleriaComponent } from './components/add-papeleria/add-papeleria.component';
import { AddFotografiaComponent } from './components/add-fotografia/add-fotografia.component';
import { AddCelularComponent } from './components/add-celular/add-celular.component';
import { AddCamaComponent } from './components/add-cama/add-cama.component';
import { AddBicicletaComponent } from './components/add-bicicleta/add-bicicleta.component';
import { AddAccesorioCelComponent } from './components/add-accesorio-cel/add-accesorio-cel.component';
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
import { AddServicioComponent } from './components/add-servicio/add-servicio.component';

import { AddMicroondaComponent } from './components/electrodomesticos/add-microonda/add-microonda.component';
import { AddLicuadoraComponent } from './components/electrodomesticos/add-licuadora/add-licuadora.component';
import { AddPlanchaComponent } from './components/electrodomesticos/add-plancha/add-plancha.component';
import { AddTelevisionComponent } from './components/electrodomesticos/add-television/add-television.component';
import { AddRefrigeradorComponent } from './components/electrodomesticos/add-refrigerador/add-refrigerador.component';

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
import { TblComputadoraComponent } from './components/tbl-computadora/tbl-computadora.component';
import { TblFarmaciaComponent } from './components/tbl-farmacia/tbl-farmacia.component';
import { TblFerreteriaComponent } from './components/tbl-ferreteria/tbl-ferreteria.component';
import { TblFierroComponent } from './components/tbl-fierro/tbl-fierro.component';

import { TblEmpresaComponent } from './components/tbl-empresa/tbl-empresa.component';
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
import { TblUsuarioComponent } from './components/tbl-usuario/tbl-usuario.component';
import { TblVeladoraComponent } from './components/tbl-veladora/tbl-veladora.component';
import { TblZapateriaComponent } from './components/tbl-zapateria/tbl-zapateria.component';
import { TblServicioComponent } from './components/tbl-servicio/tbl-servicio.component';
import { TblLicuadoraComponent } from './components/tbl_electrodomesticos/tbl-licuadora/tbl-licuadora.component';
import { TblMicroondaComponent } from './components/tbl_electrodomesticos/tbl-microonda/tbl-microonda.component';
import { TblPlanchaComponent } from './components/tbl_electrodomesticos/tbl-plancha/tbl-plancha.component';
import { TblRefrigeradorComponent } from './components/tbl_electrodomesticos/tbl-refrigerador/tbl-refrigerador.component';
import { TblTelevisionComponent } from './components/tbl_electrodomesticos/tbl-television/tbl-television.component';
import { TblVentiladorComponent } from './components/tbl_electrodomesticos/tbl-ventilador/tbl-ventilador.component';
import { TblConfigLineaNegocioComponent } from './components/tbl-config-linea-negocio/tbl-config-linea-negocio.component';

import { LoginNegocioComponent } from './components/login-negocio/login-negocio.component';
import { NavSubheaderComponent } from './components/nav-subheader/nav-subheader.component';
import { ConfigLineaNegocioComponent } from './components/config-linea-negocio/config-linea-negocio.component';
import { AddConfigLineaNegocioComponent } from './components/add-config-linea-negocio/add-config-linea-negocio.component';
import { TablaPruebaComponent } from './components/tabla-prueba/tabla-prueba.component';
import { BusquedaDepartamentosComponent } from './components/busqueda-departamentos/busqueda-departamentos.component';
import { BusquedaPrincipalProductoComponent } from './components/busqueda-principal-producto/busqueda-principal-producto.component';
import { BusquedaDetailsProductoComponent } from './components/busqueda-details-producto/busqueda-details-producto.component';
import { PerfilNegocioComponent } from './components/perfil-negocio/perfil-negocio.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//componente de prueba

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: AddAbarroteComponent },
  { path: 'nav-subheader', component: NavSubheaderComponent },
  { path: 'tbl-abarrote', component: TblAbarroteComponent },
  { path: 'tbl-accesorio-cel', component: TblAccesorioCelComponent },
  { path: 'tbl-alimento', component: TblAlimentoComponent },
  { path: 'tbl-bicicleta', component: TblBicicletaComponent },
  { path: 'tbl-bodega', component: TblBodegaComponent },
  { path: 'tbl-cama', component: TblCamaComponent },
  { path: 'tbl-carniceria', component: TblCarniceriaComponent },
  { path: 'tbl-carpinteria', component: TblCarpinteriaComponent },
  { path: 'tbl-celular', component: TblCelularComponent },
  { path: 'tbl-cerrajeria', component: TblCerrajeriaComponent },
  { path: 'tbl-computadora', component: TblComputadoraComponent },
  { path: 'tbl-construccion', component: TblConstruccionComponent },
  { path: 'tbl-farmacia', component: TblFarmaciaComponent },
  { path: 'tbl-ferreteria', component: TblFerreteriaComponent },
  { path: 'tbl-acero', component: TblFierroComponent },
  { path: 'tbl-empresa', component: TblEmpresaComponent },
  { path: 'tbl-floreria', component: TblFloreriaComponent },
  { path: 'tbl-fotografia', component: TblFotografiaComponent },
  { path: 'tbl-fruteria', component: TblFruteriaComponent },
  { path: 'tbl-funeraria', component: TblFunerariaComponent },
  { path: 'tbl-herreria', component: TblHerreriaComponent },
  { path: 'tbl-hivernadero', component: TblHivernaderoComponent },
  { path: 'tbl-joyeria', component: TblJoyeriaComponent },
  { path: 'tbl-moto', component: TblMotoComponent },
  { path: 'tbl-muebleria', component: TblMuebleriaComponent },
  { path: 'tbl-optica', component: TblOpticaComponent },
  { path: 'tbl-papeleria', component: TblPapeleriaComponent },
  { path: 'tbl-pintura', component: TblPinturaComponent },
  { path: 'tbl-plomeria', component: TblPlomeriaComponent },
  { path: 'tbl-relojeria', component: TblRelojeriaComponent },
  { path: 'tbl-ropa', component: TblRopaComponent },
  { path: 'tbl-tela', component: TblTelaComponent },
  { path: 'tbl-usuario', component: TblUsuarioComponent },
  { path: 'tbl-veladora', component: TblVeladoraComponent },
  { path: 'tbl-calzado', component: TblZapateriaComponent },
  { path: 'tbl-servicio', component: TblServicioComponent },

  { path: 'tbl-licuadora', component: TblLicuadoraComponent },
  { path: 'tbl-microonda', component: TblMicroondaComponent },
  { path: 'tbl-plancha', component: TblPlanchaComponent },
  { path: 'tbl-refrigerador', component: TblRefrigeradorComponent },
  { path: 'tbl-television', component: TblTelevisionComponent },
  { path: 'tbl-ventilador', component: TblVentiladorComponent },
  { path: 'tbl-config-linea-negocio', component: TblConfigLineaNegocioComponent },

  { path: 'add-abarrote', component: AddAbarroteComponent },
  { path: 'add-abarrote/:_id', component: AddAbarroteComponent },
  { path: 'add-servicio', component: AddServicioComponent },
  { path: 'add-servicio/:_id', component: AddServicioComponent },
  { path: 'datos-empresa', component: DatosEmpresaComponent },
  { path: 'datos-empresa/:_id', component: DatosEmpresaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'add-calzado', component: AddZapateriaComponent },
  { path: 'add-calzado/:_id', component: AddZapateriaComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'add-ropa', component: AddRopaComponent },
  { path: 'add-ropa/:_id', component: AddRopaComponent },
  { path: 'add-farmacia', component: AddFarmaciaComponent },
  { path: 'add-farmacia/:_id', component: AddFarmaciaComponent },
  { path: 'add-fruteria', component: AddFruteriaComponent },
  { path: 'add-fruteria/:_id', component: AddFruteriaComponent },
  { path: 'add-alimentos', component: AddAlimentosComponent },
  { path: 'add-alimentos/:_id', component: AddAlimentosComponent },
  { path: 'add-construccion', component: AddConstruccionComponent },
  { path: 'add-construccion/:_id', component: AddConstruccionComponent },
  { path: 'add-optica', component: AddOpticaComponent },
  { path: 'add-optica/:_id', component: AddOpticaComponent },
  { path: 'add-ferreteria', component: AddFerreteriaComponent },
  { path: 'add-ferreteria/:_id', component: AddFerreteriaComponent },
  { path: 'add-joyeria', component: AddJoyeriaComponent },
  { path: 'add-joyeria/:_id', component: AddJoyeriaComponent },
  { path: 'add-muebleria', component: AddMuebleriaComponent },
  { path: 'add-muebleria/:_id', component: AddMuebleriaComponent },
  { path: 'add-relojeria', component: AddRelojeriaComponent },
  { path: 'add-relojeria/:_id', component: AddRelojeriaComponent },
  { path: 'add-carniceria', component: AddCarniceriaComponent },
  { path: 'add-carniceria/:_id', component: AddCarniceriaComponent },
  { path: 'add-cerrajeria', component: AddCerrajeriaComponent },
  { path: 'add-cerrajeria/:_id', component: AddCerrajeriaComponent },
  { path: 'add-plomeria', component: AddPlomeriaComponent },
  { path: 'add-plomeria/:_id', component: AddPlomeriaComponent },
  { path: 'add-tela', component: AddTelaComponent },
  { path: 'add-tela/:_id', component: AddTelaComponent },
  { path: 'add-papeleria', component: AddPapeleriaComponent },
  { path: 'add-papeleria/:_id', component: AddPapeleriaComponent },
  { path: 'add-fotografia', component: AddFotografiaComponent },
  { path: 'add-fotografia/:_id', component: AddFotografiaComponent },
  { path: 'add-celular', component: AddCelularComponent },
  { path: 'add-celular/:_id', component: AddCelularComponent },
  { path: 'add-cama', component: AddCamaComponent },
  { path: 'add-cama/:_id', component: AddCamaComponent },
  { path: 'add-bicicleta', component: AddBicicletaComponent },
  { path: 'add-bicicleta/:_id', component: AddBicicletaComponent },
  { path: 'add-accesorio-cel', component: AddAccesorioCelComponent },
  { path: 'add-accesorio-cel/:_id', component: AddAccesorioCelComponent },
  { path: 'add-computadora', component: AddComputadoraComponent },
  { path: 'add-computadora/:_id', component: AddComputadoraComponent },
  { path: 'add-moto', component: AddMotoComponent },
  { path: 'add-moto/:_id', component: AddMotoComponent },
  { path: 'add-herreria', component: AddHerreriaComponent },
  { path: 'add-herreria/:_id', component: AddHerreriaComponent },
  { path: 'add-carpinteria', component: AddCarpinteriaComponent },
  { path: 'add-carpinteria/:_id', component: AddCarpinteriaComponent },
  { path: 'add-pintura', component: AddPinturaComponent },
  { path: 'add-pintura/:_id', component: AddPinturaComponent },
  { path: 'add-hivernadero', component: AddHivernaderoComponent },
  { path: 'add-hivernadero/:_id', component: AddHivernaderoComponent },
  { path: 'add-acero', component: AddFierroComponent },
  { path: 'add-acero/:_id', component: AddFierroComponent },
  { path: 'add-veladora', component: AddVeladoraComponent },
  { path: 'add-veladora/:_id', component: AddVeladoraComponent },
  { path: 'add-bodega', component: AddBodegaComponent },
  { path: 'add-bodega/:_id', component: AddBodegaComponent },
  { path: 'add-funeraria', component: AddFunerariaComponent },
  { path: 'add-funeraria/:_id', component: AddFunerariaComponent },
  { path: 'add-floreria', component: AddFloreriaComponent },
  { path: 'add-floreria/:_id', component: AddFloreriaComponent },

  { path: 'add-microonda', component: AddMicroondaComponent },
  { path: 'add-microonda/:_id', component: AddMicroondaComponent },
  { path: 'add-licuadora', component: AddLicuadoraComponent },
  { path: 'add-licuadora/:_id', component: AddLicuadoraComponent },
  { path: 'add-plancha', component: AddPlanchaComponent },
  { path: 'add-plancha/:_id', component: AddPlanchaComponent },
  { path: 'add-television', component: AddTelevisionComponent },
  { path: 'add-television/:_id', component: AddTelevisionComponent },
  { path: 'add-refrigerador', component: AddRefrigeradorComponent },
  { path: 'add-refrigerador/:_id', component: AddRefrigeradorComponent },
  { path: 'login-negocio', component: LoginNegocioComponent },
  // vista para que el usuario pueda seleccionar que tipo de negocio tiene
  { path: 'config-linea-negocio', component: ConfigLineaNegocioComponent },
  // Vista donde el administrador podra guardar imagen de todos los tipo de negocio que ofrece la plataforma
  { path: 'add-config-linea-negocio', component: AddConfigLineaNegocioComponent },
  { path: 'add-config-linea-negocio/:_id', component: AddConfigLineaNegocioComponent },
  { path: 'tabla-prueba', component: TablaPruebaComponent },
  { path: 'perfil-negocio', component: PerfilNegocioComponent },
  //componente donde se podra buscar todos lo productos que ofrece un negocio en especifico
  { path: 'busqueda-principal-negocio', component: BusquedaDepartamentosComponent },
  //componente donde se podra buscar cualquier producto de cualquier negocio
  { path: 'busqueda-principal-producto', component: BusquedaPrincipalProductoComponent },
  { path: 'busqueda-principal-producto/:nombreProductoBuscar', component: BusquedaPrincipalProductoComponent },
  { path: 'busqueda-detalle-producto/:_idnegocio/:_idproducto/:nameTable', component: BusquedaDetailsProductoComponent },
  { path: 'error-pagina', component: NotFoundPageComponent }
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
// export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
// export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );

