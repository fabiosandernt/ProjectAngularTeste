import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../../services/cliente.service";

@Component({
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  public clientForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private clientService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.clientForm = this.formBuilder.group({
      tipoPessoa: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      identidade: [null, [Validators.required]],
      orgao: [],
      estadoCivil: [],
      dataDeNascimento: [],
      celular: [],
      telefoneComercial: [],
      nomeDaMae: [],
      nomeDoPai: [],
      telefone: [],
      cep: [],
      estado: [],
      numero: [],
      endereco: [],
      complemento: [],
      bairro: [],
      cidade: [],
      empresa: [],
      salario:[],
      cargo:[],
      banco:[],
      agencia:[],
      tipoPix:[],
      clienteDesde:[],
      conta:[],
      chavePix:[],
      texto:[],
      observacao: []

    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      if (params["id"]) {
        alert("Você tentou abrir o cliente: " + params["id"]); //falta carregar os dados do usuário
        this.router.navigate([''])
      }
    });
  }
}
