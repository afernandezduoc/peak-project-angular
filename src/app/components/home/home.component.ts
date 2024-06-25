import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService, private router: Router) {}

  openLogin() {
    this.router.navigate(['/login']);
  }

  openUser() {
    this.router.navigate(['/profile-modification']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
