import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VeiculosService } from '../../services/veiculos.service';
import { map, startWith } from 'rxjs/operators';


@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public veiculoForm: FormGroup;

  // primeira div
  optionsVeiculo: string[] = ['One', 'Two', 'Three'];
  filteredVeiculo: Observable<string[]>;

  optionsMarca: string[] = ['A', 'B', 'C'];
  filteredMarca: Observable<string[]>;

  optionsModelo: string[] = ['A', 'B', 'C'];
  filteredModelo: Observable<string[]>;

  optionsAnoFabricacao: string[] = ['A', 'B', 'C'];
  filteredAnoFabricacao: Observable<string[]>;

  optionsVersao: string[] = ['A', 'B', 'C'];
  filteredVersao: Observable<string[]>;

  optionsConsignado: string[] = ['Sim', 'Não'];
  filteredConsignado: Observable<string[]>;

  // segunda div

  optionsTipoVeiculo: string[] = ['0km', 'Usado'];
  filteredTipoVeiculo: Observable<string[]>;

  optionsCombustivel: string[] = ['A', 'B', 'C'];
  filteredCombustivel: Observable<string[]>;

  optionsCor: string[] = ['A', 'B', 'C'];
  filteredCor: Observable<string[]>;

  optionsCambio: string[] = ['A', 'B', 'C'];
  filteredCambio: Observable<string[]>;

  optionsPortas: string[] = ['A', 'B', 'C'];
  filteredPortas: Observable<string[]>;


  constructor(
    private _route: ActivatedRoute,
    private _veiculoService: VeiculosService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.veiculoForm = this._formBuilder.group({
      //primeira div
      veiculo: [], // vai usar a CategoriaVeiculo no banco dados
      marca: [],
      chassi: [],
      modelo: [],
      anoFabricacao: [],
      versao: [],
      valorVenda: [],
      fipe: [],
      consignado: [],

      //segunda div
      tipoVeiculo: [],
      combustivel: [],
      cor: [],
      cambio: [],
      portas: [],
      km: [],
      placa: [],
      renavan: [],

    });     

  }

  async insertVeiculo() {

    this._veiculoService.create({ marca: "Fusca" });
    this.optionsMarca = await this._veiculoService.readAll();
  }

  async ngOnInit() {
    this.optionsMarca = await this._veiculoService.readAll();
    this._route.params.subscribe((params) => {
      if (params["id"]) {
        alert("Você tentou abrir o cliente: " + params["id"]); //falta carregar os dados do usuário
        this._router.navigate([''])
      }
    });

    //this.filteredVeiculo = this.veiculoForm.get('veiculo').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsVeiculo)),
    //);

    this.filteredMarca = this.veiculoForm.get('marca').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.optionsMarca)),
    );

    //this.filteredModelo = this.veiculoForm.get('modelo').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsModelo)),
    //);

    //this.filteredAnoFabricacao = this.veiculoForm.get('anoFabricacao').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsAnoFabricacao)),
    //);

    //this.filteredVersao = this.veiculoForm.get('versao').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsVersao)),
    //);

    //this.filteredConsignado = this.veiculoForm.get('consignado').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsConsignado)),
    //);

    //this.filteredTipoVeiculo = this.veiculoForm.get('tipoVeiculo').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsTipoVeiculo)),
    //);
    //this.filteredCombustivel = this.veiculoForm.get('combustivel').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsCombustivel)),
    //);

    //this.filteredCor = this.veiculoForm.get('cor').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsCor)),
    //);
    //this.filteredCambio = this.veiculoForm.get('cambio').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsCambio)),
    //);

    //this.filteredPortas = this.veiculoForm.get('portas').valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value, this.optionsPortas)),
    //);


  }
  private _filter(value: string, options: any[]): any[] {
    
    const filterValue = value.toLowerCase();

    return options.filter(option => option.marca.toLowerCase().includes(filterValue));
  }
}
