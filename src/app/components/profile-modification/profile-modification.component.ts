import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-modification',
  templateUrl: './profile-modification.component.html',
  styleUrls: ['./profile-modification.component.css']
})
export class ProfileModificationComponent {
  profileModificationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileModificationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    const user = this.authService.getAuthenticatedUser();
    if (user) {
      this.profileModificationForm.patchValue(user);
    }
  }

  get f() { return this.profileModificationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.profileModificationForm.valid) {
      const user = this.authService.getAuthenticatedUser();
      if (user) {
        this.authService.updateUser(user.index, this.profileModificationForm.value);
        alert('Perfil actualizado exitosamente');
      }
    }
  }
}
