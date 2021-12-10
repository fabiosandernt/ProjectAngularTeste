import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
  
export class ClienteService {

  private defaultRoute = ''

  //injeção de dependência
  constructor(private httpClient: HttpClient) { }

  async create(cliente: any): Promise<number>{
    return await this.httpClient.post(this.defaultRoute, cliente).toPromise().then((clienteId)=>{
      return clienteId;
    }).catch(()=>{
      return null;
    })
  }

  async read(clienteId: number): Promise<any>{
    return await this.httpClient.get(`${this.defaultRoute}/${clienteId}`).toPromise().then((cliente)=>{
      return cliente;
    }).catch(()=>{
      return null;
    })
  }

}
