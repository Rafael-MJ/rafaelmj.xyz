import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConKnowledgeComponent } from './con-knowledge.component';

describe('ConKnowledgeComponent', () => {
  let component: ConKnowledgeComponent;
  let fixture: ComponentFixture<ConKnowledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConKnowledgeComponent],
    });
    fixture = TestBed.createComponent(ConKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
