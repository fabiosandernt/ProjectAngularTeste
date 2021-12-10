import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private defaultRoute = 'https://localhost:44389/api/veiculos'

  //injeção de dependência
  constructor(private httpClient: HttpClient) { }

  async create(veiculo: any): Promise<number>{
    return await this.httpClient.post(this.defaultRoute, veiculo).toPromise().then((veiculoId)=>{
      return veiculoId;
    }).catch(()=>{
      return null;
    })
  }

  async read(veiculoId: number): Promise<any>{
    return await this.httpClient.get(`${this.defaultRoute}/${veiculoId}`).toPromise().then((veiculo)=>{
      return veiculo;
    }).catch(()=>{
      return null;
    })
  }

  async readAll(): Promise<any[]> {
    return await this.httpClient.get(`${this.defaultRoute}`).toPromise().then((veiculos) => {
      console.log(veiculos);
      return veiculos;
    }).catch(() => {
      return null;
    })
  }
}
