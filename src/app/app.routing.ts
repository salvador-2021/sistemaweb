// Importar los módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes a los cuales les quiero hacer una página exclusiva
//COMPONENTES PAGRES
import { NegocioComponent } from './components/negocio/negocio.component';

import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { DatosEmpresaComponent } from './components/datos-empresa/datos-empresa.component';
import { RegistrarNegocioComponent } from './components/registrar-negocio/registrar-negocio.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AdminNegocioComponent } from './components/admin-negocio/admin-negocio.component';

//COMPONENTES HIJOS
import { AddAbarroteComponent } from './components/agregar-producto/add-abarrote/add-abarrote.component';
import { AddZapateriaComponent } from './components/agregar-producto/add-zapateria/add-zapateria.component';
import { AddRopaComponent } from './components/agregar-producto/add-ropa/add-ropa.component';
import { AddFarmaciaComponent } from './components/agregar-producto/add-farmacia/add-farmacia.component';
import { AddFruteriaComponent } from './components/agregar-producto/add-fruteria/add-fruteria.component';
import { AddAlimentosComponent } from './components/agregar-producto/add-alimentos/add-alimentos.component';
import { AddConstruccionComponent } from './components/agregar-producto/add-construccion/add-construccion.component';
import { AddOpticaComponent } from './components/agregar-producto/add-optica/add-optica.component';
import { AddFerreteriaComponent } from './components/agregar-producto/add-ferreteria/add-ferreteria.component';
import { AddJoyeriaComponent } from './components/agregar-producto/add-joyeria/add-joyeria.component';
import { AddMuebleriaComponent } from './components/agregar-producto/add-muebleria/add-muebleria.component';
import { AddRelojeriaComponent } from './components/agregar-producto/add-relojeria/add-relojeria.component';
import { AddCarniceriaComponent } from './components/agregar-producto/add-carniceria/add-carniceria.component';
import { AddCerrajeriaComponent } from './components/agregar-producto/add-cerrajeria/add-cerrajeria.component';
import { AddPlomeriaComponent } from './components/agregar-producto/add-plomeria/add-plomeria.component';
import { AddTelaComponent } from './components/agregar-producto/add-tela/add-tela.component';
import { AddPapeleriaComponent } from './components/agregar-producto/add-papeleria/add-papeleria.component';
import { AddFotografiaComponent } from './components/agregar-producto/add-fotografia/add-fotografia.component';
import { AddCelularComponent } from './components/agregar-producto/add-celular/add-celular.component';
import { AddCamaComponent } from './components/agregar-producto/add-cama/add-cama.component';
import { AddBicicletaComponent } from './components/agregar-producto/add-bicicleta/add-bicicleta.component';
import { AddAccesorioCelComponent } from './components/agregar-producto/add-accesorio-cel/add-accesorio-cel.component';
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
import { AddServicioComponent } from './components/agregar-producto/add-servicio/add-servicio.component';

import { AddMicroondaComponent } from './components/agregar-producto/electrodomesticos/add-microonda/add-microonda.component';
import { AddLicuadoraComponent } from './components/agregar-producto/electrodomesticos/add-licuadora/add-licuadora.component';
import { AddPlanchaComponent } from './components/agregar-producto/electrodomesticos/add-plancha/add-plancha.component';
import { AddTelevisionComponent } from './components/agregar-producto/electrodomesticos/add-television/add-television.component';
import { AddRefrigeradorComponent } from './components/agregar-producto/electrodomesticos/add-refrigerador/add-refrigerador.component';

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
import { TblComputadoraComponent } from './components/lista-producto/tbl-computadora/tbl-computadora.component';
import { TblFarmaciaComponent } from './components/lista-producto/tbl-farmacia/tbl-farmacia.component';
import { TblFerreteriaComponent } from './components/lista-producto/tbl-ferreteria/tbl-ferreteria.component';
import { TblFierroComponent } from './components/lista-producto/tbl-fierro/tbl-fierro.component';

