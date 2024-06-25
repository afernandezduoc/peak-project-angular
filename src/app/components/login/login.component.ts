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
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const user = this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      if (user) {
        this.authService.setAuthenticatedUser(user);
        alert('Inicio de sesión exitoso');

        // Redirigir a la página adecuada según el rol del usuario
        if (user.role === 'admin') {
          this.router.navigate(['/admin-section']);
        } else {
          this.router.navigate(['/private-section']);
        }
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  }
}
