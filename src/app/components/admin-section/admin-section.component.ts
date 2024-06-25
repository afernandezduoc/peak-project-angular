import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

interface User {
  username: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  editUserForm: FormGroup;
  users: User[] = [];
  selectedUserIndex: number | null = null;

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
    this.users = this.authService.getUsers() as User[];
  }

  loadUserForEdit(index: number) {
    this.selectedUserIndex = index;
    const user = this.users[index];
    this.editUserForm.patchValue(user);
  }

  saveUser() {
    if (this.editUserForm.valid && this.selectedUserIndex !== null) {
      this.authService.updateUser(this.selectedUserIndex, this.editUserForm.value);
      this.loadUsers();
      this.resetForm();
    }
  }

  deleteUser(index: number) {
    this.authService.deleteUser(index);
    this.loadUsers();
  }

  resetForm() {
    this.editUserForm.reset();
    this.selectedUserIndex = null;
  }

  logout() {
    this.authService.logout();
    window.location.href = 'index.html';
  }
}
