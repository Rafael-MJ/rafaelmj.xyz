import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrMainComponent } from './scr-main.component';

describe('ScrMainComponent', () => {
  let component: ScrMainComponent;
  let fixture: ComponentFixture<ScrMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrMainComponent]
    });
    fixture = TestBed.createComponent(ScrMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
