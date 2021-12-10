import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private AuthService: AuthServiceService) {
   
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.AuthService.logout();
  }
}
