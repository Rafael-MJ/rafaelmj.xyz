import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConAboutComponent } from './con-about.component';

describe('ConAboutComponent', () => {
  let component: ConAboutComponent;
  let fixture: ComponentFixture<ConAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConAboutComponent],
    });
    fixture = TestBed.createComponent(ConAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
