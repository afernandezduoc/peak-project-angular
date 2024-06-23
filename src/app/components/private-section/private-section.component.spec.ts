import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSectionComponent } from './private-section.component';

describe('PrivateSectionComponent', () => {
  let component: PrivateSectionComponent;
  let fixture: ComponentFixture<PrivateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
