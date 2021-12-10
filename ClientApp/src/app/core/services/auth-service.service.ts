import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private logina: string = 'fabio';
  private password: string = '1234';


  constructor(private _router: Router) { 

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
