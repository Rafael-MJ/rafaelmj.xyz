import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluencyComponent } from './fluency.component';

describe('FluencyComponent', () => {
  let component: FluencyComponent;
  let fixture: ComponentFixture<FluencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FluencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
