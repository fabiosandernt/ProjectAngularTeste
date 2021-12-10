import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [

  //{ path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'counter', component: CounterComponent },
  //{ path: 'fetch-data', component: FetchDataComponent },
  
  { 
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
 
  {
    path: 'veiculos',
    loadChildren: () => import('./modules/veiculos/veiculos.module').then(m => m.VeiculosModule)
  },

  {
    path: 'cliente',
    loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule)
  },
  
  {
    path: 'administrativo',
    loadChildren: () => import('./modules/administrativo/administrativo.module').then(m => m.AdministrativoModule)
  },

  { path: 'financeiro', loadChildren: () => import('./modules/financeiro/financeiro.module').then(m => m.FinanceiroModule) },
  
  // importante que essas duas rotas sejam as últimas
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), 
    canActivate: [AuthGuard]
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
