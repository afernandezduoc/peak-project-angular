import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login button when user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#btnLogin')).toBeTruthy();
  });

  it('should show user menu when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    spyOn(authService, 'getAuthenticatedUser').and.returnValue({ username: 'testuser' });
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#btnUser')).toBeTruthy();
  });

  it('should call logout method of AuthService when logout button is clicked', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    spyOn(authService, 'getAuthenticatedUser').and.returnValue({ username: 'testuser' });
    spyOn(authService, 'logout').and.callThrough();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const logoutButton = compiled.querySelector('#btnUser + .dropdown-menu .dropdown-item:last-child');
    logoutButton.click();
    expect(authService.logout).toHaveBeenCalled();
  });
});
