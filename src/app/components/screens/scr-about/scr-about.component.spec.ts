import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrAboutComponent } from './scr-about.component';

describe('ScrAboutComponent', () => {
  let component: ScrAboutComponent;
  let fixture: ComponentFixture<ScrAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrAboutComponent]
    });
    fixture = TestBed.createComponent(ScrAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
