import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {
  passwordRecoveryForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.passwordRecoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.passwordRecoveryForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.passwordRecoveryForm.valid) {
      // Aquí iría la lógica para recuperar la contraseña
      alert('Recuperación de contraseña solicitada');
    }
  }
}
