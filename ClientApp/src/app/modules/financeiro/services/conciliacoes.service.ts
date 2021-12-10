import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConciliacoesService {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    console.log(baseUrl)
    
  }
  
}
