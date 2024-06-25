import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  editUserForm: FormGroup;
  users = [];
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
    this.users = JSON.parse(localStorage.getItem('users') ?? '') || [];
  }

  loadUserForEdit(index: number) {
    this.selectedUserIndex = index;
    const user = this.users[index];
    this.editUserForm.patchValue(user);
  }

  saveUser() {
    if (this.editUserForm.valid && this.selectedUserIndex !== null) {
      (this.users as any[])[this.selectedUserIndex] = this.editUserForm.value;
      localStorage.setItem('users', JSON.stringify(this.users));
      this.loadUsers();
      this.resetForm();
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
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
