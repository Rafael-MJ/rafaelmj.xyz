import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrMsgComponent } from './scr-msg.component';

describe('ScrMsgComponent', () => {
  let component: ScrMsgComponent;
  let fixture: ComponentFixture<ScrMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrMsgComponent]
    });
    fixture = TestBed.createComponent(ScrMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
