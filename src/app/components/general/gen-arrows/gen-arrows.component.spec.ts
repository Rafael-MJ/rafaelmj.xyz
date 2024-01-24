import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenArrowsComponent } from './gen-arrows.component';

describe('GenArrowsComponent', () => {
  let component: GenArrowsComponent;
  let fixture: ComponentFixture<GenArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenArrowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
