import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConFluencyComponent } from './con-fluency.component';

describe('ConFluencyComponent', () => {
  let component: ConFluencyComponent;
  let fixture: ComponentFixture<ConFluencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConFluencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConFluencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
