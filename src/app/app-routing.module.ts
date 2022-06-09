import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import{MenuMaestroComponent} from './components/menu-maestro/menu-maestro.component'
import {MenuAlumnoComponent} from './components/menu-alumno/menu-alumno.component'
import {MenuAdminComponent} from './components/menu-admin/menu-admin.component'
import {CrearPublicacionComponent} from './components/Maestro/crear-publicacion/crear-publicacion.component'
import {EditarPublicacionComponent} from './components/Maestro/editar-publicacion/editar-publicacion.component'
import { NumeroParImparComponent } from './components/numero-par-impar/numero-par-impar.component';
import {FibonacciComponent} from './components/fibonacci/fibonacci.component'
import {PalabraAlRevezComponent} from './components/palabra-al-revez/palabra-al-revez.component'
import {MultiplicacionComponent} from './components/multiplicacion/multiplicacion.component'

import {DivisionComponent} from './components/division/division.component'

const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch :'full'
  
},
{
path:'division',
component:DivisionComponent

},

{
path:  'multiplicacion',
component: MultiplicacionComponent

},
{
  path: 'palabra_al_revez',
  component:PalabraAlRevezComponent
}
,{
path: 'fibonacci',
component: FibonacciComponent

},
{
  path: 'numero_par_impar',
  component: NumeroParImparComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'menuMaestro',
  component: MenuMaestroComponent
},
{
  path: 'menuAlumno',
  component: MenuAlumnoComponent
},
{
  path: 'menuAdmin',
  component: MenuAdminComponent
},
{
  path:'maestroCrearPublicaciones',
  component:CrearPublicacionComponent
},
{
  path:'maestroEditarPublicacion',
  component:EditarPublicacionComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
