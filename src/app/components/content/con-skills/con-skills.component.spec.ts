import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConSkillsComponent } from './con-skills.component';

describe('ConSkillsComponent', () => {
  let component: ConSkillsComponent;
  let fixture: ComponentFixture<ConSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConSkillsComponent],
    });
    fixture = TestBed.createComponent(ConSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
