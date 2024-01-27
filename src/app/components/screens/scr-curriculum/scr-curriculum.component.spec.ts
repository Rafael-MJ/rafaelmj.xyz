import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrCurriculumComponent } from './scr-curriculum.component';

describe('ScrCurriculumComponent', () => {
  let component: ScrCurriculumComponent;
  let fixture: ComponentFixture<ScrCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrCurriculumComponent]
    });
    fixture = TestBed.createComponent(ScrCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
