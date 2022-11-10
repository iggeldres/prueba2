import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registro',
    loadChildren: () => import('./backendnf/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicios',
    loadChildren: () => import('./backendnf/inicios/inicios.module').then( m => m.IniciosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./backendnf/visualizarp/visualizarp.module').then( m => m.VisualizarpPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./backendnf/carro/carro.module').then( m => m.CarroPageModule)
  },

  {
    path: 'detalle',
    loadChildren: () => import('./backendnf/detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
