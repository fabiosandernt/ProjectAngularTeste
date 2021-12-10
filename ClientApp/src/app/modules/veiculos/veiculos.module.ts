import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { VeiculosService } from './services/veiculos.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  providers: [VeiculosService], //provendo exclusivamente os serviços de veiculos 

  declarations: [
    OverviewComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VeiculosModule { }
