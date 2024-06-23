import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModificationComponent } from './profile-modification.component';

describe('ProfileModificationComponent', () => {
  let component: ProfileModificationComponent;
  let fixture: ComponentFixture<ProfileModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
