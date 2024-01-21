import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMsgComponent } from './page-msg.component';

describe('PageMsgComponent', () => {
  let component: PageMsgComponent;
  let fixture: ComponentFixture<PageMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMsgComponent]
    });
    fixture = TestBed.createComponent(PageMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
