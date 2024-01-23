import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrInfoComponent } from './scr-info.component';

describe('ScrInfoComponent', () => {
  let component: ScrInfoComponent;
  let fixture: ComponentFixture<ScrInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrInfoComponent]
    });
    fixture = TestBed.createComponent(ScrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
