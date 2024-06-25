import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.clear();
    service.initializeUsers();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(2);
    expect(users[0].username).toBe('admin');
    expect(users[1].username).toBe('user');
  });

  it('should register a new user', () => {
    service.register({ username: 'testuser', email: 'test@example.com', password: '12345678', role: 'user' });
    const users = service.getUsers();
    expect(users.length).toBe(3);
    expect(users[2].username).toBe('testuser');
  });

  it('should login a user with correct credentials', () => {
    const user = service.login('admin', '1234');
    expect(user).toBeTruthy();
    expect(user?.username).toBe('admin');
  });

  it('should not login a user with incorrect credentials', () => {
    const user = service.login('admin', 'wrongpassword');
    expect(user).toBeFalsy();
  });
});
