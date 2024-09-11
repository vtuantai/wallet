import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSignInComponent } from './nav-sign-in.component';

describe('NavSignInComponent', () => {
  let component: NavSignInComponent;
  let fixture: ComponentFixture<NavSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
