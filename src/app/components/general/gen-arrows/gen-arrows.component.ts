import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { currentComponent } from 'src/app/app.component';

let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (index: number, enabled: boolean) => {
  switch (index) {
    case 0: lockLeftArrow = enabled; break;
    case 1: lockRightArrow = enabled; break;
  }
}

@Component({
  selector: 'app-gen-arrows',
  templateUrl: './gen-arrows.component.html',
  styleUrl: './gen-arrows.component.css'
})

export class GenArrowsComponent {

  @ViewChild('LeftArrow') leftArrow!: ElementRef;
  @ViewChild('RightArrow') rightArrow!: ElementRef;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    if(lockLeftArrow && lockRightArrow) {
      this.leftArrow.nativeElement.disabled = true;
      this.rightArrow.nativeElement.disabled = true;
    } else if (lockLeftArrow) {
      this.leftArrow.nativeElement.disabled = true;
    } else if (lockRightArrow) {
      this.rightArrow.nativeElement.disabled = true;
    } else {
      this.leftArrow.nativeElement.disabled = false;
      this.rightArrow.nativeElement.disabled = false;
    }
  }

  newRoute(route: string) {
    this.router.navigate(['/'+route]);
  }

  onClickArrow(index: number) {
    if (index == 0) {
      switch (currentComponent) {
        case '_ScrKnowledgeComponent': this.newRoute('main'); break;
        case '_ScrSkillsComponent': this.newRoute('knowledge'); break;
        case '_ScrInfoComponent': this.newRoute('skills'); break;
      }
    } else if(index == 1) {
      switch (currentComponent) {
        case '_ScrMainComponent': this.newRoute('knowledge'); break;
        case '_ScrKnowledgeComponent': this.newRoute('skills'); break;
        case '_ScrSkillsComponent': this.newRoute('infos'); break;
      }
    }
  }
}