import { TblEmpresaComponent } from './components/tbl-empresa/tbl-empresa.component';
import { TblUsuarioComponent } from './components/tbl-usuario/tbl-usuario.component';

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
import { TblServicioComponent } from './components/lista-producto/tbl-servicio/tbl-servicio.component';
import { TblLicuadoraComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-licuadora/tbl-licuadora.component';
import { TblMicroondaComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-microonda/tbl-microonda.component';
import { TblPlanchaComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-plancha/tbl-plancha.component';
import { TblRefrigeradorComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-refrigerador/tbl-refrigerador.component';
import { TblTelevisionComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-television/tbl-television.component';
import { TblVentiladorComponent } from './components/lista-producto/tbl_electrodomesticos/tbl-ventilador/tbl-ventilador.component';
import { TblConfigLineaNegocioComponent } from './components/tbl-config-linea-negocio/tbl-config-linea-negocio.component';

import { LoginNegocioComponent } from './components/login-negocio/login-negocio.component';
import { NavSubheaderComponent } from './components/nav-subheader/nav-subheader.component';
import { ConfigLineaNegocioComponent } from './components/config-linea-negocio/config-linea-negocio.component';
import { AddConfigLineaNegocioComponent } from './components/add-config-linea-negocio/add-config-linea-negocio.component';
import { BusquedaDepartamentosComponent } from './components/busqueda-departamentos/busqueda-departamentos.component';
import { BusquedaPrincipalProductoComponent } from './components/busqueda-principal-producto/busqueda-principal-producto.component';
import { BusquedaDetailsProductoComponent } from './components/busqueda-details-producto/busqueda-details-producto.component';
import { PerfilNegocioComponent } from './components/perfil-negocio/perfil-negocio.component';
import { HomeComponent } from './components/home/home.component'; //PAGINA DE SISTEMA WEB
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GuardNegocioGuard } from './components/guardias/guard-negocio.guard';

//componente de prueba

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  //{ path: 'admin-negocio', component: AdminNegocioComponent },

  { path: 'datos-empresa', component: DatosEmpresaComponent },
  { path: 'datos-empresa/:_id', component: DatosEmpresaComponent },
  { path: 'nav-subheader', component: NavSubheaderComponent },
  { path: 'perfil-usuario', component: DatosUsuarioComponent },
  //RUTA PADREA
  {
    path: 'negocio', component: NegocioComponent,
    canActivate:[GuardNegocioGuard],
    children: [
      { path: '', component: AdminNegocioComponent },
      { path: 'datos', component: AdminNegocioComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'lista-abarrote', component: TblAbarroteComponent },
      { path: 'lista-accesorio-cel', component: TblAccesorioCelComponent },
      { path: 'lista-alimento', component: TblAlimentoComponent },
      { path: 'lista-bicicleta', component: TblBicicletaComponent },
      { path: 'lista-bodega', component: TblBodegaComponent },
      { path: 'lista-cama', component: TblCamaComponent },
      { path: 'lista-carniceria', component: TblCarniceriaComponent },
      { path: 'lista-carpinteria', component: TblCarpinteriaComponent },
      { path: 'lista-celular', component: TblCelularComponent },
      { path: 'lista-cerrajeria', component: TblCerrajeriaComponent },
      { path: 'lista-computadora', component: TblComputadoraComponent },
      { path: 'lista-construccion', component: TblConstruccionComponent },
      { path: 'lista-farmacia', component: TblFarmaciaComponent },
      { path: 'lista-ferreteria', component: TblFerreteriaComponent },
      { path: 'lista-acero', component: TblFierroComponent },
      { path: 'lista-empresa', component: TblEmpresaComponent },
      { path: 'lista-floreria', component: TblFloreriaComponent },
      { path: 'lista-fotografia', component: TblFotografiaComponent },
      { path: 'lista-fruteria', component: TblFruteriaComponent },
      { path: 'lista-funeraria', component: TblFunerariaComponent },
      { path: 'lista-herreria', component: TblHerreriaComponent },
      { path: 'lista-hivernadero', component: TblHivernaderoComponent },
      { path: 'lista-joyeria', component: TblJoyeriaComponent },
      { path: 'lista-moto', component: TblMotoComponent },
      { path: 'lista-muebleria', component: TblMuebleriaComponent },
      { path: 'lista-optica', component: TblOpticaComponent },
      { path: 'lista-papeleria', component: TblPapeleriaComponent },
      { path: 'lista-pintura', component: TblPinturaComponent },
      { path: 'lista-plomeria', component: TblPlomeriaComponent },
      { path: 'lista-relojeria', component: TblRelojeriaComponent },
      { path: 'lista-ropa', component: TblRopaComponent },
      { path: 'lista-tela', component: TblTelaComponent },
      { path: 'lista-usuario', component: TblUsuarioComponent },
      { path: 'lista-veladora', component: TblVeladoraComponent },
      { path: 'lista-calzado', component: TblZapateriaComponent },
      { path: 'lista-servicio', component: TblServicioComponent },
      { path: 'lista-licuadora', component: TblLicuadoraComponent },
      { path: 'lista-microonda', component: TblMicroondaComponent },
      { path: 'lista-plancha', component: TblPlanchaComponent },
      { path: 'lista-refrigerador', component: TblRefrigeradorComponent },
      { path: 'lista-television', component: TblTelevisionComponent },
      { path: 'lista-ventilador', component: TblVentiladorComponent },

      { path: 'agregar-abarrote', component: AddAbarroteComponent },
      { path: 'agregar-abarrote/:_id', component: AddAbarroteComponent },
      { path: 'agregar-servicio/:_tipoServicio', component: AddServicioComponent },
      { path: 'agregar-servicio/:_id', component: AddServicioComponent },
      { path: 'agregar-alimentos', component: AddAlimentosComponent },
      { path: 'agregar-alimentos/:_id', component: AddAlimentosComponent },
      { path: 'agregar-calzado', component: AddZapateriaComponent },
      { path: 'agregar-calzado/:_id', component: AddZapateriaComponent },
      { path: 'agregar-ropa', component: AddRopaComponent },
      { path: 'agregar-ropa/:_id', component: AddRopaComponent },
      { path: 'agregar-farmacia', component: AddFarmaciaComponent },
      { path: 'agregar-farmacia/:_id', component: AddFarmaciaComponent },
      { path: 'agregar-fruteria', component: AddFruteriaComponent },
      { path: 'agregar-fruteria/:_id', component: AddFruteriaComponent },
      { path: 'agregar-construccion', component: AddConstruccionComponent },
      { path: 'agregar-construccion/:_id', component: AddConstruccionComponent },
      { path: 'agregar-optica', component: AddOpticaComponent },
      { path: 'agregar-optica/:_id', component: AddOpticaComponent },
      { path: 'agregar-ferreteria', component: AddFerreteriaComponent },
      { path: 'agregar-ferreteria/:_id', component: AddFerreteriaComponent },
      { path: 'agregar-joyeria', component: AddJoyeriaComponent },
      { path: 'agregar-joyeria/:_id', component: AddJoyeriaComponent },
      { path: 'agregar-muebleria', component: AddMuebleriaComponent },
      { path: 'agregar-muebleria/:_id', component: AddMuebleriaComponent },
      { path: 'agregar-relojeria', component: AddRelojeriaComponent },
      { path: 'agregar-relojeria/:_id', component: AddRelojeriaComponent },
      { path: 'agregar-carniceria', component: AddCarniceriaComponent },
      { path: 'agregar-carniceria/:_id', component: AddCarniceriaComponent },
      { path: 'agregar-cerrajeria', component: AddCerrajeriaComponent },
      { path: 'agregar-cerrajeria/:_id', component: AddCerrajeriaComponent },
      { path: 'agregar-plomeria', component: AddPlomeriaComponent },
      { path: 'agregar-plomeria/:_id', component: AddPlomeriaComponent },
      { path: 'agregar-tela', component: AddTelaComponent },
      { path: 'agregar-tela/:_id', component: AddTelaComponent },
      { path: 'agregar-papeleria', component: AddPapeleriaComponent },
      { path: 'agregar-papeleria/:_id', component: AddPapeleriaComponent },
      { path: 'agregar-fotografia', component: AddFotografiaComponent },
      { path: 'agregar-fotografia/:_id', component: AddFotografiaComponent },
      { path: 'agregar-celular', component: AddCelularComponent },
      { path: 'agregar-celular/:_id', component: AddCelularComponent },
      { path: 'agregar-cama', component: AddCamaComponent },
      { path: 'agregar-cama/:_id', component: AddCamaComponent },
      { path: 'agregar-bicicleta', component: AddBicicletaComponent },
      { path: 'agregar-bicicleta/:_id', component: AddBicicletaComponent },
      { path: 'agregar-accesorio-movil', component: AddAccesorioCelComponent },
      { path: 'agregar-accesorio-movil/:_id', component: AddAccesorioCelComponent },
      { path: 'agregar-computadora', component: AddComputadoraComponent },
      { path: 'agregar-computadora/:_id', component: AddComputadoraComponent },
      { path: 'agregar-moto', component: AddMotoComponent },
      { path: 'agregar-moto/:_id', component: AddMotoComponent },
      { path: 'agregar-herreria', component: AddHerreriaComponent },
      { path: 'agregar-herreria/:_id', component: AddHerreriaComponent },
      { path: 'agregar-carpinteria', component: AddCarpinteriaComponent },
      { path: 'agregar-carpinteria/:_id', component: AddCarpinteriaComponent },
      { path: 'agregar-pintura', component: AddPinturaComponent },
      { path: 'agregar-pintura/:_id', component: AddPinturaComponent },
      { path: 'agregar-hivernadero', component: AddHivernaderoComponent },
      { path: 'agregar-hivernadero/:_id', component: AddHivernaderoComponent },
      { path: 'agregar-acero', component: AddFierroComponent },
      { path: 'agregar-acero/:_id', component: AddFierroComponent },
      { path: 'agregar-veladora', component: AddVeladoraComponent },
      { path: 'agregar-veladora/:_id', component: AddVeladoraComponent },
      { path: 'agregar-bodega', component: AddBodegaComponent },
      { path: 'agregar-bodega/:_id', component: AddBodegaComponent },
      { path: 'agregar-funeraria', component: AddFunerariaComponent },
      { path: 'agregar-funeraria/:_id', component: AddFunerariaComponent },
      { path: 'agregar-floreria', component: AddFloreriaComponent },
      { path: 'agregar-floreria/:_id', component: AddFloreriaComponent },

      { path: 'agregar-microonda', component: AddMicroondaComponent },
      { path: 'agregar-microonda/:_id', component: AddMicroondaComponent },
      { path: 'agregar-licuadora', component: AddLicuadoraComponent },
      { path: 'agregar-licuadora/:_id', component: AddLicuadoraComponent },
      { path: 'agregar-plancha', component: AddPlanchaComponent },
      { path: 'agregar-plancha/:_id', component: AddPlanchaComponent },
      { path: 'agregar-television', component: AddTelevisionComponent },
      { path: 'agregar-television/:_id', component: AddTelevisionComponent },
      { path: 'agregar-refrigerador', component: AddRefrigeradorComponent },
      { path: 'agregar-refrigerador/:_id', component: AddRefrigeradorComponent },
    ]
  },


  { path: 'tbl-config-linea-negocio', component: TblConfigLineaNegocioComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'registrar-negocio', component: RegistrarNegocioComponent },
  { path: 'registrar-negocio/:_id', component: RegistrarNegocioComponent },


  //{ path: 'servicio', component: ServicioComponent },
  { path: 'login', component: LoginNegocioComponent },

  //{ path: 'perfil', component: PerfilComponent },
  // vista para que el usuario pueda seleccionar que tipo de negocio tiene
  { path: 'config-linea-negocio/:_id', component: ConfigLineaNegocioComponent },
  // Vista donde el administrador podra guardar imagen de todos los tipo de negocio que ofrece la plataforma
  // PENDIENTE SE PROGRAMARA HASTA EL FINAL
  { path: 'add-config-linea-negocio', component: AddConfigLineaNegocioComponent },
  { path: 'add-config-linea-negocio/:_id', component: AddConfigLineaNegocioComponent },

  //COMPONENTE DONDE EL USUARIO PODRA VER TODOS LOS PRODUCTOS QUE OFRECE UN NEGOCIO EN ESPECIFICO
  { path: 'perfil-negocio/:_idnegocio', component: PerfilNegocioComponent },
  //componente donde se podra buscar todos lo productos que ofrece un negocio en especifico
  { path: 'busqueda-principal-negocio', component: BusquedaDepartamentosComponent },
  //componente donde se podra buscar cualquier producto de cualquier negocio
  { path: 'busqueda-principal-producto', component: BusquedaPrincipalProductoComponent },
  //{ path: 'busqueda-principal-producto/:nombreProductoBuscar', component: BusquedaPrincipalProductoComponent },
  { path: 'busqueda-principal-producto/:linea/:nombreProductoBuscar', component: BusquedaPrincipalProductoComponent },
  //COMPONENTE DONDE EL USUARIO PODRA VER LAS ESPECIFICACIONES DEL PRODUCTO
  { path: 'busqueda-detalle-producto/:_idnegocio/:_idproducto/:nameTable', component: BusquedaDetailsProductoComponent },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
  { path: 'error-pagina', component: NotFoundPageComponent }
  /*
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

  { path: 'agregar-abarrote', component: AddAbarroteComponent },
  { path: 'agregar-abarrote/:_id', component: AddAbarroteComponent },
  { path: 'agregar-servicio/:_tipoServicio', component: AddServicioComponent },
  { path: 'agregar-servicio/:_id', component: AddServicioComponent },
  { path: 'agregar-alimentos', component: AddAlimentosComponent },
  { path: 'agregar-alimentos/:_id', component: AddAlimentosComponent },
  { path: 'agregar-calzado', component: AddZapateriaComponent },
  { path: 'agregar-calzado/:_id', component: AddZapateriaComponent },
  { path: 'agregar-ropa', component: AddRopaComponent },
  { path: 'agregar-ropa/:_id', component: AddRopaComponent },
  { path: 'agregar-farmacia', component: AddFarmaciaComponent },
  { path: 'agregar-farmacia/:_id', component: AddFarmaciaComponent },
  { path: 'agregar-fruteria', component: AddFruteriaComponent },
  { path: 'agregar-fruteria/:_id', component: AddFruteriaComponent },
  { path: 'agregar-construccion', component: AddConstruccionComponent },
  { path: 'agregar-construccion/:_id', component: AddConstruccionComponent },
  { path: 'agregar-optica', component: AddOpticaComponent },
  { path: 'agregar-optica/:_id', component: AddOpticaComponent },
  { path: 'agregar-ferreteria', component: AddFerreteriaComponent },
  { path: 'agregar-ferreteria/:_id', component: AddFerreteriaComponent },
  { path: 'agregar-joyeria', component: AddJoyeriaComponent },
  { path: 'agregar-joyeria/:_id', component: AddJoyeriaComponent },
  { path: 'agregar-muebleria', component: AddMuebleriaComponent },
  { path: 'agregar-muebleria/:_id', component: AddMuebleriaComponent },
  { path: 'agregar-relojeria', component: AddRelojeriaComponent },
  { path: 'agregar-relojeria/:_id', component: AddRelojeriaComponent },
  { path: 'agregar-carniceria', component: AddCarniceriaComponent },
  { path: 'agregar-carniceria/:_id', component: AddCarniceriaComponent },
  { path: 'agregar-cerrajeria', component: AddCerrajeriaComponent },
  { path: 'agregar-cerrajeria/:_id', component: AddCerrajeriaComponent },
  { path: 'agregar-plomeria', component: AddPlomeriaComponent },
  { path: 'agregar-plomeria/:_id', component: AddPlomeriaComponent },
  { path: 'agregar-tela', component: AddTelaComponent },
  { path: 'agregar-tela/:_id', component: AddTelaComponent },
  { path: 'agregar-papeleria', component: AddPapeleriaComponent },
  { path: 'agregar-papeleria/:_id', component: AddPapeleriaComponent },
  { path: 'agregar-fotografia', component: AddFotografiaComponent },
  { path: 'agregar-fotografia/:_id', component: AddFotografiaComponent },
  { path: 'agregar-celular', component: AddCelularComponent },
  { path: 'agregar-celular/:_id', component: AddCelularComponent },
  { path: 'agregar-cama', component: AddCamaComponent },
  { path: 'agregar-cama/:_id', component: AddCamaComponent },
  { path: 'agregar-bicicleta', component: AddBicicletaComponent },
  { path: 'agregar-bicicleta/:_id', component: AddBicicletaComponent },
  { path: 'agregar-accesorio-movil', component: AddAccesorioCelComponent },
  { path: 'agregar-accesorio-movil/:_id', component: AddAccesorioCelComponent },
  { path: 'agregar-computadora', component: AddComputadoraComponent },
  { path: 'agregar-computadora/:_id', component: AddComputadoraComponent },
  { path: 'agregar-moto', component: AddMotoComponent },
  { path: 'agregar-moto/:_id', component: AddMotoComponent },
  { path: 'agregar-herreria', component: AddHerreriaComponent },
  { path: 'agregar-herreria/:_id', component: AddHerreriaComponent },
  { path: 'agregar-carpinteria', component: AddCarpinteriaComponent },
  { path: 'agregar-carpinteria/:_id', component: AddCarpinteriaComponent },
  { path: 'agregar-pintura', component: AddPinturaComponent },
  { path: 'agregar-pintura/:_id', component: AddPinturaComponent },
  { path: 'agregar-hivernadero', component: AddHivernaderoComponent },
  { path: 'agregar-hivernadero/:_id', component: AddHivernaderoComponent },
  { path: 'agregar-acero', component: AddFierroComponent },
  { path: 'agregar-acero/:_id', component: AddFierroComponent },
  { path: 'agregar-veladora', component: AddVeladoraComponent },
  { path: 'agregar-veladora/:_id', component: AddVeladoraComponent },
  { path: 'agregar-bodega', component: AddBodegaComponent },
  { path: 'agregar-bodega/:_id', component: AddBodegaComponent },
  { path: 'agregar-funeraria', component: AddFunerariaComponent },
  { path: 'agregar-funeraria/:_id', component: AddFunerariaComponent },
  { path: 'agregar-floreria', component: AddFloreriaComponent },
  { path: 'agregar-floreria/:_id', component: AddFloreriaComponent },

  { path: 'agregar-microonda', component: AddMicroondaComponent },
  { path: 'agregar-microonda/:_id', component: AddMicroondaComponent },
  { path: 'agregar-licuadora', component: AddLicuadoraComponent },
  { path: 'agregar-licuadora/:_id', component: AddLicuadoraComponent },
  { path: 'agregar-plancha', component: AddPlanchaComponent },
  { path: 'agregar-plancha/:_id', component: AddPlanchaComponent },
  { path: 'agregar-television', component: AddTelevisionComponent },
  { path: 'agregar-television/:_id', component: AddTelevisionComponent },
  { path: 'agregar-refrigerador', component: AddRefrigeradorComponent },
  { path: 'agregar-refrigerador/:_id', component: AddRefrigeradorComponent },*/



];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
// export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
// export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

