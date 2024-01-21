import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKnowledgeComponent } from './page-knowledge.component';

describe('PageKnowledgeComponent', () => {
  let component: PageKnowledgeComponent;
  let fixture: ComponentFixture<PageKnowledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageKnowledgeComponent]
    });
    fixture = TestBed.createComponent(PageKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
