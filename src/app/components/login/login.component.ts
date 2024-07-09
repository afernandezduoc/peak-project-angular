import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  goBack() {
    this.router.navigate(['/']);
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      user => {
        if (user) {
          this.authService.setAuthenticatedUser(user);
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error => {
        this.errorMessage = 'Ha ocurrido un error. Por favor, inténtelo de nuevo.';
        console.error('Error during login', error);
      }
    );
  }
}
