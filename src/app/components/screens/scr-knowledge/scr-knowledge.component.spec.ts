import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrKnowledgeComponent } from './scr-knowledge.component';

describe('ScrKnowledgeComponent', () => {
  let component: ScrKnowledgeComponent;
  let fixture: ComponentFixture<ScrKnowledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrKnowledgeComponent],
    });
    fixture = TestBed.createComponent(ScrKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
