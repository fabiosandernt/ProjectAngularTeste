import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ConciliacaoBancariaComponent } from './pages/conciliacao-bancaria/conciliacao-bancaria.component';


const routes: Routes = [{ path: 'conciliacaoBancaria', component: ConciliacaoBancariaComponent,

canActivate: [AuthGuard] // AuthGuard só permite acesso rota caso o usuário esteja logado
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
