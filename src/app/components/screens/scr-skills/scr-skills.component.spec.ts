import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrSkillsComponent } from './scr-skills.component';

describe('ScrSkillsComponent', () => {
  let component: ScrSkillsComponent;
  let fixture: ComponentFixture<ScrSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrSkillsComponent]
    });
    fixture = TestBed.createComponent(ScrSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
