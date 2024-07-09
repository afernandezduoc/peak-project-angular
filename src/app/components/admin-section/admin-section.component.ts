import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  editUserForm: FormGroup;
  users: User[] = [];
  selectedUserIndex: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.editUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadUserForEdit(key: string) {
    this.selectedUserIndex = key;
    const user = this.users.find(user => user.key === key);
    if (user) {
      this.editUserForm.patchValue(user);
    }
  }

  saveUser() {
    if (this.editUserForm.valid && this.selectedUserIndex !== null) {
      this.authService.updateUser(this.selectedUserIndex, this.editUserForm.value).then(() => {
        this.loadUsers();
        this.resetForm();
      });
    }
  }

  deleteUser(key: string) {
    this.authService.deleteUser(key).then(() => {
      this.loadUsers();
    });
  }

  resetForm() {
    this.editUserForm.reset();
    this.selectedUserIndex = null;
  }

  goBack() {
    window.history.back();
  }

  logout() {
    this.authService.logout();
    window.location.href = 'index.html';
  }
}
