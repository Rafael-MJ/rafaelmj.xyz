import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDeviconsComponent } from './nav-devicons.component';

describe('NavDeviconsComponent', () => {
  let component: NavDeviconsComponent;
  let fixture: ComponentFixture<NavDeviconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDeviconsComponent]
    });
    fixture = TestBed.createComponent(NavDeviconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
