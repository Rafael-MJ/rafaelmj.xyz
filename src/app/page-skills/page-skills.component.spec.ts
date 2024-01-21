import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkillsComponent } from './page-skills.component';

describe('PageSkillsComponent', () => {
  let component: PageSkillsComponent;
  let fixture: ComponentFixture<PageSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSkillsComponent]
    });
    fixture = TestBed.createComponent(PageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
