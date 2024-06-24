import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService) {}

  openLogin() {
    // Lógica para abrir el modal de inicio de sesión
  }

  openUser() {
    // Lógica para abrir el modal de usuario autenticado
  }

}
