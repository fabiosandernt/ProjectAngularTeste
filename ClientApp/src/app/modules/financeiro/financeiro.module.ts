import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { ConciliacaoBancariaComponent } from './pages/conciliacao-bancaria/conciliacao-bancaria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {Component} from '@angular/core';


@NgModule({
  declarations: [
    ConciliacaoBancariaComponent
  ],
  imports: [
    CommonModule,
    FinanceiroRoutingModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class FinanceiroModule { }
