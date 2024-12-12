import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbtnComponent } from './navbtn.component';

describe('NavbtnComponent', () => {
  let component: NavbtnComponent;
  let fixture: ComponentFixture<NavbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
