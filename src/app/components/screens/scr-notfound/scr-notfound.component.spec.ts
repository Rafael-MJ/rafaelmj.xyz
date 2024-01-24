import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrNotfoundComponent } from './scr-notfound.component';

describe('ScrNotfoundComponent', () => {
  let component: ScrNotfoundComponent;
  let fixture: ComponentFixture<ScrNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
