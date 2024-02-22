import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrFluencyComponent } from './scr-fluency.component';

describe('ScrFluencyComponent', () => {
  let component: ScrFluencyComponent;
  let fixture: ComponentFixture<ScrFluencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrFluencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrFluencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
