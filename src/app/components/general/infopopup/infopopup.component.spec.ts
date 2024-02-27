import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopopupComponent } from './infopopup.component';

describe('InfopopupComponent', () => {
  let component: InfopopupComponent;
  let fixture: ComponentFixture<InfopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfopopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
