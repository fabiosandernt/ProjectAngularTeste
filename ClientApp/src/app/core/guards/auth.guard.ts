import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private router: Router,
      private authService: AuthServiceService
          
    ) { }
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
        let result = this.authService.isLoggedIn()
        if(!result){
          this.router.navigate(["auth/login"])
        }
        return result
            
    }
  }