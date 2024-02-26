import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConInfoComponent } from './con-info.component';

describe('ConInfoComponent', () => {
  let component: ConInfoComponent;
  let fixture: ComponentFixture<ConInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConInfoComponent],
    });
    fixture = TestBed.createComponent(ConInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
