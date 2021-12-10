import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup
  public hide: boolean = true
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthServiceService,
    private router: Router){
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe((valor)=>{
      console.log(valor)
    })
  }

  public tryLogin(){
   let auth = this.authService.login(this.formLogin.get("login").value , this.formLogin.get("password").value) 
    if(auth){
      this.router.navigate(['home'])
    }else 
    alert('Login ou senha inválidos')
      
  }
}
