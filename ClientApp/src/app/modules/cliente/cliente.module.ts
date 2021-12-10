import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ClienteService } from './services/cliente.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  providers: [ClienteService], //provendo exclusivamente os serviços de cliente 

  declarations: [

    OverviewComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
