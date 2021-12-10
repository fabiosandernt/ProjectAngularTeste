import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [{
  path: "cadastro", component: CadastroComponent
},

{
  path: ":id", component: CadastroComponent //rota de edição que busca pelo id
},

{
  path: "", component: OverviewComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
