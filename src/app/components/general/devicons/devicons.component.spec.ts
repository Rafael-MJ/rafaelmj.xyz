import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviconsComponent } from '../nav-devicons/nav-devicons.component';

describe('DeviconsComponent', () => {
  let component: DeviconsComponent;
  let fixture: ComponentFixture<DeviconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviconsComponent],
    });
    fixture = TestBed.createComponent(DeviconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
