import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMainPageComponent } from './nav-main-page.component';

describe('NavMainPageComponent', () => {
  let component: NavMainPageComponent;
  let fixture: ComponentFixture<NavMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
