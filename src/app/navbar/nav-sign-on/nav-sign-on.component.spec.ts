import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSignOnComponent } from './nav-sign-on.component';

describe('NavSignOnComponent', () => {
  let component: NavSignOnComponent;
  let fixture: ComponentFixture<NavSignOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSignOnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavSignOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
