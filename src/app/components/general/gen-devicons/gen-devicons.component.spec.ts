import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDeviconsComponent } from '../nav-devicons/nav-devicons.component';

describe('GenDeviconsComponent', () => {
  let component: GenDeviconsComponent;
  let fixture: ComponentFixture<GenDeviconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenDeviconsComponent],
    });
    fixture = TestBed.createComponent(GenDeviconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
