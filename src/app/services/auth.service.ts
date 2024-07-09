import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath = '/users';

  constructor(private firebaseService: FirebaseService) {
    this.initializeUsers();
  }

  private initializeUsers() {
    this.getUsers().subscribe(users => {
      if (users.length === 0) {
        const initialUsers = [
          { username: 'admin', email: 'admin@example.com', password: '1234', role: 'admin' },
          { username: 'user', email: 'user@example.com', password: '1234', role: 'user' }
        ];
        initialUsers.forEach(user => this.createUser(user));
      }
    });
  }

  getUsers(): Observable<any[]> {
    return this.firebaseService.getUsers();
  }

  createUser(user: any): Promise<void> {
    return this.firebaseService.createUser(user);
  }

  updateUser(key: string, value: any): Promise<void> {
    return this.firebaseService.updateUser(key, value);
  }

  deleteUser(key: string): Promise<void> {
    return this.firebaseService.deleteUser(key);
  }

  login(username: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.username === username && user.password === password))
    );
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
}
