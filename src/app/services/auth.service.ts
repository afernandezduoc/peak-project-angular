import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    this.initializeUsers();
  }

  private initializeUsers() {
    if (!localStorage.getItem('users')) {
      const initialUsers = [
        {
          username: 'admin',
          email: 'admin@example.com',
          password: '1234',
          role: 'admin'
        },
        {
          username: 'user',
          email: 'user@example.com',
          password: '1234',
          role: 'user'
        }
      ];
      localStorage.setItem('users', JSON.stringify(initialUsers));
    }
  }

  private getUsers() {
    return JSON.parse(localStorage.getItem('users') ?? '[]');
  }

  private setUsers(users: string[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  register(user: any) {
    const users = this.getUsers();
    users.push(user);
    this.setUsers(users);
  }

  login(username: string, password: string) {
    const users = this.getUsers();
    return users.find((user: any) => user.username === username && user.password === password);
  }

  logout() {
    localStorage.removeItem('authenticated');
  }

  getAuthenticatedUser() {
    const authenticatedUser = localStorage.getItem('authenticated');
    return authenticatedUser ? JSON.parse(authenticatedUser) : null;
  }

  setAuthenticatedUser(user: any) {
    localStorage.setItem('authenticated', JSON.stringify(user));
  }

  isAuthenticated() {
    return !!this.getAuthenticatedUser();
  }

  updateUser(index: number, updatedUser: any) {
    const users = this.getUsers();
    users[index] = updatedUser;
    this.setUsers(users);
  }

  deleteUser(index: number) {
    const users = this.getUsers();
    users.splice(index, 1);
    this.setUsers(users);
  }
}
