import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { MenuMaestroComponent } from './components/menu-maestro/menu-maestro.component';
import { MenuAlumnoComponent } from './components/menu-alumno/menu-alumno.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { CrearPublicacionComponent } from './components/Maestro/crear-publicacion/crear-publicacion.component';
import { EditarPublicacionComponent } from './components/Maestro/editar-publicacion/editar-publicacion.component';
import { NumeroParImparComponent } from './components/numero-par-impar/numero-par-impar.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { PalabraAlRevezComponent } from './components/palabra-al-revez/palabra-al-revez.component';
import { MultiplicacionComponent } from './components/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/division/division.component';
import{CubicaService} from './services/cubica.service' ;


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    MenuMaestroComponent,
    MenuAlumnoComponent,
    MenuAdminComponent,
    CrearPublicacionComponent,
    EditarPublicacionComponent,
    NumeroParImparComponent,
    FibonacciComponent,
    PalabraAlRevezComponent,
    MultiplicacionComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CubicaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
