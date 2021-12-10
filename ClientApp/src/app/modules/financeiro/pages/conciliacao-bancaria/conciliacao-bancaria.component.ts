import { Component, OnInit } from '@angular/core';
import { ConciliacoesService } from '../../services/conciliacoes.service';

@Component({
  templateUrl: './conciliacao-bancaria.component.html',
  styleUrls: ['./conciliacao-bancaria.component.css']
})
export class ConciliacaoBancariaComponent implements OnInit {

  public bancos = [
    {
      id: 1,
      nome:"Itáu"
    },

    {
      id: 2,
      nome:"Bradesco"
    }
  ]

  public conciliacoes = [
    {
      id: 1,
      data: new Date(),
      descricao: "teste",
      fornecedor: "teste",
      tipo: "teste",
      valor: 0,
      saldo: 0,
    }
  ]

  constructor(private conciliacaoService: ConciliacoesService) { }

  ngOnInit(): void {
  }

}
