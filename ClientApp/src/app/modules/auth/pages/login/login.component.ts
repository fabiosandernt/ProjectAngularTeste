import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
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
    
  }

  public tryLogin(){

    let email = this.formLogin.get("login").value;
    let senha = this.formLogin.get("password").value;
    this.authService.authentication(email, senha).subscribe(resultado => {
      console.log(resultado);
    },
      error => { console.log(error) }
    );
    
  }
}
