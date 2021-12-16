import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private logina: string = 'fabio';
  private password: string = '1234';


  constructor(private _router: Router, private httpclient: HttpClient) {

  }

  authentication(email: string, senha: string): Observable<any>  {

    return this.httpclient.post("https://localhost:44389/api/Usuarios/login", { email, senha });
  }

  isLoggedIn(): boolean {
    let logado = window.localStorage.getItem("Logado");
    if (logado) {
      return true
    } 
    return false
  }

  logout(): boolean{

    window.localStorage.clear();
    this._router.navigate(['/auth/login']);
    return true

  }

  login(login: string, password: string): boolean {

    if (login == this.logina && password == this.password) {
      window.localStorage.setItem("Logado", "true");
      return true
    }
    else return false

  }

 
}
